# Text-to-Cal.com AI Processing
20250317: Created by asking Grok3.

Prompt:

See if there's a repo/code example/prompt out there that uses AI to parse plain text and convert it to a google calendar entry.

Also valuable would just be code/repo that parses plain text into a structured event output that would be suitable for creating a calendar entry from.


Results:

### Key Points
- It seems likely that there are open-source GitHub repositories and AI tools that parse plain text to create Google Calendar entries, with examples using AI models like OpenAI and Ollama.
- Research suggests that both code examples and prompts exist, offering solutions from complete applications to specific text parsing for calendar events.
- The evidence leans toward these resources being accessible, with repositories like AI-C Calendar-Automation and AIPlanner, and prompts like those for generating ICS files.

### Repositories and Tools
Several GitHub repositories provide code examples for parsing plain text into calendar events using AI:
- **AI-C Calendar-Automation** by Brandon-c-tech ([AI-C Calendar-Automation](https://github.com/Brandon-c-tech/AI-Calendar-Automation)) uses Python, OpenAI, and the Nylas API to automate calendar event management from natural language.
- **AIPlanner** by ahnazary ([AIPlanner](https://github.com/ahnazary/AIPlanner)) is a Python tool that transforms event descriptions into .ics files using Ollama for natural language understanding and Flask for the web interface.
- **fwd2cal** by moeadham ([fwd2cal](https://github.com/moeadham/fwd2cal)) uses an LLM (likely GPT-4) to parse email threads and create calendar events, which is relevant for plain text parsing.

Additionally, there’s a specialized GPT model, "Create *.ics/*.ical Apple Calendar event from text," available on the GPT Store ([Create *.ics/*.ical Apple Calendar event from text](https://gptstore.ai/gpts/8f5ct2Z1Vv-create-ics-ical-applecalendar-event-from-text)), which generates .ics files from text, compatible with Google Calendar.

### Prompts for AI Models
For those preferring prompts, you can use AI models like ChatGPT with a sample prompt to generate ICS files directly from plain text. Here’s an example:
```
You are an AI assistant that can parse plain text and convert it into a Google Calendar event. Given a piece of text that describes an event, your task is to extract the relevant information such as the event title, start date and time, end date and time, location, and any other details, and then generate the corresponding ICS file that can be imported into Google Calendar.

To do this, you need to:

1. Identify the event title from the text.

2. Determine the start date and time of the event.

3. Determine the end date and time of the event, if provided. If not, assume it's a one-hour event.

4. Extract the location of the event, if mentioned.

5. Include any additional notes or descriptions from the text.

6. Format this information into a valid ICS file.

Here's an example of how the ICS file should look:

BEGIN:VCALENDAR

VERSION:2.0

PRODID:-//Your Company//Your Product//EN

BEGIN:VEVENT

UID:[unique identifier]

DTSTAMP:[current date and time]

DTSTART:[start date and time in UTC]

DTEND:[end date and time in UTC]

SUMMARY:[event title]

LOCATION:[location]

DESCRIPTION:[description]

END:VEVENT

END:VCALENDAR

You need to make sure that the dates and times are in the correct format and time zone.

Also, handle cases where the text might not provide all the necessary information. In such cases, make reasonable assumptions or ask for clarification, but for this prompt, assume that the text provides enough information to create a valid event.

Example text:

"Meeting with John on Tuesday at 2 PM for one hour in Conference Room A."

From this text, the event title is "Meeting with John", start date is next Tuesday at 2 PM, end date is next Tuesday at 3 PM, and location is "Conference Room A".

So, the ICS file would have:

SUMMARY:Meeting with John

DTSTART:[date and time in UTC for next Tuesday at 2 PM]

DTEND:[date and time in UTC for next Tuesday at 3 PM]

LOCATION:Conference Room A

Now, given the text: [user-provided text], generate the ICS file accordingly.
```
This prompt can be used with models like ChatGPT to achieve the desired functionality.

### Unexpected Detail
An unexpected detail is that some tools, like fwd2cal, focus on parsing emails rather than general plain text, but their AI parsing techniques can still be adapted for broader text inputs, offering flexibility for users.

---

### Comprehensive Analysis of AI-Powered Text Parsing for Calendar Events

This section provides a detailed exploration of resources and methodologies for using AI to parse plain text and convert it into Google Calendar entries, based on extensive research conducted on March 17, 2025. The analysis covers open-source repositories, AI tools, and prompts, ensuring a thorough understanding for users seeking both practical implementations and theoretical insights.

#### Background and Methodology
The inquiry focused on identifying existing repositories, code examples, and prompts that leverage AI to transform plain text into structured calendar events, specifically compatible with Google Calendar. The research involved searching for GitHub projects, AI-powered tools, and community discussions on platforms like Reddit and the OpenAI Developer Community. The goal was to find solutions that either directly create calendar entries or parse text into a format suitable for calendar integration, such as .ics files.

#### Open-Source GitHub Repositories
Several GitHub repositories were identified that meet the criteria of using AI for text parsing and calendar event creation. These repositories provide code examples that users can explore, modify, or integrate into their workflows:

- **AI-C Calendar-Automation by Brandon-c-tech**: This repository, located at [AI-C Calendar-Automation](https://github.com/Brandon-c-tech/AI-Calendar-Automation), is a Python-based tool that automates calendar event management. It utilizes the OpenAI API for natural language processing and the Nylas API for calendar integration. The tool allows users to create events from natural language descriptions, making it a direct fit for parsing plain text into Google Calendar entries. Published on August 15, 2024, it requires configuration with Nylas API credentials and OpenAI API keys, offering features like retrieving calendars, events, and creating new events with AI-generated data.

- **AIPlanner by ahnazary**: Found at [AIPlanner](https://github.com/ahnazary/AIPlanner), this Python tool transforms event descriptions into .ics files, which can be imported into any calendar application, including Google Calendar. It uses Ollama for natural language understanding and Flask for a web interface, published on May 26, 2024. The tool requires at least 5.9 GB of free system memory to run the Ollama llama3 model and supports docker compose for deployment, making it suitable for users looking for a chat-based interface to extract event details.

- **fwd2cal by moeadham**: Located at [fwd2cal](https://github.com/moeadham/fwd2cal), this repository focuses on parsing email threads to create calendar events using an LLM, likely GPT-4, given the requirement for an OpenAI API key with GPT-4 access. Published details suggest it generates JSON for event details, which can be used to create Google Calendar events. It can be self-hosted using Firebase functions, with a production site at [fwd2cal.com](https://www.fwd2cal.com), and is noted for areas of improvement like enhancing timezone detection and supporting multiple calendars.

These repositories provide comprehensive code examples, with AI integration at their core, offering users the ability to parse text and create calendar events programmatically.

#### AI-Powered Tools and Extensions
Beyond repositories, several AI-powered tools and extensions were identified that facilitate text-to-calendar conversion, though not all are open-source:

- **Create *.ics/*.ical Apple Calendar event from text GPT**: This specialized GPT model, available at [Create *.ics/*.ical Apple Calendar event from text](https://gptstore.ai/gpts/8f5ct2Z1Vv-create-ics-ical-applecalendar-event-from-text), is designed to transform text-based input into .ics or .ical files, compatible with Google Calendar. Updated in August 2024, it uses ChatGPT-4o to generate calendar events from plain text descriptions, such as "Team meeting on March 5th, 2024, from 10 AM to 11 AM at the office." This tool is particularly useful for users looking for a quick, AI-driven solution without coding.

- **AI Text to Calendar Raycast Extension**: Found at [AI Text to Calendar](https://www.raycast.com/izm51/ai-text-to-calendar), this Raycast extension converts selected text into a Google Calendar registration URL using OpenAI's API. It supports configuration for default settings and supplementary information, with 196 installs noted, and is licensed under MIT, offering a user-friendly interface for calendar event creation.

These tools provide practical, user-facing solutions, though their underlying code may not be fully open-source, limiting deep customization.

#### Prompts for AI Models
For users preferring to use AI models directly, prompts offer a flexible approach to parse text and generate calendar events. Research identified both existing prompts and a sample prompt crafted based on community discussions:

- **PromptBase Calendar Information Extractor**: Available at [Calendar Information Extractor](https://promptbase.com/prompt/calendar-information-extractor), this paid prompt extracts key calendar information ("What", "When", "Where") from text, outputting in a parsable format. It supports missing information with "Undetermined" or "TBD," useful for university notifications or company meetings, but does not directly generate ICS files.

- **Sample Prompt for Generating ICS Files**: Based on community suggestions, a sample prompt was crafted for use with models like ChatGPT:
  ```
  You are an AI assistant that can parse plain text and convert it into a Google Calendar event. Given a piece of text that describes an event, your task is to extract the relevant information such as the event title, start date and time, end date and time, location, and any other details, and then generate the corresponding ICS file that can be imported into Google Calendar.

  To do this, you need to:

  1. Identify the event title from the text.

  2. Determine the start date and time of the event.

  3. Determine the end date and time of the event, if provided. If not, assume it's a one-hour event.

  4. Extract the location of the event, if mentioned.

  5. Include any additional notes or descriptions from the text.

  6. Format this information into a valid ICS file.

  Here's an example of how the ICS file should look:

  BEGIN:VCALENDAR

  VERSION:2.0

  PRODID:-//Your Company//Your Product//EN

  BEGIN:VEVENT

  UID:[unique identifier]

  DTSTAMP:[current date and time]

  DTSTART:[start date and time in UTC]

  DTEND:[end date and time in UTC]

  SUMMARY:[event title]

  LOCATION:[location]

  DESCRIPTION:[description]

  END:VEVENT

  END:VCALENDAR

  You need to make sure that the dates and times are in the correct format and time zone.

  Also, handle cases where the text might not provide all the necessary information. In such cases, make reasonable assumptions or ask for clarification, but for this prompt, assume that the text provides enough information to create a valid event.

  Example text:

  "Meeting with John on Tuesday at 2 PM for one hour in Conference Room A."

  From this text, the event title is "Meeting with John", start date is next Tuesday at 2 PM, end date is next Tuesday at 3 PM, and location is "Conference Room A".

  So, the ICS file would have:

  SUMMARY:Meeting with John

  DTSTART:[date and time in UTC for next Tuesday at 2 PM]

  DTEND:[date and time in UTC for next Tuesday at 3 PM]

  LOCATION:Conference Room A

  Now, given the text: [user-provided text], generate the ICS file accordingly.
  ```
  This prompt enables users to generate ICS files directly, which can then be imported into Google Calendar, offering a DIY approach.

#### Comparative Analysis
To organize the findings, the following table compares the identified resources based on key attributes:

| Resource                                      | Type          | AI Model Used       | Output Format       | Open-Source | Accessibility       |
|----------------------------------------------|---------------|---------------------|---------------------|-------------|---------------------|
| AI-C Calendar-Automation                     | Repository    | OpenAI              | Calendar Events     | Yes         | GitHub, API Keys    |
| AIPlanner                                    | Repository    | Ollama              | .ics File           | Yes         | GitHub, Docker      |
| fwd2cal                                      | Repository    | Likely GPT-4        | Calendar Events     | Yes         | GitHub, Firebase    |
| Create *.ics/*.ical Apple Calendar event GPT | Tool          | ChatGPT-4o          | .ics/.ical File     | No          | GPT Store, Free Use |
| AI Text to Calendar Raycast Extension        | Tool          | OpenAI              | Calendar URL        | Yes (MIT)   | Raycast, API Keys   |
| PromptBase Extractor                         | Prompt        | N/A                 | Structured Text     | No          | Paid, PromptBase    |
| Sample ICS Prompt                            | Prompt        | ChatGPT Compatible  | .ics File           | N/A         | Free, Custom Use    |

This table highlights the diversity of solutions, from open-source code to paid prompts, catering to different user needs.

#### Unexpected Findings
An unexpected detail is the prevalence of email-focused tools like fwd2cal, which, while primarily designed for parsing emails, can be adapted for general plain text inputs. This flexibility suggests that users can modify existing code to suit broader text parsing needs, offering an additional layer of customization.

#### Community Insights and Limitations
Community discussions, particularly on Reddit, revealed a demand for browser extensions and tools that convert highlighted text to .ics files, with suggestions like using AutoHotkey for scripting. However, these are often user-driven solutions rather than polished code examples. Limitations include the need for API keys (e.g., OpenAI, Nylas) and the potential cost of running advanced AI models, which may affect accessibility for some users.

#### Conclusion
The research conducted on March 17, 2025, confirms the availability of multiple resources for parsing plain text into Google Calendar entries using AI. Open-source repositories like AI-C Calendar-Automation, AIPlanner, and fwd2cal provide robust code examples, while tools like the Create *.ics/*.ical Apple Calendar event GPT and prompts offer user-friendly alternatives. Users can choose based on their technical expertise, with prompts providing a low-barrier entry and repositories offering deep customization. This comprehensive set ensures that both developers and non-technical users can find suitable solutions for their calendar management needs.

### Key Citations
- [Create events using natural language Python tool automates calendar event management](https://github.com/Brandon-c-tech/AI-Calendar-Automation)
- [AI tool for efficient calendar event using Ollama and Flask](https://github.com/ahnazary/AIPlanner)
- [Forward an email and use AI to turn it into a calendar event](https://github.com/moeadham/fwd2cal)
- [Smart Calendar Event Generator Generate Apple Calender events based on text input](https://gptstore.ai/gpts/8f5ct2Z1Vv-create-ics-ical-applecalendar-event-from-text)
- [Convert selected text to Google Calendar event with OpenAI](https://www.raycast.com/izm51/ai-text-to-calendar)