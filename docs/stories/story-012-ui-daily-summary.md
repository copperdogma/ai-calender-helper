# Story: Novel Events Configuration UI (Secondary Feature Page)

**Status**: To Do

---

## Related Requirement
[Novel Events Extraction (Secondary Feature)](../requirements.md#2-novel-events-extraction-secondary-feature)
- "Simple configuration UI with enable/disable toggle"
- "Email recipient setting"
- "Schedule configuration (time of day, frequency)"
- "Parameters for what to include/exclude"

## Alignment with Design
[User Interface Design](../design.md#user-interface-design)
- "Secondary Page: Novel Events Configuration"
  - "Simple configuration form with enable/disable toggle"
  - "Email recipient field"
  - "Schedule selection options"

[Mobile Responsiveness](../design.md#mobile-responsiveness)
- "Responsive design for all screen sizes"
- "Touch-friendly interface"

## Acceptance Criteria
- [ ] Configuration page is accessible from the text-to-calendar landing page via clear navigation
- [ ] UI clearly indicates this is for the Novel Event Extraction feature
- [ ] Prominent toggle to enable/disable the novel event extraction feature
- [ ] Email configuration field with validation
- [ ] Schedule selection options (daily, weekdays, weekends, weekly)
- [ ] Time of day input for scheduled execution
- [ ] Settings for time window (how many days to look ahead)
- [ ] Category exclusion options
- [ ] Clear save/cancel buttons for configuration changes
- [ ] Confirmation of saved settings
- [ ] Configuration status indicator (enabled/disabled)
- [ ] UI adapts to different screen sizes (responsive design)
- [ ] UI follows Material Design principles
- [ ] Form validation provides helpful error messages
- [ ] Touch interactions work properly on mobile devices
- [ ] User must sign off on functionality before story can be marked complete

## Tasks
- [ ] Design component structure for novel events configuration page
- [ ] Implement clear navigation from main landing page
- [ ] Create toggle control for enabling/disabling the feature
- [ ] Build email configuration field with validation
- [ ] Implement schedule selection component
- [ ] Create time of day input with proper format validation
- [ ] Build time window configuration control
- [ ] Implement category exclusion selection
- [ ] Create save/cancel functionality
- [ ] Implement form validation
- [ ] Add confirmation messaging for saved settings
- [ ] Create configuration status indicator
- [ ] Ensure responsive design with TailwindCSS
- [ ] Implement Material Design styling
- [ ] Ensure accessibility compliance
- [ ] Test on various screen sizes and devices
- [ ] Add loading/saving states
- [ ] Integrate with UserPreferences service

## Notes
- This is a SECONDARY feature page, clearly separated from the main text-to-calendar functionality
- Focus on simplicity and clarity - this is a configuration page, not a data visualization page
- The page should emphasize the "set it and forget it" nature of the novel events feature
- All configuration options should have clear explanations
- The email field should validate proper email format
- Time of day should support the user's preferred time format (12h/24h)
- Consider adding a "test now" button to immediately run the extraction process
- Include a link to documentation explaining what novel events are
- Ensure proper error states for configuration saving failures
- Consider adding a configuration history or reset to defaults option 