# AIPlanner Analysis

**Repository**: [AIPlanner](https://github.com/ahnazary/AIPlanner)

**Relevance to Our Project**
- **High Relevance Areas**:
  - Clean event data structure that matches our requirements
  - Effective AI prompt design for event extraction
  - ICS file generation implementation we can adapt
  - Simple but effective error handling patterns
  - RESTful API design for calendar operations

- **Adaptation Needed**:
  - Replace Ollama with GPT-4 for better accuracy
  - Add Google Calendar API integration
  - Implement persistent storage (currently uses temporary files)
  - Add multi-user support and authentication
  - Add support for recurring events

- **Key Learnings**:
  - Structured AI output format using dictionaries
  - Progressive prompting for missing information
  - Clean separation of calendar operations
  - Effective temporary file handling
  - Simple but functional containerization approach

## Investigation Checklist
- [x] Review Python/Flask architecture
- [x] Study Ollama integration for NLP
- [x] Analyze .ics file generation
- [x] Review Docker implementation
- [x] Extract and record all AI prompts and how they're used
- [x] Document key findings

## Repository Setup
- Repository cloned to `/temp/aiplanner`

## Key Findings

### Python/Flask Architecture
- Simple Flask application with a clean separation of concerns
- Main components:
  - `app.py`: Core Flask application with routes and main logic
  - `ollama_interface.py`: Handles AI model interactions
  - `icalendar_interface.py`: Manages calendar file operations
  - `calendar_interface.py`: Additional calendar functionality
- Key routes:
  - `/`: Main interface
  - `/send_message`: Handles user input and AI responses
  - `/add_event`: Creates calendar events
  - `/download`: Downloads the generated .ics file
  - `/quit`: Cleanup and shutdown

### Ollama Integration
- Uses Ollama for natural language processing
- Key features:
  - Custom model named "aiplanner"
  - Simple chat interface with message history
  - Message refinement to extract event details
  - Extracts structured event data from AI responses using JSON parsing
- Conversation flow:
  1. User sends message
  2. Ollama processes and extracts event details
  3. System converts natural language to structured event data

### ICS File Generation
- Uses the `ics` Python package for calendar operations
- Clean interface through `ICalendarInterface` class
- Supports:
  - Event creation with summary, description, start/end times, and location
  - Calendar file writing with proper formatting
  - Simple file handling with error checking
- Generated files are temporary and cleaned up on quit

### AI Prompts Analysis

#### 1. System Prompt (Modelfile.txt)
The system uses a custom Llama 3 model with the following configuration:
- Temperature: 1 (favoring creativity over coherence)
- System Message:
```python
The user describes an event they are looking. Your job is to complete the following python dictionary with the extracted fields from the user's description.

{
    "Summary": "A brief title or summary of your event, guess based on user description (mandatory).",
    "Description": "A detailed description of the event. (default to "" if not provided).",
    "Location": "The location of the event (e.g., New York, default to "" if not provided).",
    "Start dateTime": "The starting timestamp of the event (always in format YYYY-MM-DDTHH:MM:SS, mandatory).",
    "End dateTime": "The ending timestamp of the event (always in format YYYY-MM-DDTHH:MM:SS, mandatory)."
}
```

#### 2. Initial Welcome Message
```
Hi, I'm your calendar assistant.
What event would you like to add to your calendar?
Please provide the event details including event start and end time and some description.
```

#### 3. Processing Message
Shown while AI is processing:
```
Please wait while I am processing your request...
```

#### Prompt Usage Flow
1. **Initial Interaction**:
   - System displays welcome message
   - User provides event details in natural language

2. **Processing**:
   - System shows processing message
   - Ollama processes input using system prompt
   - Extracts structured data into Python dictionary format

3. **Response and Validation**:
   - If mandatory fields missing: AI asks for additional information
   - If fields complete: Shows extracted data and prompts for action
   - Provides options to:
     - Add Event (if fields are correct)
     - Download .ics File (to save the event)

4. **Error Handling**:
   - If AI fails to understand: "I'm sorry, I didn't understand that. Could you please rephrase your request?"
   - If user types "quit": "Thank you for using aiplanner. Have a great day!"

#### Prompt Design Patterns
1. **Structured Output**: Uses Python dictionary format for consistent parsing
2. **Mandatory Field Enforcement**: Clear indication of required fields
3. **Default Values**: Specifies empty string defaults for optional fields
4. **Format Specification**: Strict datetime format (YYYY-MM-DDTHH:MM:SS)
5. **Interactive Guidance**: Progressive prompting for missing information

### Architecture Insights
1. Modular design with clear separation of concerns
2. Stateless operation with temporary file handling
3. Simple but effective error handling
4. RESTful API design for calendar operations

### Potential Issues/Limitations
1. Global state usage for event data
2. Limited error handling in some areas
3. No persistent storage
4. Single calendar file limitation
5. No multi-user support

### Docker Implementation
- Based on official Ollama image (`ollama/ollama`)
- Key features:
  - Single container running both Ollama and Flask application
  - Python 3.10 environment
  - Exposed ports:
    - 5050: Flask application
    - 11434: Ollama service
- Build process:
  1. Sets up Ollama base
  2. Installs Python 3.10 and dependencies
  3. Copies application code
  4. Runs both services (Ollama and Flask)
- Uses Docker Compose for easy deployment
- Simple but effective containerization approach

### Recommendations for Our Implementation 
1. Adopt the modular architecture but with improved state management
2. Use similar ICS file generation approach but with better persistence
3. Enhance error handling and validation
4. Consider adding multi-calendar support
5. Implement proper data persistence
6. Add user authentication and multi-user support
7. Consider separating Ollama and application services for better scalability
8. Add health checks and container orchestration support 