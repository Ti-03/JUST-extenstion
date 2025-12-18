//chrome.action.setBadgeText({text: "GPA!"}); // We have 10+ unread items.
//chrome.action.setBadgeBackgroundColor({color: "#1857a4"}); // Make badge background red.

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   // Handle student data fetched from the student card page
   if (message.action === "studentDataFetched") {
     // Store the data in chrome.storage for persistence
     chrome.storage.local.set({ 'studentData': message.data }, function() {
       console.log('Student data saved to storage:', message.data);
     });
     
     // You can also set a badge to indicate data is available
     chrome.action.setBadgeText({ text: "✓" });
     chrome.action.setBadgeBackgroundColor({ color: "#1857a4" });
   }
 });
 
 // Clear the badge when the popup opens
 chrome.runtime.onConnect.addListener((port) => {
   if (port.name === "popup") {
     chrome.action.setBadgeText({ text: "" });
   }
 });