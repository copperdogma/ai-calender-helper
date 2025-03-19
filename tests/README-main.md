# Tests for AI Calendar Helper

This directory contains all tests for the AI Calendar Helper application, including unit tests, API tests, integration tests, and end-to-end tests.

## Directory Structure

```
tests/
├── config/              # Test configuration files
│   ├── jest.config.js   # Jest configuration
│   ├── jest.setup.js    # Jest setup file
│   ├── playwright.config.ts # Playwright configuration
│   └── setup/           # Setup files
│       ├── globalSetup.ts    # Global setup
│       ├── globalTeardown.ts # Global teardown
│       └── setup.js     # Jest setup
├── e2e/                 # End-to-end tests (Playwright)
│   ├── auth/            # Authentication E2E tests
│   │   └── auth-flow.spec.ts # Auth flow tests
│   ├── fixtures/        # E2E test fixtures
│   ├── accessibility.spec.ts # Accessibility tests
│   ├── navigation.spec.ts    # Navigation tests
│   └── performance.spec.ts   # Performance tests
├── unit/                # Unit tests (Jest)
│   ├── api/             # API endpoint tests
│   │   ├── auth/        # Authentication API tests
│   │   ├── events/      # Calendar events API tests
│   │   └── health.test.ts # Health check API test
│   └── components/      # React component tests
│       ├── auth/        # Authentication component tests
│       ├── ui/          # UI component tests
│       └── forms/       # Form component tests
├── integration/         # Integration tests
│   ├── database.test.ts # Database integration tests
│   └── firebase.test.ts # Firebase integration tests
├── mocks/               # Test mocks
│   ├── firebase.ts      # Firebase mocks
│   └── app/api/         # API route mocks
├── utils/               # Test utilities
│   └── test-utils.tsx   # Common test utilities
└── README-main.md       # This file
```

## Running Tests

```bash
# Run all Jest tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in debug mode
npm run test:e2e:debug

# Show E2E test report
npm run test:e2e:report
```

## Test Configuration

Tests are configured using the following files:

- `tests/config/jest.config.js` - Main Jest configuration
- `tests/config/setup/setup.js` - Global test setup
- `tests/utils/test-utils.tsx` - Testing utilities for React components
- `tests/config/playwright.config.ts` - Playwright configuration for E2E tests

## Firebase Authentication Testing

Firebase authentication is mocked directly in test files:

```typescript
// Mock Firebase modules
jest.mock('@/lib/firebase', () => ({
  auth: {
    currentUser: null
  },
  // Add other Firebase methods as needed
}));

// Test with mocked Firebase
test('handles sign in', async () => {
  (auth as any).currentUser = mockUser;
  // Test component with authenticated state
});
```

## API Testing

API tests use node-mocks-http and Next.js app router handlers:

```typescript
// For App Router API endpoints (route.ts files)
import { GET, POST } from '@/app/api/events/route';
import { NextRequest } from 'next/server';

test('GET endpoint returns data', async () => {
  const req = new NextRequest(new Request('https://test.com/api/events'));
  const res = await GET(req);
  
  expect(res.status).toBe(200);
  const data = await res.json();
  expect(data).toHaveProperty('events');
});
```

## Component Testing

Component tests use React Testing Library:

```typescript
import { render, screen, fireEvent } from '@/tests/utils/test-utils';
import Button from '@/components/ui/Button';

test('button handles click', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  await fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

## Coverage Requirements

Coverage thresholds are configured in `tests/config/jest.config.js`:

- Statements: 85%
- Branches: 75%
- Functions: 70%
- Lines: 85%

Exceptions and special cases are documented in the unit testing guide. 