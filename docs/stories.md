# Project Stories

AI Calendar Helper

**Note**: This document serves as an index for all story files in `/docs/stories/`, tracking their progress and status.

---

## Story List
| Story ID | Title                | Priority    | Status    | Link                       |
|----------|----------------------|-------------|-----------|----------------------------|
| 002      | User Authentication with Firebase | High | To Do | /docs/stories/story-002-user-authentication-firebase.md |
| 001      | Google Calendar API Integration | High | To Do | /docs/stories/story-001-google-calendar-api-integration.md |
| 004      | Natural Language Processing Setup | High | To Do | /docs/stories/story-004-nlp-setup.md |
| 005      | Event Creation from Text | High | To Do | /docs/stories/story-005-event-creation-from-text.md |
| 013      | Web UI - Event Creation Interface (Primary Landing Page) | High | To Do | /docs/stories/story-013-ui-event-creation.md |
| 008      | Event Preview & Editing (Simplified) | Medium | To Do | /docs/stories/story-008-event-preview-editing.md |
| 017      | ICS File Generation | Low | To Do | /docs/stories/story-017-ics-file-generation.md |
| 009      | Confidence Scoring for Extracted Events | Medium | To Do | /docs/stories/story-009-confidence-scoring.md |
| 011      | PostgreSQL Database Setup | Medium | To Do | /docs/stories/story-011-postgresql-setup.md |
| 007      | Timezone Handling | Medium | To Do | /docs/stories/story-007-timezone-handling.md |
| 014      | Recurring Event Support | Medium | To Do | /docs/stories/story-014-recurring-event-support.md |
| 018      | Error Handling & Recovery | Medium | To Do | /docs/stories/story-018-error-handling.md |
| 019      | Security Implementations | High | To Do | /docs/stories/story-019-security-implementations.md |
| 022      | Background Service Infrastructure | High | To Do | /docs/stories/story-022-background-service-infrastructure.md |
| 003      | Novel Events Extraction & Summary (Background Service) | High | To Do | /docs/stories/story-003-novel-events-summary.md |
| 021      | Email Delivery Service for Novel Events | High | To Do | /docs/stories/story-021-email-delivery-service.md |
| 012      | Novel Events Configuration UI (Secondary Feature Page) | Medium | To Do | /docs/stories/story-012-ui-daily-summary.md |
| 006      | User Preferences Storage | Medium | To Do | /docs/stories/story-006-user-preferences-storage.md |
| 010      | Redis Caching Implementation | Medium | To Do | /docs/stories/story-010-redis-caching.md |
| 016      | Virtual Meeting Detection & Links | Low | To Do | /docs/stories/story-016-virtual-meeting-detection.md |
| 020      | Progressive Web App Capabilities | Low | To Do | /docs/stories/story-020-pwa-capabilities.md |
| 023      | Test Data Generation | Medium | To Do | /docs/stories/story-023-test-data-generation.md |
| 015      | Batch Event Creation (Possible Future Enhancement) | Low | To Do | /docs/stories/story-015-batch-event-creation.md |

## Priority Explanation
- **High**: Core functionality required for MVP
- **Medium**: Important for user experience but not blocking MVP
- **Low**: Nice-to-have features for future iterations

## Implementation Order

### Phase 1: Text-to-Calendar MVP (4-6 weeks)
1. **Minimal Auth & API Integration**
   - Story 002: User Authentication with Firebase
   - Story 001: Google Calendar API Integration

2. **Core Text Processing**
   - Story 004: Natural Language Processing Setup
   - Story 005: Event Creation from Text

3. **Simple UI**
   - Story 013: Web UI - Event Creation Interface (Primary Landing Page)
   - Story 008: Event Preview & Editing (Simplified)
   - Story 017: ICS File Generation

### Phase 2: Text-to-Calendar Enhancements
- Story 009: Confidence Scoring for Extracted Events
- Story 011: PostgreSQL Database Setup (start with local storage in MVP)
- Story 007: Timezone Handling
- Story 014: Recurring Event Support
- Story 018: Error Handling & Recovery
- Story 019: Security Implementations

### Phase 3: Novel Events Feature
- Story 022: Background Service Infrastructure
- Story 003: Novel Events Extraction & Summary (Background Service)
- Story 021: Email Delivery Service for Novel Events
- Story 012: Novel Events Configuration UI (Secondary Feature Page)

### Phase 4: Additional Enhancements
- Story 006: User Preferences Storage (use defaults in MVP)
- Story 010: Redis Caching Implementation (not needed for small scale)
- Story 016: Virtual Meeting Detection & Links
- Story 020: Progressive Web App Capabilities
- Story 023: Test Data Generation
- Story 015: Batch Event Creation (Possible Future Enhancement)

## Notes
- The implementation order is designed to deliver a working Text-to-Calendar MVP as quickly as possible
- Novel Events Extraction is implemented as a separate phase after the core functionality is stable
- The two main features (text-to-calendar and novel event extraction) are clearly separated in the UI and implementation
- Security considerations are integrated throughout all stories
- Some stories may be developed in parallel depending on resource availability
- All stories are derived from requirements in `docs/requirements.md` and aligned with design and architecture in `docs/design.md` and `docs/architecture.md`