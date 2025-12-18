// Handle the back button
document.getElementById('backButton').addEventListener('click', function() {
   window.location.href = 'studentInfo.html';
});

// Elements
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const courseList = document.getElementById('courseList');
const emptyState = document.getElementById('emptyState');
const filterChips = document.querySelectorAll('.filter-chip');
const totalCoursesEl = document.getElementById('totalCourses');
const totalHoursEl = document.getElementById('totalHours');
const gpaValueEl = document.getElementById('gpaValue');

// Variables
let allCourses = [];
let currentFilter = 'all';
let currentSort = 'code';
let searchTerm = '';

// Load course data
document.addEventListener('DOMContentLoaded', function() {
   console.log("DOM loaded - attempting to load course data");
   loadCourseData();
});

// Handle search input
searchInput.addEventListener('input', function() {
   searchTerm = this.value.toLowerCase();
   filterAndDisplayCourses();
});

// Handle sort selection
sortSelect.addEventListener('change', function() {
   currentSort = this.value;
   filterAndDisplayCourses();
});

// Handle filter chips
filterChips.forEach(chip => {
   chip.addEventListener('click', function() {
       // Remove active class from all chips
       filterChips.forEach(c => c.classList.remove('active'));
       
       // Add active class to clicked chip
       this.classList.add('active');
       
       // Update filter
       currentFilter = this.dataset.filter;
       filterAndDisplayCourses();
   });
});

function loadCourseData() {
   chrome.storage.local.get('studentData', function(result) {
       console.log("Data retrieved from storage:", result);
       
       const studentData = result.studentData;
       
       if (studentData) {
           console.log("Student data found:", studentData);
           
           // Check for courses array
           if (studentData.courses && Array.isArray(studentData.courses) && studentData.courses.length > 0) {
               console.log(`Found ${studentData.courses.length} courses in student data`);
               // Hide empty state
               emptyState.style.display = 'none';
               
               // Extract courses
               allCourses = processCourses(studentData.courses);
               console.log('Processed courses:', allCourses);
               
               // Update summary
               updateSummary(studentData);
               
               // Display courses with current filter and sort
               filterAndDisplayCourses();
           } else {
               // No courses found, show error message
               console.error('No courses found in student data');
               courseList.innerHTML = `
                   <div style="padding: 20px; text-align: center; color: #adb5bd;">
                       <h3 style="margin-bottom: 15px;">No Course Data Found</h3>
                       <p>Please visit the Student Card page to load your courses.</p>
                       <a href="https://services.just.edu.jo/stuservices/Student/Reg/StudentCard.aspx" target="_blank" style="display:block; margin-top:15px;">
                           <button style="background-color: #1857a4; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">
                               Go to Student Card
                           </button>
                       </a>
                       <p style="margin-top: 20px; font-size: 12px;">After visiting the Student Card page, return here and click the button below to reload:</p>
                       <button id="reloadDataBtn" style="background-color: #2ea400; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">
                           Reload Course Data
                       </button>
                   </div>
               `;
               
               // Add event listener to the reload button
               document.getElementById('reloadDataBtn').addEventListener('click', function() {
                   loadCourseData();
               });
               
               // Show empty state
               emptyState.style.display = 'none';
           }
       } else {
           // Show empty state
           courseList.innerHTML = '';
           emptyState.style.display = 'flex';
       }
   });
}

function processCourses(courses) {
   // Process and prepare course data for display
   if (!Array.isArray(courses)) {
       console.error('Courses is not an array:', courses);
       return [];
   }
   
   console.log(`Processing ${courses.length} courses`);
   
   return courses.map(course => {
       // If code/name are already extracted, use them
       const code = course.code || '';
       const name = course.name || '';
       
       // If code/name aren't available, extract them from course string
       let extractedCode = code;
       let extractedName = name;
       
       if (!code || !name) {
           // Extract course code and name
           const [newCode, newName] = extractCourseInfo(course.completedCourse || course.planCourse);
           extractedCode = newCode || '';
           extractedName = newName || '';
       }
       
       // Calculate GPA value for sorting
       const gpaValue = calculateGpaValue(course.grade);
       
       return {
           ...course,
           code: extractedCode,
           name: extractedName,
           gpaValue: gpaValue
       };
   });
}

function extractCourseInfo(courseString) {
   // Extract course code and name from format like "1234567 - Course Name - 3 hours"
   if (!courseString) return ['', ''];
   
   const codeParts = courseString.split(' - ');
   const code = codeParts[0] ? codeParts[0].trim() : '';
   const name = codeParts[1] ? codeParts[1].trim() : '';
   
   return [code, name];
}

function calculateGpaValue(grade) {
   // Convert letter grade to numeric value for sorting
   if (!grade) return 0;
   
   const gradeMap = {
       'A+': 4.2,
       'A': 4.0,
       'A-': 3.75,
       'B+': 3.5,
       'B': 3.25,
       'B-': 3.0,
       'C+': 2.75,
       'C': 2.5,
       'C-': 2.25,
       'D+': 2.0,
       'D': 1.75,
       'D-': 1.5,
       'F': 0.5
   };
   
   return gradeMap[grade] || 0;
}

