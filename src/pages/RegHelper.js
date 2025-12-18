// Navigation handling
if(localStorage.getItem("regHelpCheck")==0) window.location.replace("popup.html");
const regHelper = document.getElementById("RegHelper2");
regHelper.addEventListener("click", function(){
    localStorage.setItem("regHelpCheck", 0);
    window.location.replace("popup.html");
});

// DOM Elements
const entriesDiv = document.getElementById("Entries");
const courseForm = document.getElementById("courseForm");
const courseNameInput = document.getElementById("CName");
const courseLineInput = document.getElementById("CNumber");
const courseSectionInput = document.getElementById("CSection");
const addEntryButton = document.getElementById("addEntrie");
const clearAllButton = document.getElementById("clearAll");
const emptyState = document.getElementById("emptyState");

// Initialize counter from localStorage
let counter = 0;
if(localStorage.getItem("numberOfEnt") > 0) {
    counter = parseInt(localStorage.getItem("numberOfEnt"));
} else {
    counter = 0;
    localStorage.setItem("numberOfEnt", counter);
}

// Render all saved entries
function renderEntries() {
    entriesDiv.innerHTML = "";
    
    // Add empty state message if no entries
    if (counter === 0) {
        entriesDiv.appendChild(emptyState);
        return;
    }
    
    for (let i = 0; i < counter; i++) {
        const courseName = localStorage.getItem(`${i}-Name`);
        const courseLine = localStorage.getItem(`${i}-Line`);
        const courseSection = localStorage.getItem(`${i}-Sec`);
        
        if (!courseName || !courseLine || !courseSection) continue;
        
        // Create entry element
        const entryDiv = document.createElement("div");
        entryDiv.className = "course-entry";
        entryDiv.id = `entry-${i}`;
        
        // Course header with name
        const headerDiv = document.createElement("div");
        headerDiv.className = "course-header";
        
        const nameSpan = document.createElement("span");
        nameSpan.className = "course-name";
        nameSpan.textContent = courseName;
        headerDiv.appendChild(nameSpan);
        
        entryDiv.appendChild(headerDiv);
        
        // Course details
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "course-details";
        
        const lineSpan = document.createElement("span");
        lineSpan.textContent = `Line: ${courseLine}`;
        detailsDiv.appendChild(lineSpan);
        
        const sectionSpan = document.createElement("span");
        sectionSpan.textContent = `Section: ${courseSection}`;
        detailsDiv.appendChild(sectionSpan);
        
        entryDiv.appendChild(detailsDiv);
        
        // Buttons
        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "course-buttons";
        
        // Fill button
        const fillBtn = document.createElement("button");
        fillBtn.className = "fill-btn";
        fillBtn.textContent = "Fill";
        fillBtn.dataset.index = i;
        fillBtn.addEventListener("click", function() {
            fillCourse(i);
        });
        buttonsDiv.appendChild(fillBtn);
        
        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.index = i;
        deleteBtn.addEventListener("click", function() {
            deleteEntry(parseInt(this.dataset.index));
        });
        buttonsDiv.appendChild(deleteBtn);
        
        entryDiv.appendChild(buttonsDiv);
        entriesDiv.appendChild(entryDiv);
    }
}

// Delete a specific entry
function deleteEntry(index) {
    // Move all entries after the deleted one up by one index
    for (let i = index; i < counter - 1; i++) {
        localStorage.setItem(`${i}-Name`, localStorage.getItem(`${i+1}-Name`));
        localStorage.setItem(`${i}-Line`, localStorage.getItem(`${i+1}-Line`));
        localStorage.setItem(`${i}-Sec`, localStorage.getItem(`${i+1}-Sec`));
    }
    
    // Remove the last entry
    localStorage.removeItem(`${counter-1}-Name`);
    localStorage.removeItem(`${counter-1}-Line`);
    localStorage.removeItem(`${counter-1}-Sec`);
    
    counter--;
    localStorage.setItem("numberOfEnt", counter);
    
    // Re-render the entries
    renderEntries();
}

// Fill a course in the registration page
function fillCourse(index) {
    const courseLine = localStorage.getItem(`${index}-Line`);
    const courseSection = localStorage.getItem(`${index}-Sec`);
    
    // Send message to content script
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, {
                Line: courseLine,
                Sec: courseSection
            });
        }
    });
}

// Clear all entries
clearAllButton.addEventListener("click", function() {
    if (counter === 0) return;
    
    if (confirm("Are you sure you want to clear all courses?")) {
        for (let i = 0; i < counter; i++) {
            localStorage.removeItem(`${i}-Name`);
            localStorage.removeItem(`${i}-Line`);
            localStorage.removeItem(`${i}-Sec`);
        }
        
        counter = 0;
        localStorage.setItem("numberOfEnt", counter);
        
        renderEntries();
    }
});

// Add a new entry
courseForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const courseName = courseNameInput.value.trim();
    const courseLine = courseLineInput.value.trim();
    const courseSection = courseSectionInput.value.trim();
    
    if (!courseName || !courseLine || !courseSection) {
        alert("Please fill all fields");
        return;
    }
    
    // Store the new entry
    localStorage.setItem(`${counter}-Name`, courseName);
    localStorage.setItem(`${counter}-Line`, courseLine);
    localStorage.setItem(`${counter}-Sec`, courseSection);
    
    counter++;
    localStorage.setItem("numberOfEnt", counter);
    
    // Clear form
    courseNameInput.value = "";
    courseLineInput.value = "";
    courseSectionInput.value = "";
    
    // Re-render entries
    renderEntries();
});

// Initialize the page
renderEntries();