# Story: Virtual Meeting Detection & Links

**Status**: To Do

---

## Related Requirement
[Natural Language Event Creation](../requirements.md#2-natural-language-event-creation)
- "Conference call details (detect virtual meeting links or needs)"

[Extended Features (Post-MVP)](../requirements.md#extended-features-post-mvp)
- "Conference call platform integration (Zoom, Teams, Google Meet)"

## Alignment with Design
[Data Architecture](../architecture.md#data-architecture)
- "Extracted Event Data Model":
  ```typescript
  interface ExtractedEventData {
    // ...
    isConferenceCall: boolean;
    conferenceLink?: string;
    conferenceType?: 'zoom' | 'teams' | 'meet' | 'other';
  }
  ```

[Feature: Daily Novel Events Summary](../design.md#feature-daily-novel-events-summary)
- "Handle conference calls if needed"
- "Create conference details based on type (Google Meet, Zoom, etc.)"

## Acceptance Criteria
- [ ] System detects virtual meeting needs from natural language
- [ ] Common meeting platforms are recognized (Zoom, Teams, Meet, etc.)
- [ ] Existing meeting links in text are properly extracted
- [ ] System can automatically generate meeting links when requested
- [ ] Generated links are properly formatted for calendar invitations
- [ ] Meeting details are included in event creation
- [ ] Virtual meetings are visually indicated in the event preview
- [ ] User can edit or remove virtual meeting details
- [ ] Conference details are correctly created in Google Calendar
- [ ] Meeting platform preferences can be saved for future events
- [ ] User must sign off on functionality before story can be marked complete

## Tasks
- [ ] Enhance GPT4ProcessingService to detect virtual meeting needs
- [ ] Implement meeting link extraction from text
- [ ] Create meeting platform detection logic
- [ ] Integrate with Google Meet API for link generation
- [ ] Add support for other meeting platforms (Zoom, Teams) if feasible
- [ ] Build virtual meeting editor interface
- [ ] Create visual indicators for virtual meetings
- [ ] Implement meeting details formatting for calendar
- [ ] Add user preference for default meeting platform
- [ ] Integrate with event creation workflow
- [ ] Test with various meeting formats and platforms
- [ ] Document virtual meeting detection and creation

## Notes
- Use pattern matching for existing meeting links (regex for Zoom, Teams, Meet URLs)
- Detect meeting intent from phrases like "virtual meeting", "conference call", "video chat"
- For generated links, focus on Google Meet integration first as it's most compatible
- Consider privacy and security implications of meeting links
- Ensure the user can easily edit or remove auto-detected meeting details
- Provide clear visual distinction between detected vs. generated meeting links
- This feature saves significant time for users who frequently create virtual meetings
- Coordinate with User Preferences Storage (Story 006) for platform preferences
- Meeting links should be prominent in both the preview and final calendar event 