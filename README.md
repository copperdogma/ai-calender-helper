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
