# Project Design

AI Calendar Helper

**Note**: This document outlines the technical design and implementation details (HOW), based on the requirements in `requirements.md`.

---

## Architecture Overview
The application will use a modern web application architecture with a backend service for calendar integration and natural language processing, and a clean web interface for user interactions. The application has two completely separate features: Text-to-Calendar (primary) and Novel Events Extraction (secondary/optional).

## Technology Stack
- Frontend:
  - Next.js for the web application (provides both client and server components)
  - React for UI components
  - TailwindCSS for styling
- Backend:
  - Node.js/TypeScript for the server
  - Google Calendar API for calendar integration
  - Natural Language Processing: GPT-4 API for text parsing (high accuracy for event details extraction)
  - Background service for scheduled novel events extraction
- Infrastructure:
  - fly.io for hosting (selected for existing account)
  - PostgreSQL for user preferences and configuration storage
  - Redis for rate limiting and caching frequent requests
  - Email service for novel events summary delivery

## Feature Implementations

### Feature: Text-to-Calendar (Primary Feature)
**Related Requirement**: [Natural Language Event Creation Section](docs/requirements.md)

The text-to-calendar feature will:
1. Text Processing Pipeline:
   - Initial text cleanup and normalization
   - GPT-4 API call for structured data extraction with prompt engineering for:
     - Accurate date/time parsing
     - Title extraction (prioritizing first line)
     - Location and attendee identification
     - Recurring event pattern detection
   - Validation and enrichment of extracted data
   - Direct event creation with Google Calendar API with minimal intermediary steps

2. Event Data Extraction:
   ```typescript
   interface ExtractedEventData {
     title: string;
     startTime: Date;
     endTime?: Date;
     duration?: number;
     location?: string;
     description?: string;
     attendees?: Array<{
       name: string;
       email?: string;
     }>;
     recurrence?: RecurrenceRule;
     timezone?: string;
     isConferenceCall: boolean;
     conferenceLink?: string;
     conferenceType?: 'zoom' | 'teams' | 'meet' | 'other';
     sourceText: string;           // Original text for reference
     confidence: {                 // Field-level confidence scores
       title: number;              // 0-1 score
       startTime: number;
       endTime: number;
       location: number;
       attendees: number;
       recurrence: number;
     };
   }
   ```

3. AI Processing Enhancement:
   ```typescript
   interface AIProcessingService {
     /**
      * Process text input to extract calendar event details
      */
     extractEventDetails(text: string, userTimezone: string): Promise<ExtractedEventData>;
     
     /**
      * Generate optimal prompt with context awareness
      */
     generateSystemPrompt(userTimezone: string, userPreferences: UserPreferences): string;
     
     /**
      * Validate and enhance the extracted event data
      */
     validateAndEnhance(event: ExtractedEventData): Promise<EnhancedEventData>;
     
     /**
      * Handle cases where information is missing or confidence is low
      */
     resolveAmbiguities(event: ExtractedEventData, requiredFields: string[]): Promise<ResolvedEventData>;
   }
   
   // Example implementation:
   class GPT4ProcessingService implements AIProcessingService {
     async extractEventDetails(text: string, userTimezone: string): Promise<ExtractedEventData> {
       const systemPrompt = this.generateSystemPrompt(userTimezone, userPreferences);
       
       // Single comprehensive prompt instead of parallel prompts
       const completion = await this.openai.createChatCompletion({
         model: "gpt-4",
         messages: [
           { role: "system", content: systemPrompt },
           { role: "user", content: text }
         ],
         temperature: 0.1, // Low temperature for consistent structured data
         response_format: { type: "json_object" }
       });
       
       return this.validateAndEnhance(completion.data.choices[0].message.content);
     }
     
     generateSystemPrompt(userTimezone: string, userPreferences: UserPreferences): string {
       const currentTime = new Date().toLocaleString('en-US', { timeZone: userTimezone });
       return `
         You are an AI assistant that extracts calendar event information from text.
         The current time is ${currentTime} in ${userTimezone}.
         
         Extract a calendar event with these fields:
         - title: Brief event name
         - startTime: When the event starts (ISO datetime)
         - endTime: When the event ends (ISO datetime)
         - location: Where the event takes place
         - description: Additional notes or details
         - attendees: List of people attending
         - isConferenceCall: Whether this is a virtual meeting
         - conferenceLink: Meeting link if provided
         - recurrence: Any recurring pattern
         
         For each field, include a confidence score (0-1) indicating your certainty.
         If information is missing, use null and explain why in a "missing_reason" field.
         
         Format the response as a JSON object.
         ${userPreferences.exampleFormat ? `Example format: ${userPreferences.exampleFormat}` : ''}
       `;
     }
     
     // Additional implementation methods...
   }
   ```