function updateSummary(studentData) {
   // Update summary information
   if (studentData) {
       totalCoursesEl.textContent = allCourses.length || '0';
       totalHoursEl.textContent = studentData.completedHours || '0';
       gpaValueEl.textContent = studentData.gpa || '0.00';
   }
}

function filterAndDisplayCourses() {
   console.log(`Filtering ${allCourses.length} courses with filter: ${currentFilter}`);
   
   let filteredCourses = [...allCourses];
   
   // Apply search filter
   if (searchTerm) {
       filteredCourses = filteredCourses.filter(course => {
           const nameMatch = course.name && course.name.toLowerCase().includes(searchTerm);
           const codeMatch = course.code && course.code.toLowerCase().includes(searchTerm);
           return nameMatch || codeMatch;
       });
   }
   
   // Apply category filter
   if (currentFilter !== 'all') {
       if (currentFilter === 'current') {
           filteredCourses = filteredCourses.filter(course => course.status === 'current_semester');
       } else {
           // Filter by grade letter (A, B, C, D, F)
           filteredCourses = filteredCourses.filter(course => {
               return course.grade && course.grade.startsWith(currentFilter);
           });
       }
   }
   
   // Apply sorting
   filteredCourses = sortCourses(filteredCourses, currentSort);
   
   // Display courses
   console.log(`Displaying ${filteredCourses.length} filtered courses`);
   displayCourses(filteredCourses);
}

function sortCourses(courses, sortType) {
   switch (sortType) {
       case 'code':
           return courses.sort((a, b) => (a.code || '').localeCompare(b.code || ''));
       case 'name':
           return courses.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
       case 'grade-desc':
           return courses.sort((a, b) => (b.gpaValue || 0) - (a.gpaValue || 0));
       case 'grade-asc':
           return courses.sort((a, b) => (a.gpaValue || 0) - (b.gpaValue || 0));
       default:
           return courses;
   }
}

function displayCourses(courses) {
   // Clear current list
   courseList.innerHTML = '';
   
   if (courses.length === 0) {
       courseList.innerHTML = '<div class="no-courses">No courses match your criteria</div>';
       return;
   }
   
   // Add each course to the list
   courses.forEach(course => {
       const courseCard = createCourseCard(course);
       courseList.appendChild(courseCard);
   });
}

function createCourseCard(course) {
   const card = document.createElement('div');
   card.className = 'course-card';
   
   // Add status-based classes
   if (course.status === 'current_semester') {
       card.classList.add('current-semester');
   } else if (course.status === 'failed') {
       card.classList.add('failed-course');
   }
   
   // Create header with title and grade
   const header = document.createElement('div');
   header.className = 'course-header';
   
   const title = document.createElement('div');
   title.className = 'course-title';
   title.textContent = `${course.name || 'Course Name'}`;
   
   // Create grade element with appropriate color
   const grade = document.createElement('div');
   grade.className = 'course-grade';
   if (course.grade) {
       grade.textContent = course.grade;
       
       // Add appropriate grade class for coloring
       const gradeClass = course.grade.replace('+', '-plus').replace('-', '-minus');
       grade.classList.add(`grade-${gradeClass}`);
   } else {
       grade.textContent = '-';
   }
   
   header.appendChild(title);
   header.appendChild(grade);
   
   // Create course info section
   const info = document.createElement('div');
   info.className = 'course-info';
   
   // Course code
   const code = document.createElement('div');
   code.textContent = `Course: ${course.code || '-'}`;
   
   // Points
   const points = document.createElement('div');
   if (course.points) {
       points.innerHTML = `Points: <span class="points-value">${course.points}</span>`;
   } else {
       points.textContent = 'Points: -';
   }
   
   // Plan type
   const plan = document.createElement('div');
   plan.textContent = `Category: ${course.planType || '-'}`;
   
   info.appendChild(code);
   info.appendChild(points);
   info.appendChild(plan);
   
   // Add status if applicable
   if (course.status) {
       const statusEl = document.createElement('div');
       statusEl.className = 'course-status';
       
       switch(course.status) {
           case 'current_semester':
               statusEl.textContent = 'Current';
               statusEl.style.backgroundColor = 'rgba(24, 87, 164, 0.7)';
               break;
           case 'failed':
               statusEl.textContent = 'Failed';
               statusEl.style.backgroundColor = 'rgba(239, 48, 0, 0.7)';
               break;
           case 'non_plan':
               statusEl.textContent = 'Non-Plan';
               statusEl.style.backgroundColor = 'rgba(255, 193, 7, 0.7)';
               break;
           case 'department_approval':
               statusEl.textContent = 'Approved';
               statusEl.style.backgroundColor = 'rgba(255, 109, 0, 0.7)';
               break;
           default:
               statusEl.style.display = 'none';
       }
       
       card.appendChild(statusEl);
   }
   
   // Assemble card
   card.appendChild(header);
   card.appendChild(info);
   
   return card;
}