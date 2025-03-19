# AI Calendar Helper

A web application that enhances your interaction with Google Calendar through two powerful features:

1. **Text-to-Calendar (Primary)**: Convert unstructured text into Google Calendar events with minimal steps
2. **Novel Events Extraction (Secondary)**: Receive email summaries of upcoming non-recurring calendar events

## Features

### Text-to-Calendar
- Paste any text describing an event
- AI automatically extracts event details (title, time, location, etc.)
- Create Google Calendar events with minimal steps
- Download events as ICS files
- Support for recurring events

### Novel Events Extraction
- Background service that runs on schedule
- Identifies and extracts non-recurring (novel) events from your calendar
- Delivers clean, formatted summaries via email
- Simple configuration with enable/disable toggle

## Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Node.js/TypeScript
- **AI**: OpenAI GPT-4 for natural language processing
- **Auth**: Firebase Authentication
- **Data**: PostgreSQL, Redis (caching)
- **Deployment**: fly.io

## Project Status

This project is currently in the planning phase and will follow a phased implementation approach:

### Phase 1: Text-to-Calendar MVP (4-6 weeks)
- User authentication
- Google Calendar integration
- Text processing with AI
- Simple UI for event creation

### Phase 2: Text-to-Calendar Enhancements
- Confidence scoring
- Improved timezone handling
- Recurring event support
- Security optimizations

### Phase 3: Novel Events Feature
- Background service infrastructure
- Email delivery
- Configuration UI

### Phase 4: Additional Enhancements
- Progressive Web App capabilities
- Redis caching
- Virtual meeting detection

## Installation

```bash
# Clone this repository
git clone https://github.com/yourusername/ai-calendar-helper.git

# Navigate to the project directory
cd ai-calendar-helper

# Install dependencies
npm install

# Set up environment variables (create a .env file based on .env.example)

# Run the development server
npm run dev
```

## Configuration

1. Create a Firebase project and enable Google Authentication
2. Set up a Google Cloud project and enable Calendar API
3. Configure OpenAI API access
4. Update environment variables in your .env file

## Usage

### Text-to-Calendar
1. Log in with your Google account
2. Paste text describing an event in the input box
3. Preview and adjust extracted details if needed
4. Click "Create Event" to add to your Google Calendar

### Novel Events Extraction
1. Navigate to the Configuration page
2. Enable the feature and set your preferences
3. Configure your email and schedule
4. Receive email summaries of your novel calendar events

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

This project is inspired by various calendar automation tools and aims to solve personal pain points around calendar management.

## Project Structure

```
ai-calendar-helper/
├── app/                    # Next.js 13+ App Router
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   │   └── session/    # Session management endpoints
│   │   ├── events/         # Calendar events endpoints
│   │   └── health/         # Health check endpoint
│   ├── globals.css         # Global styles with Tailwind imports
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── auth/               # Authentication components
│   │   ├── SignInButton.tsx # Google sign-in/sign-out button
│   │   └── UserProfile.tsx  # User profile display
│   ├── ui/                 # Base UI components
├── lib/                    # Utility functions and configurations
│   ├── firebase.ts         # Firebase Web SDK configuration
│   ├── firebase-admin.ts   # Firebase Admin SDK configuration
│   └── session.ts          # Session management utilities
├── middleware.ts           # Authentication middleware
├── tests/                  # Centralized test directory
│   ├── unit/               # Unit tests
│   │   ├── components/     # Component tests
│   │   └── api/            # API tests
│   ├── integration/        # Integration tests
│   ├── e2e/                # E2E tests with Playwright
│   ├── mocks/              # Test mocks
│   ├── utils/              # Test utilities
│   └── config/             # Test configuration
│       ├── jest.config.js  # Jest configuration
│       └── setup/          # Test setup files
├── docs/                   # Project documentation
│   └── testing.md          # Testing guide
├── jest.config.js          # Jest configuration wrapper
└── next.config.js          # Next.js configuration
```

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env.local` file with the required environment variables (see below)
4. Run the development server with `npm run dev`

## Environment Variables

Required in `.env.local`:

```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin SDK
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

## Available Commands

```bash
# Development
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server

# Testing
npm test          # Run Jest tests
npm test -- --watch   # Run tests in watch mode
npm test -- --coverage # Run tests with coverage

# Linting & Formatting
npm run lint      # Check ESLint issues
npm run lint:fix  # Fix ESLint issues
npm run format    # Format with Prettier
```

## Authentication

This project uses Firebase Authentication with Google Sign-In. The authentication flow is handled by the `SignInButton` component, which:

1. Initiates Google authentication using Firebase
2. Creates a session using the `/api/auth/session` endpoint
3. Redirects to the dashboard on successful sign-in

## Testing
The project includes comprehensive testing with Jest for unit tests and Playwright for end-to-end tests.

For detailed testing information, see [the testing guide](docs/testing/main.md) and the implementation documentation:
- [Main testing documentation](tests/README-main.md)
- [E2E testing documentation](tests/e2e/README-e2e.md)

## Tech Stack

- **Framework**: Next.js 15.2.2
- **Authentication**: Firebase Auth with Google provider
- **Database**: (Planned) PostgreSQL 
- **Caching**: (Planned) Redis
- **UI**: React 19 with Tailwind CSS
- **Testing**: Jest with React Testing Library
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier