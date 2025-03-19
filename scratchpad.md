# Scratchpad - Project Setup Phase

**Current Phase**: Project Setup

**NOTES**
- Do NOT start building the actual app. That's done in the next phase.
- Update this checklist after every step
- If possible, run the app after every step to ensure it's working.
- Follow tasks in exact order listed

**Remaining Tasks**

1. Testing
   - [x] Add database integration tests
     - [x] Test database connection
     - [x] Test user sync functionality
     - [x] Test connection pool behavior
   - [x] Add API endpoint tests
     - [x] Health endpoint tests
     - [x] Events endpoint tests
     - [x] Auth session endpoint tests
   - [x] Configure test coverage
     - [x] Set global coverage thresholds
     - [x] Configure special case thresholds
     - [x] Document coverage requirements
     - [x] Set up coverage exclusions
   - [x] Fix brittle tests
     - [x] UserProfile.test.tsx
       - Replaced specific alt text test with role-based query
       - Added data-testid attributes for structural elements
       - Fixed image URL testing to handle Next.js Image transformations
       - Added test for fallback content
     - [x] SignInButton.test.tsx
       - Added data-testid and data-auth-state attributes
       - Removed text content dependency
       - Added loading state testing
       - Improved auth flow testing
     - [x] Review all component tests for similar brittleness patterns
       - Removed hard-coded text content dependencies
       - Replaced class-based queries with data-testid
       - Added proper state testing
       - Improved error handling coverage
   - [x] Add E2E testing with Playwright
     - [x] Installation and setup
       - [x] Install Playwright: `npm install --save-dev @playwright/test`
       - [x] Initialize Playwright: `npx playwright install`
       - [x] Create playwright.config.ts with Next.js specific configuration
     - [x] Base E2E test infrastructure
       - [x] Create e2e directory in tests/ folder
       - [x] Set up common fixtures and utilities
       - [x] Create reusable auth helpers for login/logout flows
     - [x] Generic E2E test scenarios
       - [x] Authentication flow testing
       - [x] Navigation and layout validation
       - [x] Accessibility compliance checks
       - [x] Performance metrics collection
     - [x] Create reusable baseline
       - [x] Made tests generic and app-agnostic
       - [x] Implemented flexible selectors for different DOM structures
       - [x] Used soft assertions with logging over hard failures
       - [x] Added detailed documentation
  - [ ] Implement hierarchical rules-based testing documentation
    - [x] Create central testing MDC structure
      - [x] Consolidated into a single rule
    - [x] Create specialized testing MDC files
      - [x] Consolidated into a single rule
    - [x] Configure Cursor rules
      - [x] Created single consolidated rule
    - [x] Update implementation READMEs
      - [x] Create `/__tests__/README.md` if missing
      - [x] Update `/tests/e2e/README.md` to remove duplicated documentation
      - [x] Focus READMEs on implementation details only
    - [x] Consolidate duplicate documentation
      - [x] Included in consolidated rule
      - [x] Update main `/docs/testing.md` to point to MDC files

    - [x] Investigate centralizing test utilities. Currently we have: /__jest__, /__tests__, /coverage, /playwright-report, /test-results, and /tests (e2e)
      - [x] Research best practices for test folder organization
      - [x] Implement centralized test structure:
        - [x] Create a unified `/tests` directory
          - [x] Create `/tests/unit` for Jest component and API tests
          - [x] Create `/tests/integration` for integration tests
          - [x] Move `/tests/e2e` content (already exists)
          - [x] Create `/tests/mocks` for all test mocks
          - [x] Create `/tests/utils` for shared test utilities
          - [x] Create `/tests/config` for test configurations
            - [x] Move jest.config.js to `/tests/config`
            - [x] Move playwright.config.ts to `/tests/config`
            - [x] Move setup files to `/tests/config/setup`
        - [x] Update import paths in test files
        - [x] Update configuration files to reference new paths
        - [x] Add proper gitignore patterns for test artifacts
        - [x] Update package.json test scripts to use new paths
      - [x] Testing the new structure:
        - [x] Verify that all Jest tests still run and pass
        - [x] Verify that all Playwright tests still run and pass
        - [x] Verify that code coverage reports still generate correctly
        - [x] Verify that test artifacts are stored appropriately
      - [x] Documentation updates
        - [x] Update README.md with new test folder structure
        - [x] Update project-reference.mdc with new test folder structure
        - [x] Update testing.mdc with new test folder structure and updated references to all testing docs
        - [x] Create a unified testing guide in the docs
      - [x] Double check that all tests have been moved from the original locations to the new centralized structure
      - [x] Removed now redundant test files from the original locations
    - [x] Rename testing documentation files for better AI usability
      - [x] Files to rename:
        - [x] `/tests/README.md` → `/tests/README-main.md`
        - [x] `/tests/e2e/README.md` → `/tests/e2e/README-e2e.md`
      - [x] Places to update references:
        - [x] `/docs/testing.md` (lines 51-52)
        - [x] `/.cursor/rules/testing.mdc` (lines 176-177, 182-183)
        - [x] Any other files referencing these README files
    - [x] Reorganize testing documentation directory structure
      - [x] Create `/docs/testing/` directory with:
        - [x] Move `/docs/testing.md` → `/docs/testing/main.md`
        - [x] Keep `/docs/testing/e2e-testing.md` in place
        - [x] Create `/docs/testing/index.md` with links to all testing docs
      - [x] Update references:
        - [x] Update `README.md`
        - [x] Update `/.cursor/rules/testing.mdc` 
        - [x] Update MDC references

