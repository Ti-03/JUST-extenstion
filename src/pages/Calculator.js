// Navigation handling
if(localStorage.getItem("regHelpCheck")==0) window.location.replace("popup.html");
const regHelper = document.getElementById("RegHelper2");
regHelper.addEventListener("click", function(){
    localStorage.setItem("regHelpCheck", 0);
    window.location.replace("popup.html");
});

// DOM Elements
const gpaElement = document.getElementById("SGPA");
const cumulativeToggle = document.getElementById("cumulativeToggle");
const cumulativeSection = document.getElementById("cumulativeSection");
const prevGPAInput = document.getElementById("prevGPA");
const prevHoursInput = document.getElementById("prevHours");
const cgpaElement = document.getElementById("CGPA");
const addEntryButton = document.getElementById("addEntrie");
const entriesDiv = document.getElementById("Entries");
const courseNameInput = document.getElementById("CMarkName");
const hoursSelect = document.getElementById("hour");
const markInput = document.getElementById("mark");

// Toggle cumulative GPA section - automatically show it when student data exists
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('studentData', function(result) {
        if (result.studentData && result.studentData.gpa) {
            // Auto-show the cumulative section since we have data
            cumulativeSection.classList.remove("hidden");
            cumulativeToggle.innerHTML = 'Hide Cumulative GPA Calculator <span>&uarr;</span>';
            
            // Auto-fill previous GPA and hours
            if (prevGPAInput && result.studentData.gpa) {
                prevGPAInput.value = result.studentData.gpa;
                localStorage.setItem("prevGPA", result.studentData.gpa);
            }
            
            if (prevHoursInput && result.studentData.completedHours) {
                prevHoursInput.value = result.studentData.completedHours;
                localStorage.setItem("prevHours", result.studentData.completedHours);
            }
            
            // Recalculate GPA with new values
            calculateGPA();
        }
    });
});

// Toggle cumulative GPA section on click
cumulativeToggle.addEventListener("click", function() {
    cumulativeSection.classList.toggle("hidden");
    if (cumulativeSection.classList.contains("hidden")) {
        cumulativeToggle.innerHTML = 'Show Cumulative GPA Calculator <span>&darr;</span>';
    } else {
        cumulativeToggle.innerHTML = 'Hide Cumulative GPA Calculator <span>&uarr;</span>';
    }
});

// Initialize previous GPA and hours from localStorage
if (localStorage.getItem("prevGPA")) {
    prevGPAInput.value = localStorage.getItem("prevGPA");
}
if (localStorage.getItem("prevHours")) {
    prevHoursInput.value = localStorage.getItem("prevHours");
}

// Load courses from localStorage
let counter = 0;
if (localStorage.getItem("numberOfCourses") > 0) {
    counter = parseInt(localStorage.getItem("numberOfCourses"));
    localStorage.setItem("GPA", 0);
} else {
    counter = 0;
    localStorage.setItem("GPA", 0);
}

// Function to convert letter grade to GPA
function letterToGPA(mark) {
    mark = String(mark).toUpperCase();
    switch(mark) {
        case "A+": return 4.2;
        case "A": return 4.0;
        case "A-": return 3.75;
        case "B+": return 3.5;
        case "B": return 3.25;
        case "B-": return 3.0;
        case "C+": return 2.75;
        case "C": return 2.5;
        case "C-": return 2.25;
        case "D+": return 2.0;
        case "D": return 1.75;
        case "D-": return 1.5;
        case "F": return 0.5;
        default: return parseFloat(mark) || 0;
    }
}

