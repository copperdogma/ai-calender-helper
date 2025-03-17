# Story: Novel Events Extraction & Summary (Background Service)

**Status**: To Do

---

## Related Requirement
[Daily Calendar Summary](../requirements.md#1-daily-calendar-summary)
- "Provide a daily summary of upcoming calendar events"
- "Focus on novel/non-recurring events to reduce noise"
- "Present information in a clear, easy-to-read format"
- "Support flexible date range queries (single day or date range)"

## Alignment with Design
[Feature Implementations - Daily Novel Events Summary](../design.md#feature-daily-novel-events-summary)
- "Use the existing novel-events-extractor component to fetch and filter calendar events"
- "Implement proven filtering logic from reference implementation"
- "Enhanced caching strategy"

[Data Architecture](../architecture.md#data-architecture)
- "Event Data Model"
- "User Preferences Model"

## Acceptance Criteria
- [ ] System runs as a scheduled background service
- [ ] Simple configuration UI with enable/disable toggle
- [ ] Email configuration settings (recipient, format preferences)
- [ ] Schedule configuration (time of day, frequency)
- [ ] Summary parameter settings (include/exclude options)
- [ ] System can fetch calendar events from Google Calendar API
- [ ] Novel events are properly identified and filtered from recurring ones
- [ ] Events are displayed in chronological order in email
- [ ] Email delivery is reliable and properly formatted
- [ ] Timezone handling is accurate
- [ ] Performance is optimized with proper caching
- [ ] User must sign off on functionality before story can be marked complete

## Tasks
- [ ] Create simple configuration UI page
- [ ] Implement background service architecture
- [ ] Build scheduling mechanism
- [ ] Develop email template and delivery service
- [ ] Implement CalendarService with event fetching capabilities
- [ ] Create filtering algorithm to identify novel vs. recurring events
- [ ] Build date range parsing based on schedule configuration
- [ ] Develop event sorting and prioritization
- [ ] Implement timezone detection and conversion
- [ ] Create data formatting for email summary
- [ ] Set up caching mechanism (Redis integration)
- [ ] Implement user preference integration
- [ ] Develop error handling and fallbacks
- [ ] Write tests for background service and email delivery
- [ ] Document the novel events extraction process and configuration options

## Notes
- This feature runs completely separately from the text-to-calendar feature
- Implementation should focus on reliable background processing with minimal UI
- Configuration UI is a simple form with basic options (toggle, email, schedule, parameters)
- The background service should run independently on the configured schedule
- Email delivery is the primary output method for this feature
- Proper timezone handling is critical for accurate event display
- Caching strategy should optimize for reducing API calls
- Filter logic should include settings for what qualifies as "novel"
- The summary should be designed for quick scanning in email format
- Error handling should include notification if the background service fails 