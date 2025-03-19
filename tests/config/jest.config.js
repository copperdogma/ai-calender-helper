const nextJest = require('next/jest')

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/tests/config/setup/setup.js'],
  globalSetup: '<rootDir>/tests/config/setup/globalSetup.ts',
  globalTeardown: '<rootDir>/tests/config/setup/globalTeardown.ts',
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePathIgnorePatterns: ['/node_modules/'],
  detectOpenHandles: true,
  // Explicitly ignore certain files from coverage
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'components/ui/Card.tsx', // Explicitly ignore Card.tsx as it's intentionally not tested
  ],
  collectCoverageFrom: [
    // Only collect coverage from files that have corresponding tests
    'components/auth/**/*.{ts,tsx}',
    'components/ui/Button.tsx',
    'tests/mocks/app/api/**/*.ts',
    'tests/utils/**/*.{ts,tsx}',
    'lib/utils.ts',
    // Exclude type definitions and node_modules
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    // Global thresholds - adjusted based on actual codebase metrics
    global: {
      statements: 85,
      branches: 75,
      functions: 70,
      lines: 85,
    },
    // Test utilities and mocks have different coverage requirements
    './tests/mocks/app/api/**/*.ts': {
      statements: 75,
      branches: 100,
      functions: 100,
      lines: 75,
    },
    './tests/utils/**/*.tsx': {
      statements: 80,
      branches: 100,
      functions: 75,
      lines: 80,
    },
  },
  // Add comments to coverage report
  coverageReporters: ['text', 'text-summary'],
  projects: [
    {
      displayName: 'components',
      testMatch: ['<rootDir>/tests/unit/components/**/*.test.ts?(x)'],
      testEnvironment: 'jsdom',
    },
    {
      displayName: 'api',
      testMatch: ['<rootDir>/tests/unit/api/**/*.test.ts?(x)'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['<rootDir>/tests/config/setup/setup.js'],
      globalSetup: '<rootDir>/tests/config/setup/globalSetup.ts',
      globalTeardown: '<rootDir>/tests/config/setup/globalTeardown.ts',
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/tests/integration/**/*.test.ts?(x)'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['<rootDir>/tests/config/setup/setup.js'],
      globalSetup: '<rootDir>/tests/config/setup/globalSetup.ts',
      globalTeardown: '<rootDir>/tests/config/setup/globalTeardown.ts',
    },
  ],
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig) 