// Render all saved courses
function renderCourses() {
    entriesDiv.innerHTML = "";
    
    for (let i = 0; i < counter; i++) {
        const courseName = localStorage.getItem(`${i}-name`);
        const courseHours = localStorage.getItem(`${i}-hour`);
        const courseMark = localStorage.getItem(`${i}-mark`);
        
        if (!courseName || !courseHours || !courseMark) continue;
        
        const courseDiv = document.createElement("div");
        courseDiv.id = `course-${i}`;
        
        // Course info container
        const infoDiv = document.createElement("div");
        infoDiv.className = "course-info";
        
        // Course name
        const nameSpan = document.createElement("span");
        nameSpan.className = "course-name";
        nameSpan.textContent = courseName;
        infoDiv.appendChild(nameSpan);
        
        // Course details
        const detailSpan = document.createElement("span");
        detailSpan.className = "course-detail";
        detailSpan.textContent = `${courseHours} credit hours | Grade: ${courseMark}`;
        infoDiv.appendChild(detailSpan);
        
        courseDiv.appendChild(infoDiv);
        
        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.index = i;
        deleteBtn.addEventListener("click", function() {
            deleteCourse(parseInt(this.dataset.index));
        });
        
        courseDiv.appendChild(deleteBtn);
        entriesDiv.appendChild(courseDiv);
    }
}

// Delete a specific course
function deleteCourse(index) {
    // Move all courses after the deleted one up by one index
    for (let i = index; i < counter - 1; i++) {
        localStorage.setItem(`${i}-name`, localStorage.getItem(`${i+1}-name`));
        localStorage.setItem(`${i}-hour`, localStorage.getItem(`${i+1}-hour`));
        localStorage.setItem(`${i}-mark`, localStorage.getItem(`${i+1}-mark`));
    }
    
    // Remove the last course
    localStorage.removeItem(`${counter-1}-name`);
    localStorage.removeItem(`${counter-1}-hour`);
    localStorage.removeItem(`${counter-1}-mark`);
    
    counter--;
    localStorage.setItem("numberOfCourses", counter);
    
    // Re-render the courses and update GPA
    renderCourses();
    calculateGPA();
}

// Calculate GPA
function calculateGPA() {
    let totalHours = 0;
    let totalPoints = 0;
    
    for (let i = 0; i < counter; i++) {
        const hours = parseFloat(localStorage.getItem(`${i}-hour`) || 0);
        let mark = localStorage.getItem(`${i}-mark`);
        
        if (!mark) continue;
        
        const gpaValue = letterToGPA(mark);
        totalPoints += gpaValue * hours;
        totalHours += hours;
    }
    
    const semesterGPA = totalHours > 0 ? (totalPoints / totalHours).toFixed(2) : "0.00";
    gpaElement.textContent = semesterGPA;
    
    // Calculate cumulative GPA
    calculateCumulativeGPA(semesterGPA, totalHours);
    
    return { semesterGPA, totalHours, totalPoints };
}

// Calculate cumulative GPA
function calculateCumulativeGPA(semesterGPA, semesterHours) {
    const prevGPA = parseFloat(prevGPAInput.value || 0);
    const prevHours = parseFloat(prevHoursInput.value || 0);
    
    // Save to localStorage
    localStorage.setItem("prevGPA", prevGPA);
    localStorage.setItem("prevHours", prevHours);
    
    if (prevHours > 0 || semesterHours > 0) {
        const prevPoints = prevGPA * prevHours;
        const semPoints = parseFloat(semesterGPA) * semesterHours;
        const totalPoints = prevPoints + semPoints;
        const totalHours = prevHours + semesterHours;
        
        const cumulativeGPA = (totalPoints / totalHours).toFixed(2);
        cgpaElement.textContent = cumulativeGPA;
    } else {
        cgpaElement.textContent = "0.00";
    }
}

// Initialize the page
renderCourses();
calculateGPA();

// Event listeners for previous GPA and hours input
prevGPAInput.addEventListener("input", function() {
    calculateGPA();
});

prevHoursInput.addEventListener("input", function() {
    calculateGPA();
});

// Add a new course
addEntryButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    const courseName = courseNameInput.value.trim();
    const courseHours = hoursSelect.value;
    const courseMark = markInput.value.trim();
    
    if (!courseName || !courseHours || !courseMark) {
        alert("Please fill all fields");
        return;
    }
    
    localStorage.setItem(`${counter}-name`, courseName);
    localStorage.setItem(`${counter}-hour`, courseHours);
    localStorage.setItem(`${counter}-mark`, courseMark);
    
    counter++;
    localStorage.setItem("numberOfCourses", counter);
    
    // Clear form
    courseNameInput.value = "";
    hoursSelect.selectedIndex = 0;
    markInput.value = "";
    
    // Update UI
    renderCourses();
    calculateGPA();
});