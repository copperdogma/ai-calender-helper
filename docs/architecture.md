# Project Architecture

AI Calendar Helper

**Note**: This document details the architectural decisions and setup progress for the project.

---

## System Components

### Frontend
- **Next.js Web Application**: Provides both client and server components
  - React for component-based UI
  - TailwindCSS for styling
  - Progressive Web App capabilities for mobile experience
  - Material Design inspired UI components
  - Clear separation between primary (Text-to-Calendar) and secondary (Novel Events) features

### Backend
- **Node.js/TypeScript Server**:
  - API routes for data processing
  - Server-side rendering for performance
  - Middleware for authentication and security
  - Background service for scheduled novel events extraction

### External Services
- **Google Calendar API**: Core integration for calendar operations
- **OpenAI GPT-4 API**: Natural language processing for event extraction
- **Redis**: Caching and rate limiting
- **PostgreSQL**: User preferences and configuration storage
- **Firebase**: Authentication and potentially Google Calendar access
- **Email Service**: For delivering novel events summaries

### Data Flow
```
Feature 1 (Primary): Text-to-Calendar
User → Next.js App (Text-to-Calendar UI) → Node.js API → GPT-4 API → Google Calendar API → Event Creation

Feature 2 (Secondary): Novel Events Extraction
Background Service → Google Calendar API → Novel Events Filtering → Email Service → User's Email
                   ↓
                 Redis (caching)
                   ↓
                 User Preferences (PostgreSQL)
```

## Architectural Decisions
- **Next.js + React**: Selected for its hybrid rendering approach, providing both server-side rendering for SEO/performance and client-side interactivity
- **GPT-4 for NLP**: Chosen for its high accuracy in extracting structured data from unstructured text
- **Redis Caching**: Implemented for performance optimization and rate limiting
- **fly.io Hosting**: Selected for hosting due to existing account and deployment capabilities
- **Firebase Authentication**: Used for user authentication and potential Google Calendar integration
- **Progressive Web App**: Decided to implement as PWA for better mobile experience
- **Material Design UI**: Adopted for consistent, accessible user interface components
- **Serverless Functions**: Used for API routes to ensure scalability
- **PostgreSQL Database**: Chosen for structured data storage while maintaining flexibility
- **Feature Separation**: Clear architectural separation between Text-to-Calendar and Novel Events Extraction features
- **Background Service**: Novel Events Extraction runs as a scheduled background service with minimal UI configuration

## Infrastructure Architecture
- **Deployment**: fly.io for hosting and CI/CD pipeline
- **Database**: PostgreSQL for persistent storage
- **Caching Layer**: Redis for performance optimization
- **API Gateway**: fly.io for routing and basic middleware
- **Authentication**: Firebase Authentication with Google provider
- **Monitoring**: Custom logging and monitoring solution
- **Scheduled Jobs**: Background service for novel events extraction and email delivery

## Data Architecture
- **Event Data Model**:
  ```typescript
  interface CalendarEvent {
    id: string;
    summary: string;
    description?: string;
    start: string | { dateTime: string, timeZone: string };
    end: string | { dateTime: string, timeZone: string };
    location?: string;
    creator: { email: string };
    created: string;
    updated: string;
    status: string;
    recurrence?: string[];
  }
  ```

- **User Preferences Model**:
  ```typescript
  interface UserPreferences {
    defaultCalendarId: string;
    timeZone: string;
    displayPreferences: {
      theme: 'light' | 'dark' | 'system';
      dateFormat: string;
      timeFormat: '12h' | '24h';
    };
    notificationSettings: {
      enableNovelEventsExtraction: boolean;
      dailySummaryTime: string;
      emailAddress: string;
      summarySchedule: 'daily' | 'weekdays' | 'weekends' | 'weekly';
      enablePushNotifications: boolean;
    };
    eventCreationDefaults: {
      defaultDuration: number;
      defaultVisibility: 'default' | 'public' | 'private';
      defaultReminders: Array<{
        method: 'email' | 'popup';
        minutes: number;
      }>;
    };
  }
  ```

- **Extracted Event Data Model**:
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
    sourceText: string;
    confidence: {
      title: number;
      startTime: number;
      endTime: number;
      location: number;
      attendees: number;
      recurrence: number;
    };
  }
  ```

## Security Architecture
- OAuth 2.0 authentication with Google
- Secure credential storage with encryption
- CSRF protection for all forms
- Rate limiting to prevent abuse
- Input sanitization and validation
- Read-only scopes for calendar access when possible
- HTTPS for all communications
- API key rotation policy
- Audit logging for sensitive operations

## API Architecture
- RESTful API design principles
- OpenAPI/Swagger documentation
- Versioned API endpoints
- Rate limiting and throttling
- Error standardization
- Feature-specific endpoints with clear separation between:
  - Text-to-Calendar event creation
  - Novel Events Extraction configuration

## Setup Progress
- [ ] Set up Next.js project with TypeScript
- [ ] Configure TailwindCSS and UI component library
- [ ] Implement Firebase Authentication
- [ ] Set up PostgreSQL database schema
- [ ] Configure Redis for caching
- [ ] Integrate Google Calendar API via Firebase (if possible) or directly
- [ ] Implement OpenAI GPT-4 API for text processing
- [ ] Create API routes for calendar operations
- [ ] Develop UI for text-to-calendar (primary landing page)
- [ ] Implement direct event creation with minimal preview
- [ ] Set up background service for novel events extraction
- [ ] Create simple configuration UI for novel events extraction
- [ ] Implement email delivery for novel events summaries
- [ ] Set up ICS file generation
- [ ] Implement PWA capabilities
- [ ] Set up fly.io deployment

## Testing Strategy
- Unit testing with Jest
- Component testing with React Testing Library
- API testing with Supertest
- End-to-end testing with Playwright
- Accessibility testing with axe-core
- Performance testing with Lighthouse
- Security scanning with OWASP ZAP

## Notes
- The architecture follows a modular approach with clear separation between the two main features
- Text-to-Calendar is the primary feature and entry point for users after authentication
- Novel Events Extraction runs as a background service with minimal configuration UI
- We're prioritizing PWA capabilities to ensure a native-like experience on mobile devices
- The caching strategy is designed to minimize API calls to both Google Calendar and OpenAI APIs
- Feature flags will be implemented to gradually roll out new functionality
- We'll follow the reference implementations' best practices while improving upon their limitations
- Existing `/docs/novel-gcal-events-extractor` project will be used as reference/foundation for the events extraction feature
- Reference implementation at text-to-cal.com demonstrates similar functionality for text-to-calendar conversion
- AI-based parsing (GPT-4) will be the only method for text processing