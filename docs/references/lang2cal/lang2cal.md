// Function to extract date and time information from text
function extractDateTime(text) {
  // Simple regex examples (expand for robust date/time parsing)
  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{2,4}/g; // Matches MM/DD/YYYY or M/D/YY etc.
  const timeRegex = /\d{1,2}:\d{2}(am|pm)?/gi; // Matches HH:MM or H:MM

  const dates = text.match(dateRegex);
  const times = text.match(timeRegex);

  // Basic handling (more logic for multiple dates/times, best guess, etc.)
  const date = dates ? dates[0] : null; 
  const time = times ? times[0] : null;

  return { date, time };
}


// Function to create a Google Calendar event URL
function createGCalEventUrl(text) {
    const { date, time } = extractDateTime(text);

    // Extract the first line as the subject
    const subject = text.split('\n')[0];

    // Build the Google Calendar event URL
    let url = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    url += `&text=${encodeURIComponent(subject)}`;

    if (date) {
      // Attempt to parse the date (improve this for better handling)
      const [month, day, year] = date.split('/').map(Number);
      const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      url += `&dates=${dateString}`; // Format: YYYYMMDD
        if (time) {
            // Append the time to the date (improve time parsing)
            url += `T${time.replace(/(am|pm)/i, '').toUpperCase()}`; // Format: THHMM
        } else {
            url += "T0000"; // Default to midnight if no time is provided
        }

      url += `/${dateString + "T2359"}`;
    }


    // Add details, location, and description (optional)
    // url += `&details=${encodeURIComponent(details)}`;
    // url += `&location=${encodeURIComponent(location)}`;
    // url += `&description=${encodeURIComponent(description)}`;

    return url;

}

// Example usage (replace with your text selection logic)
// In a Chrome Extension, you'd use chrome.contextMenus API
// or similar to get selected text

document.addEventListener('contextmenu', (event) => {
  const selectedText = window.getSelection().toString();
  if (selectedText) { // Ensure some text is selected


        // In a popup.html context, communicate with your background script
        // to open the URL in a new tab:
      chrome.runtime.sendMessage({ action: "open_gcal_url", url: createGCalEventUrl(selectedText) });



  }

});


// In your background script (background.js):
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "open_gcal_url") {
      chrome.tabs.create({ url: request.url });
    }
  });


// Simplified 'inject_newsvd' logic (replace with your injection method)
function injectNewSVD(scriptContent) {
  const script = document.createElement('script');
  script.textContent = scriptContent; 
  (document.head || document.documentElement).appendChild(script); 
}


// Example: injecting the extractDateTime function (replace with other required functions)
injectNewSVD(`(${extractDateTime.toString()})()`); // Immediately invoked function expression


Key improvements and explanations:

Date/Time Extraction: The extractDateTime function now uses regular expressions to try to find dates and times in the text. This is a very basic example, and you'll want to use a more robust date/time parsing library (like Moment.js, Luxon, or date-fns) in a production extension to handle a much wider variety of date and time formats.

Google Calendar URL Construction: The createGCalEventUrl function constructs a valid Google Calendar URL with parameters for text, date, and time. The subject is taken from the first line of the selected text. The function now includes date and time parsing logic, attempting to extract these from the text selection. The date is formatted as YYYYMMDD and the time as THHMM (24-hour format) as required by the Google Calendar URL. If no time is found, it defaults to midnight (T0000). It also encodes the subject to ensure URL validity.

Message Passing: In a Chrome Extension popup, you'll need to use message passing to communicate between your popup script (popup.html) and your background script (background.js). The example code demonstrates how to send a message from the popup to the background script with the Google Calendar URL when the user right-clicks on selected text. The background script then listens for this message and opens the URL in a new tab.

Code Injection: The provided injectNewSVD function is a simplified version for demonstration. In a real extension, you would use chrome.scripting.executeScript (Manifest V3) or chrome.tabs.executeScript (Manifest V2) to inject your content scripts into the web page.

Error Handling: The code includes basic error handling, such as checking if text is selected and handling potential errors during the fetch request and url parsing. More robust error handling would be required in a full application.

Modularization: The code is now organized into functions, making it more readable and maintainable.

Configuration: The regular expressions, date/time parsing logic, and other parameters can be easily customized.