2. Final Steps
   - [x] Double check all steps are complete
   - [x] Verify all configurations work together
   - [x] Test development environment
   - [x] Update final documentation

** Project Testing Documentation Paths**
## Main Testing Documentation
- /docs/testing/main.md - Main testing guide with setup, configuration and Firebase authentication testing
- /docs/testing/e2e-testing.md - End-to-End testing strategy, challenges, and best practices
- /docs/testing/index.md - Index of all testing documentation with links
## Test Implementation Documentation
- /tests/README-main.md - Unit and API test implementation details with setup, usage and customization guidelines
- /tests/e2e/README-e2e.md - Playwright E2E test suite documentation with setup, usage and customization guidelines
## Testing Utilities Documentation
- /tests/utils/test-utils.tsx - Shared testing utilities for component testing
## Testing References in Architecture
- /docs/architecture.md - Contains testing strategy section (lines 183-189)
## CI/CD Testing Documentation
- /docs/stories/story-025-cicd-pipeline.md - Future plans for CI/CD testing integration
## Testing Overview in Project README
- /README.md - Basic testing information in project overview (lines 202-209)
## Test Data Generation Documentation
- /docs/stories/story-023-test-data-generation.md - Documentation for generating test data
## Current Testing Tasks Tracking
- /scratchpad.md - Contains information about completed and in-progress testing tasks
The documentation structure covers different aspects of testing, from the main framework setup to specific implementations like E2E testing with Playwright. The main /docs/testing.md serves as the primary testing guide, while other documents focus on specific testing types or implementations.


**Completed Tasks**

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
   - [x] Update README.md with project overview and setup instructions

4. Core Dependencies Setup
   - [x] Install and configure TailwindCSS v4
   - [x] Configure PostCSS with @tailwindcss/postcss
   - [x] Set up theme configuration
   - [x] Configure global styles with CSS variables
   - [x] Add Material UI base integration
   - [x] Add remaining Material UI components
   - [x] Complete basic theme setup

5. Authentication and Database Setup
   - [x] Set up Firebase project and configuration
   - [x] Configure Firebase Authentication
   - [x] Set up PostgreSQL database
   - [x] Configure database connection
   - [x] Generate Prisma Client types
   - [x] Set up connection pooling
   - [x] Initialize Prisma migrations
   - [x] Create database utility files
   - [x] Implement Firebase-to-Database User Sync

6. Testing Setup
   - [x] Set up testing environment
     1. ✓ Install Jest and React Testing Library
     2. ✓ Configure Jest for Next.js
     3. ✓ Set up Jest setup files
     4. ✓ Create test utilities
   - [x] Add initial test templates
   - [x] Add auth component tests
     - [x] Set up Firebase auth mocking strategy
     - [x] Implement UserProfile component tests
     - [x] Implement SignInButton component tests
     - [x] Document testing approach for Firebase auth

7. Progressive Web App Setup
   - [x] Install and configure next-pwa package
     - [x] Add next-pwa and webpack dependencies
     - [x] Configure next.config.js with basic PWA settings
     - [x] Set up development/production environment handling
   - [x] Create minimal web manifest
     - [x] Add basic manifest.ts with configurable fields
     - [x] Set up placeholder structure for future customization
   - [x] Configure conservative caching strategy
     - [x] Set up basic service worker configuration
     - [x] Implement minimal asset caching
     - [x] Configure development mode disable
   - [x] Add PWA TypeScript types
     - [x] Add manifest types
     - [x] Add service worker types

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

**Security Considerations**
- All Firebase Admin SDK operations must be server-side only ✓
- Web SDK config should only expose public variables ✓
- Implement proper CORS and CSP headers
- Use secure session cookies ✓
- Rate limit authentication endpoints
- Implement proper error handling

**Issues or Blockers**  
✓ RESOLVED: Firebase Admin SDK browser compatibility
  - Solution: Moved Admin SDK operations to server-side only (API routes)
  - Simplified middleware to only check for cookie presence
  - Perform actual token verification in API routes

✓ RESOLVED: Button styling inconsistencies
  - Solution: Created custom Button component with Tailwind
  - Improved dark theme consistency

✓ RESOLVED: Profile picture hydration issues
  - Solution: Added loading state to prevent hydration mismatch
  - Used standard img tag with proper referrer policy
  - Fixed sizing and styling issues

✓ RESOLVED: Firebase auth mocking in tests
  - Solution: Created direct module mocking approach in test files
  - Made sure mocks are defined before imports
  - Used TypeScript casting to bypass read-only properties
  - Added comprehensive testing documentation

**Recent Progress**
- Successfully implemented PWA foundation with next-pwa
- Fixed styling issues in components
- Configured and documented test coverage
- Created comprehensive E2E testing baseline with Playwright
  - Generic tests that can be reused across projects
  - Flexible authentication helpers
  - Accessibility and performance testing
  - Resilient selectors that adapt to different DOM structures

**Issues or Blockers**  
✓ RESOLVED: Test coverage configuration
  - Solution: Added proper coverage thresholds in jest.config.js
  - Implemented file-level coverage exclusions
  - Added documentation for coverage requirements
  - Used istanbul ignore comments for justified exclusions

**Next Steps**

1. Complete final steps:
   - Double check all setup steps are complete
   - Verify all configurations work together
   - Test the development environment
   - Update final documentation

**Transition to Next Phase**
- Once all tasks are checked off, ask: "Are you ready to move to the Work phase?"
- To move to the next phase, run `./bootstrapping/scripts/transition_to_execute.sh programming work`