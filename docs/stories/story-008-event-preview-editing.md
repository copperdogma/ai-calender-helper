# Story: Event Preview & Editing (Simplified)

**Status**: To Do

---

## Related Requirement
[Natural Language Event Creation](../requirements.md#2-natural-language-event-creation)
- "Allow user review before final event creation"
- "Create a draft Google Calendar event with extracted information"

## Alignment with Design
[Event Preview Cards](../design.md#event-preview-cards)
- "Material Design inspired cards showing:
  - Event title and time
  - Location with map preview
  - Attendee avatars
  - Quick action buttons
  - Edit/Confirm/Cancel options"

## Acceptance Criteria
- [ ] Minimal event preview displays essential extracted information clearly
- [ ] Preview focuses on key fields: title, time, location
- [ ] Basic editing options for quick corrections if needed
- [ ] Direct creation into Google Calendar with minimal steps
- [ ] Option to download as ICS file without additional steps
- [ ] Preview accurately represents how the event will appear in calendar
- [ ] User must sign off on functionality before story can be marked complete

## Tasks
- [ ] Design simplified preview card with minimal required fields
- [ ] Create streamlined event field editing components
- [ ] Implement direct Google Calendar creation button
- [ ] Add one-click ICS file download option
- [ ] Implement basic validation for edited fields
- [ ] Create simplified save/cancel actions
- [ ] Ensure all components are responsive
- [ ] Test with various event types and edge cases
- [ ] Document simplified preview and editing functionality

## Notes
- Focus on simplicity and direct event creation
- Minimize steps between text input and calendar creation
- Reduce cognitive load by focusing only on essential information
- Enable direct creation into Google Calendar with minimal user intervention
- Ensure validation provides helpful guidance for invalid inputs
- Provide both calendar creation and ICS download options
- This component should prioritize speed and efficiency over comprehensive editing
- Coordinate with the Confidence Scoring feature (Story 009) for visual indicators of uncertainty 