4. User Interface:
   - Clean text input area with instructions for the user
   - Minimal preview of extracted event details
   - Direct creation into Google Calendar
   - One-click ICS file download option

5. Simplified Event Preview:
   - Minimal display of essential event information
   - Basic editing for key fields if needed
   - Quick submission to Google Calendar
   - ICS file download option

### Feature: Novel Events Extraction (Background Service)
**Related Requirement**: [Daily Calendar Summary Section](docs/requirements.md)

The daily summary feature will:
1. Run as a scheduled background service:
   - Execute based on user-defined schedule
   - Fetch calendar events via Google Calendar API
   - Filter for novel (non-recurring) events
   - Generate email summary
   - Deliver to user's configured email address

2. Implement proven filtering logic from reference implementation:
   - Handle both date-only and datetime events
   - Proper timezone conversion and handling
   - Expansion of recurring events using `singleEvents=true`
   - Efficient date range parsing and validation
   - Support for customizable result limits

3. Enhanced caching strategy:
   - Store daily summaries in Redis with 1-hour TTL
   - Update cache when new events are created
   - Maintain no persistent event storage (following reference implementation)
   - Cache only processed summaries, not raw event data

4. Simple configuration UI:
   - Enable/disable toggle for the service
   - Email recipient configuration
   - Schedule settings (time of day, frequency)
   - Summary parameters (what to include/exclude)

5. Email delivery:
   - Well-formatted HTML email with event details
   - Chronological order of events
   - Clear categorization and highlighting
   - Mobile-friendly email layout

Implementation approach:
```typescript
interface EventSummary {
  date: string;
  events: NovelEvent[];
  totalEvents: number;
  categories: string[];
  dateRange: {
    start: string;
    end: string;
  };
  timezone: string;
}

interface NovelEventsExtractorConfig {
  enabled: boolean;
  emailAddress: string;
  schedule: 'daily' | 'weekdays' | 'weekends' | 'weekly';
  timeOfDay: string; // HH:MM format
  timeWindow: number; // days to look ahead
  excludedCategories: string[];
  maxResults: number;
}

interface DateRange {
  start: Date;
  end: Date;
}

class NovelEventsService {
  async executeExtraction(config: NovelEventsExtractorConfig): Promise<void> {
    if (!config.enabled) {
      return;
    }
    
    const dateRange = this.calculateDateRange(config);
    const events = await this.fetchFromGoogleCalendar({
      timeMin: dateRange.start.toISOString(),
      timeMax: dateRange.end.toISOString(),
      maxResults: config.maxResults,
      singleEvents: true,
      orderBy: 'startTime'
    });
    
    const novelEvents = this.filterNovelEvents(events, config);
    if (novelEvents.length > 0) {
      const summary = this.generateSummary(novelEvents, dateRange, config);
      await this.sendEmail(config.emailAddress, summary);
    }
  }
  
  private calculateDateRange(config: NovelEventsExtractorConfig): DateRange {
    // Calculate date range based on schedule configuration
    const now = new Date();
    const start = new Date(now);
    const end = new Date(now);
    end.setDate(end.getDate() + config.timeWindow);
    return { start, end };
  }
  
  private filterNovelEvents(events: CalendarEvent[], config: NovelEventsExtractorConfig): NovelEvent[] {
    // Filter out recurring events and apply category exclusions
    return events.filter(event => {
      // Check if it's a novel event (not recurring)
      const isNovel = !event.recurrence;
      
      // Check if it's in an excluded category
      const category = this.detectCategory(event);
      const isExcluded = config.excludedCategories.includes(category);
      
      return isNovel && !isExcluded;
    });
  }
  
  private async sendEmail(to: string, summary: EventSummary): Promise<void> {
    // Generate email from summary and send
    const emailHtml = this.generateEmailHtml(summary);
    await this.emailService.send({
      to,
      subject: `Novel Events Summary for ${summary.date}`,
      html: emailHtml
    });
  }
}
```

## User Interface Design

