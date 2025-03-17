# Story: Web UI - Event Creation Interface (Primary Landing Page)

**Status**: To Do

---

## Related Requirement
[Natural Language Event Creation](../requirements.md#2-natural-language-event-creation)
- "Allow user review before final event creation"
- "Provide immediate visual feedback during parsing"
- "Include confidence scoring for extracted fields"
- "Suggest intelligent defaults for missing information"

## Alignment with Design
[User Interface Design](../design.md#user-interface-design)
- "Event Creation Interface"
  - "Large text input area"
  - "Real-time parsing feedback"
  - "Preview cards for extracted events"

[Event Preview Cards](../design.md#event-preview-cards)
- "Material Design inspired cards showing:
  - Event title and time
  - Location with map preview
  - Attendee avatars
  - Quick action buttons
  - Edit/Confirm/Cancel options"

## Acceptance Criteria
- [ ] UI serves as the primary landing page after user authentication
- [ ] Text-to-calendar functionality is the clear focus of this page
- [ ] Clear navigation to the separate Novel Event Extraction feature
- [ ] UI provides a clean text input area for event description
- [ ] Real-time feedback shows extraction progress and results
- [ ] Preview cards display all extracted event details
- [ ] User can edit any extracted field before confirmation
- [ ] Confidence scores are visually indicated for each field
- [ ] Interface correctly handles ambiguous or missing information
- [ ] UI is responsive and works on all screen sizes
- [ ] Submit/confirm actions are clear and accessible
- [ ] Error states provide helpful guidance
- [ ] Keyboard navigation works properly
- [ ] Option to download event as ICS file is clearly available
- [ ] User must sign off on functionality before story can be marked complete

## Tasks
- [ ] Design component structure for event creation interface as primary landing page
- [ ] Implement clear feature separation with navigation to Novel Event Extraction
- [ ] Implement text input area with proper styling
- [ ] Create extraction feedback indicators
- [ ] Build editable event preview cards
- [ ] Implement confidence score visualization
- [ ] Create field-specific editing components
- [ ] Add validation for edited fields
- [ ] Implement submit/confirm/cancel actions
- [ ] Create error state components
- [ ] Add ICS file download functionality
- [ ] Integrate with GPT4ProcessingService
- [ ] Ensure keyboard accessibility
- [ ] Test on various screen sizes and devices
- [ ] Optimize real-time feedback performance

## Notes
- This is the PRIMARY landing page after user login - make it welcoming and intuitive
- Focus on a clean, distraction-free input experience
- Provide immediate visual feedback during the extraction process
- Use color and icons to indicate confidence levels
- Make editing extracted information intuitive and straightforward
- Consider implementing auto-suggestions for incomplete fields
- Ensure the interface handles errors gracefully with helpful messages
- Preview cards should match the Material Design aesthetic
- Mobile view may need a simplified or stepped approach
- This is a key differentiating feature of the application
- Create clear, visually distinctive separation between this feature and the Novel Event Extraction feature 