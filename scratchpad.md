# Scratchpad - Project Setup Phase

**Current Phase**: Project Setup

**NOTES**
- Do NOT start building the actual app. That's done in the next phase.
- Update this checklist after every step
- If possible, run the app after every step to ensure it's working.
- Follow tasks in exact order listed

**Project Requirements**
1. Technical Stack:
   - Next.js with TypeScript
   - React with TailwindCSS v4
   - Firebase Authentication
   - PostgreSQL integration
   - Redis caching support
   - Material Design inspired components
   - PWA capabilities
   - API routes for calendar operations

2. Implementation Phases:
   - Phase 1: Text-to-Calendar MVP (4-6 weeks)
   - Phase 2: Text-to-Calendar Enhancements
   - Phase 3: Novel Events Feature
   - Phase 4: Additional Enhancements

**Setup Tasks (Execute in Order)**

1. Initial Project Setup
   - [x] Read `/docs/architecture.md` to understand technical requirements
   - [x] Create setup checklist
   - [x] Initialize git repository
   - [x] Create new Next.js + TypeScript project using `create-next-app`

2. Development Environment Configuration
   - [x] Set up ESLint and Prettier
   - [x] Configure TypeScript settings
   - [x] Set up development scripts in package.json
   - [x] Add .gitignore for project-specific files
   - [x] Configure environment variables (.env.example)

3. Project Structure and Documentation
   - [x] Configure project structure following Next.js 13+ best practices
   - [x] Document project structure in `/docs/design.md`
   - [x] Set up API route structure
   - [x] Create documentation templates

4. Core Dependencies Setup
   - [x] Install and configure TailwindCSS v4
   - [x] Configure PostCSS with @tailwindcss/postcss
   - [x] Set up theme configuration
   - [x] Configure global styles with CSS variables
   - [x] Add Material UI base integration
   - [x] Add remaining Material UI components
   - [x] Complete basic theme setup (moved full theme customization to Story 024)

5. Authentication and Database Setup
   - [ ] Set up Firebase project and configuration
   - [ ] Configure Firebase Authentication
   - [ ] Set up PostgreSQL database
   - [ ] Configure database connection and models
   - [ ] Add Redis for caching
   - [ ] Set up environment variables for all services

6. API Integration
   - [ ] Configure Google Calendar API integration
   - [ ] Set up API documentation
   - [ ] Configure API authentication middleware

7. Progressive Web App Setup
   - [ ] Configure PWA settings
   - [ ] Set up service worker
   - [ ] Add manifest.json
   - [ ] Configure offline functionality

8. Testing and CI/CD
   - [ ] Set up testing environment
   - [ ] Add initial test templates
   - [ ] Configure CI/CD pipeline
   - [ ] Add deployment documentation

9. Final Steps
   - [ ] Double check all steps are complete
   - [ ] Verify all configurations work together
   - [ ] Test development environment
   - [ ] Update final documentation
   - [ ] Update README.md with project overview and setup instructions

**Quick Start Assumptions**  
- Using Next.js 13+ with App Router
- Following official documentation for each technology integration
- Minimal setup approach to keep codebase clean and maintainable
- GitHub for version control
- npm for package management

**Issues or Blockers**  
- ✓ RESOLVED: Tailwind CSS v4 PostCSS plugin configuration issue
  - Solution: Installed @tailwindcss/postcss and updated configuration
  - Changed from direct @tailwind directives to @import "tailwindcss"
  - Fixed Material UI style overrides to use CSS variables directly
- Decided against using starter repositories to avoid unnecessary complexity and boilerplate code that might confuse AI assistance

**Recent Progress**
- Successfully integrated Tailwind CSS v4 with proper PostCSS configuration
- Set up basic Material UI integration with theme overrides
- Configured CSS variables for dark/light mode support
- Fixed build and runtime errors related to CSS configuration
- Added essential Material UI components:
  - DateTimePicker for event scheduling
  - Dialog for modals
  - TextField with custom styling
  - Menu/MenuItem for dropdowns
  - Snackbar for notifications
- Updated project documentation with new components
- Created Story 024 for comprehensive theme implementation

**Next Steps**
1. Move on to Authentication and Database setup (Story 002)

**Transition to Next Phase**
- Once all tasks are checked off, ask: "Are you ready to move to the Work phase?"
- To move to the next phase, run `./bootstrapping/scripts/transition_to_execute.sh programming work`