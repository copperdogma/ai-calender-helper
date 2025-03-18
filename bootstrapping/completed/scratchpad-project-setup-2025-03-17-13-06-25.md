# Scratchpad - Planning Phase

@scratchpad.md already exists and is your external memory. Use it to help you stay on track.

**Current Phase**: Planning

**Planning Phase Tasks**
- [x] Create design document:
  - [x] Use `/docs/templates/design-template.md` to create `/docs/design.md`
  - [x] Ensure alignment with requirements
  - [x] Include UI/UX considerations if applicable
  - [x] Document key design decisions
- [x] Create architecture document:
  - [x] Use `/docs/templates/architecture-template.md` to create `/docs/architecture.md`
  - [x] Define system components and their interactions
  - [x] Specify technologies and frameworks
  - [x] Document architectural decisions and trade-offs
- [x] Extract and move content from the "Non-Requirements Detail" section of `requirements.md`:
  - [x] Review `/docs/requirements.md` for implementation details
  - [x] Move relevant details to the appropriate design or architecture document
  - [x] Remove the section from requirements.md after ensuring all details are captured
- [x] Create user stories:
  - [x] Use `/docs/templates/stories-template.md` to create `/docs/stories.md`
  - [x] Break down requirements into implementable stories
  - [x] Prioritize stories based on dependencies and importance
  - [x] Ensure everything from `docs/requirements.md`, `docs/design.md`, and `docs/architecture.md` is covered by a story
  - [x] Add a task item in this document for each story added to stories.md
- [X] For each user story, validate the contents against the `docs/requirements.md`, `docs/design.md`, and `docs/architecture.md` documents to ensure all requirements are covered, the story isn't inventing requirements, and the story makes sense.
  - [x] Story 001: Google Calendar API Integration
  - [x] Story 002: User Authentication with Firebase
  - [x] Story 003: Novel Events Extraction & Summary
  - [x] Story 004: Natural Language Processing Setup
  - [x] Story 005: Event Creation from Text
  - [x] Story 006: User Preferences Storage
  - [x] Story 007: Timezone Handling
  - [x] Story 008: Event Preview & Editing
  - [x] Story 009: Confidence Scoring for Extracted Events
  - [x] Story 010: Redis Caching Implementation
  - [x] Story 011: PostgreSQL Database Setup
  - [x] Story 012: Web UI - Daily Summary View
  - [x] Story 013: Web UI - Event Creation Interface
  - [x] Story 014: Recurring Event Support
  - [x] Story 015: Batch Event Creation
  - [x] Story 016: Virtual Meeting Detection & Links
  - [x] Story 017: ICS File Generation
  - [x] Story 018: Error Handling & Recovery
  - [X] Story 019: Security Implementations
  - [X] Story 020: Progressive Web App Capabilities
- [x] Reorder the stories so we're doing the text-to-calendar feature before the calendar event summarization feature because it has lower requirements (no need to email anything).
- [x] Add a test data generation story where we're going to create a large number of plain text calendar events and then use the text-to-calendar feature to convert them to calendar events and then use the calendar event summarization feature to summarize them.
- [x] Add a test data generation story where we're going to create json calendar files with large numbers of events and then use these for testing the logic in the novel event extraction feature.
- [x] Mark Story 015 (Batch Event Creation) as a "possible future enhancement" in both stories.md and the story file.
- [x] Updated Story 003 (Novel Events Extraction) to align with the vision of a simple background service with minimal UI configuration.
- [x] Update existing stories and create new ones to align with updated requirements/design/architecture:
  - [x] Create new story for Email Delivery Service for novel events summaries (Story 021)
  - [x] Create new story for Background Service Infrastructure (scheduled jobs) (Story 022)
  - [x] Formalize test data generation stories in stories.md (Story 023)
  - [x] Update Story 012 (UI Daily Summary) to focus on configuration UI rather than visualization
- [x] Reorder implementation phases in stories.md to prioritize Text-to-Calendar MVP approach with clear delivery timelines
- [x] Create a comprehensive GitHub README.md for the project
- [x] Check in what we have so far to github (if the project is using github).

**Transition to Next Phase**
- When all planning tasks are complete, ask the user: "Are you ready to move to the Project Setup phase?"
- If yes, run: `./bootstrapping/scripts/transition_to_execute.sh programming project-setup`
  - This will copy all files to the correct places to start the Project Setup phase

**User Input**  
- Selected Next.js and React for frontend development
- Chose GPT-4 for natural language processing of event text
- Decided to use Redis for caching and rate limiting
- Opted for Material Design inspired UI components
- Selected fly.io for hosting due to existing account
- Decided to implement as a Progressive Web App for better mobile experience
- Selected Firebase for authentication and potential Google Calendar integration

**Quick Start Assumptions**  
- Assumed the user prefers a web-based solution as no native app was specified
- Assumed integration with Google Calendar only, not other calendar services

**Issues or Blockers**  
- None currently identified

**Decisions Made**
- Selected Next.js and React for frontend development
- Chose GPT-4 for natural language processing of event text
- Decided to use Redis for caching and rate limiting
- Opted for Material Design inspired UI components
- Selected fly.io for hosting due to existing account
- Decided to implement as a Progressive Web App for better mobile experience
- Selected Firebase for authentication and potential Google Calendar integration
- Created 20 user stories covering all requirements from the core documents
- Prioritized stories based on dependencies and MVP functionality

**Reference Implementation Analysis**
Each of these is a full list of tasks to complete and a research tracking document. Only check these off once every item in each of these documents is complete.
- [X] [AI-C Calendar-Automation](docs/references/ai-c-calendar-automation.md)
- [X] [AIPlanner](docs/references/aiplanner.md)
- [X] [fwd2cal](docs/references/fwd2cal.md)

**Reference Implementation Relevance**
Compare the analyses of each reference implementation to the requirements and determine which, if any, are relevant to this project. Reference `docs/requirements.md` and `docs/design.md` to determine relevance. Put the relevant findings in a heading near the top of the document labelled "Relevance to Our Project"
- [x] [AI-C Calendar-Automation](docs/references/ai-c-calendar-automation.md)
- [x] [AIPlanner](docs/references/aiplanner.md)
- [x] [fwd2cal](docs/references/fwd2cal.md)

**Investigation Next Steps**
1. Start with AI-C Calendar-Automation as it most closely matches our tech stack (OpenAI integration)
2. Follow with AIPlanner to understand .ics file generation
3. Review fwd2cal for timezone and multi-calendar insights

Each implementation has its own detailed tracking document with a full checklist and findings. The repositories will be cloned into the `/temp` directory (which has been added to .gitignore).

**Update core documents (architecture.md, design.md, requirements.md) to align with user's clarified vision:**
- Text-to-Calendar as primary landing page with simplified workflow
- Novel Events Extraction as a background service with minimal configuration UI
- Clear separation between the two features
- Simplified event preview and direct creation