### Primary Landing Page: Text-to-Calendar
- Clean, minimal interface with:
  - Simple instructions for the user
  - Large text input area
  - "Create Event" button
  - ICS download option
  - Clear navigation to Novel Events Configuration page

### Secondary Page: Novel Events Configuration
- Simple configuration form with:
  - Enable/disable toggle
  - Email recipient field
  - Schedule selection (daily, weekdays, etc.)
  - Time of day preference
  - Include/exclude parameters
  - Save configuration button

### Event Preview Card (Simplified)
- Minimal Material Design card showing:
  - Event title and time
  - Location (if available)
  - Basic action buttons (Create/Download/Cancel)

### Mobile Responsiveness
- Responsive design for all screen sizes
- Touch-friendly interface
- Native share integration
- Progressive Web App support

## Performance Considerations
1. Client-side:
   - Debounced text processing
   - Simple, efficient UI with minimal state
   - Cached API responses
   - Progressive Web App capabilities

2. Server-side:
   - Redis caching for frequent queries
   - Background processing for novel events extraction
   - Rate limiting for API calls
   - Scheduled job management for email deliveries

## Security Measures
1. Authentication:
   - OAuth 2.0 with Google
   - Secure session management
   - CSRF protection

2. Data Protection:
   - End-to-end encryption for sensitive data
   - Rate limiting per user
   - Input sanitization
   - Audit logging

## Error Handling
1. User-facing Errors:
   ```typescript
   class ErrorHandler {
     /**
      * Handle and normalize AI processing errors
      */
     handleAIProcessingError(error: any): UserFacingError {
       if (error.type === 'api_error') {
         return {
           message: "Sorry, we couldn't process your text right now. Please try again.",
           suggestedAction: "Try again or simplify your input text.",
           severity: "error",
           code: "AI_PROCESSING_FAILED"
         };
       }
       
       if (error.type === 'validation_error') {
         return {
           message: `We couldn't understand some details: ${error.details.join(', ')}`,
           suggestedAction: "Please provide more details or correct the information.",
           severity: "warning",
           code: "VALIDATION_FAILED",
           fieldErrors: error.fieldErrors
         };
       }
       
       // Default error handling
       return {
         message: "Something went wrong. Please try again.",
         suggestedAction: "Refresh the page or try again later.",
         severity: "error",
         code: "UNKNOWN_ERROR"
       };
     }
     
     /**
      * Handle calendar API errors
      */
     handleCalendarError(error: any): UserFacingError {
       // Specific error handling based on Google Calendar API errors
       if (error.code === 403) {
         return {
           message: "You don't have permission to access this calendar.",
           suggestedAction: "Try a different calendar or check your permissions.",
           severity: "error",
           code: "CALENDAR_PERMISSION_DENIED"
         };
       }
       
       // Other specific error handling
       return {
         message: "Unable to access your calendar right now.",
         suggestedAction: "Check your internet connection or try again later.",
         severity: "error",
         code: "CALENDAR_ACCESS_FAILED"
       };
     }
   }
   ```

2. System Errors:
   - Graceful degradation
   - Automatic retry mechanisms
   - Error tracking and monitoring
   - Admin notifications for critical issues

class TimezoneService {
  /**
   * Detect timezone from location string
   */
  async detectFromLocation(location: string): Promise<string> {
    try {
      // Use geocoding API to get coordinates
      const coordinates = await this.geocodeLocation(location);
      
      // Use timezone API to get IANA timezone
      const timezone = await this.getTimezoneFromCoordinates(coordinates);
      
      return timezone;
    } catch (error) {
      // Fallback to user's default timezone
      return this.getUserDefaultTimezone();
    }
  }
  
  /**
   * Validate if a timezone string is a valid IANA timezone
   */
  validateTimezone(timezone: string): boolean {
    try {
      Intl.DateTimeFormat(undefined, { timeZone: timezone });
      return true;
    } catch (error) {
      return false;
    }
  }
  
  /**
   * Get user's default timezone
   */
  getUserDefaultTimezone(): string {
    // Get from user preferences or detect from browser
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  
  /**
   * Convert a date to a specific timezone
   */
  convertToTimezone(date: Date, timezone: string): Date {
    // Use Intl API to format a date in a specific timezone
    return new Date(
      new Date(date).toLocaleString('en-US', { timeZone: timezone })
    );
  }
}