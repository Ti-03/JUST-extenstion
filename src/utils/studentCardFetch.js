// This script directly extracts all student data from the DOM of the student card page
function fetchStudentData() {
   console.log('Starting robust student data extraction');
   try {
     // Check if page is loaded
     if (document.readyState !== 'complete') {
       console.log('Page not fully loaded, waiting...');
       window.addEventListener('load', fetchStudentData);
       return;
     }
 
     // Basic student data extraction
     const studentData = {
       studentId: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblStuNo') || '',
       studentName: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblStuName') || '',
       nationality: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblNationality') || '',
       gender: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblGender') || '',
       department: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblDepName') || '',
       degree: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblDegree') || '',
       planNo: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblPlanNo') || '',
       planHours: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblPlanHours') || '',
       completedHours: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblCumHours') || '',
       passedHours: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblPassHours') || '',
       points: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblStudentPoints') || '',
       gpa: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblCardAvgWeight') || '',
       studentStatus : getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblStuStatus') || '',
       planYear: getElementText('ctl00_contentPH_StudentCard_rptStuCard_ctl00_lblPlanYear') || '',
       courses: [], // Will be populated with courses
       fetchedAt: new Date().toISOString()
     };
 
     console.log('Basic student data extracted:', studentData);
 
     // EXTRACT COURSES - DIRECT METHOD
     // Find all tables containing course data
     extractAllCourses(studentData);
     
     console.log(`Total courses extracted: ${studentData.courses.length}`);
     
     // Verify we actually got some courses
     if (studentData.courses.length === 0) {
       console.warn('No courses found, trying backup method');
       const backupCourseTables = document.querySelectorAll('table[rules="all"][border="1"]');
       console.log(`Found ${backupCourseTables.length} potential course tables using backup method`);
       extractCoursesFromTables(studentData, backupCourseTables);
     }
     
     // Log the final data
     console.log(`Final course count: ${studentData.courses.length}`);
     console.log('Extracted student data:', studentData);
 
     // Store in Chrome storage
     chrome.storage.local.set({ 'studentData': studentData }, function() {
       console.log('Student data saved to Chrome storage');
       // Verify storage worked
       chrome.storage.local.get('studentData', function(result) {
         console.log('Storage verification:', result);
         if (result.studentData && result.studentData.courses) {
           console.log('Verified course data in storage:', result.studentData.courses.length);
         } else {
           console.error('Storage verification failed!');
         }
       });
     });
 
     // Also notify via message
     chrome.runtime.sendMessage({
       action: "studentDataFetched",
       data: studentData
     });
 
   } catch (error) {
     console.error('Error in fetchStudentData:', error);
   }
 }
 
 // Extract all courses using multiple methods
 function extractAllCourses(studentData) {
   // Method 1: Find course tables by their IDs
   for (let i = 0; i <= 10; i++) {
     const tableId = `ctl00_contentPH_StudentCard_rptStuCard_ctl00_rptPlanTypes_ctl0${i}_gvOriginalPlanCourses`;
     const table = document.getElementById(tableId);
     if (table) {
       const coursesSection = findParentWithBackgroundColor(table);
       const sectionName = coursesSection ? 
         getCourseSectionName(coursesSection) : 
         `Section ${i}`;
       
       console.log(`Processing courses table ${tableId} for section: ${sectionName}`);
       extractCoursesFromTable(studentData, table, sectionName);
     }
   }
   
   // Method 2: Find course tables by structure
   if (studentData.courses.length === 0) {
     console.log('No courses found by ID, trying structure approach');
     // Find all tables that look like course tables
     const courseTables = document.querySelectorAll('table[cellspacing="0"][rules="all"][border="1"][style*="width:100%"]');
     console.log(`Found ${courseTables.length} potential course tables by structure`);
     extractCoursesFromTables(studentData, courseTables);
   }
 }
 
 // Find the section header for a course table
 function getCourseSectionName(element) {
   try {
     // Try to find a TH element with background color #CCC nearby
     const closestTable = element.closest('table');
     if (closestTable) {
       const headerRow = closestTable.querySelector('tr th[style*="background-color: #CCC"]');
       if (headerRow) {
         return headerRow.textContent.trim();
       }
     }
     
     // If that fails, look for any nearby header
     const prevSibling = element.previousElementSibling;
     if (prevSibling && prevSibling.tagName === 'TH') {
       return prevSibling.textContent.trim();
     }
     
     return 'Unknown Section';
   } catch (e) {
     console.error('Error finding section name:', e);
     return 'Unknown Section';
   }
 }
 
 // Find a parent element with background color #CCC
 function findParentWithBackgroundColor(element) {
   let current = element.parentElement;
   while (current) {
     if (current.querySelector('th[style*="background-color: #CCC"]')) {
       return current;
     }
     current = current.parentElement;
   }
   return null;
 }
 
 // Extract courses from a collection of tables
 function extractCoursesFromTables(studentData, tables) {
   tables.forEach((table, index) => {
     const sectionName = `Section ${index + 1}`;
     extractCoursesFromTable(studentData, table, sectionName);
   });
 }
 
 // Extract courses from a single table
 function extractCoursesFromTable(studentData, table, sectionName) {
   try {
     // Get all rows except the header
     const rows = table.querySelectorAll('tr:not(:first-child)');
     console.log(`Processing ${rows.length} rows in section ${sectionName}`);
     
     rows.forEach(row => {
       try {
         const cells = row.querySelectorAll('td');
         if (cells.length >= 4) {
           const planCourse = cells[0].textContent.trim();
           const completedCourse = cells[1].textContent.trim();
           const points = cells[2].textContent.trim();
           const grade = cells[3].textContent.trim();
           
           // Determine status based on styles
           let status = '';
           const rowStyle = row.getAttribute('style') || '';
           const cell1Style = cells[1].getAttribute('style') || '';
           
           if (rowStyle.includes('LightSkyBlue')) {
             status = 'current_semester';
           } else if (rowStyle.includes('LightGreen')) {
             status = 'not_required';
           } else if (cell1Style.includes('Yellow')) {
             status = 'non_plan';
           } else if (cells[2].getAttribute('style') && cells[2].getAttribute('style').includes('Red')) {
             status = 'failed';
           } else if (rowStyle.includes('Orange')) {
             status = 'department_approval';
           }
           
           // Create course object
           const course = {
             planCourse: planCourse,
             completedCourse: completedCourse,
             points: points,
             grade: grade,
             status: status,
             planType: sectionName
           };
           
           // Extract code and name
           const [code, name] = extractCourseInfo(completedCourse || planCourse);
           if (code) course.code = code;
           if (name) course.name = name;
           
           // Add to courses array
           studentData.courses.push(course);
           console.log(`Added course: ${code} - ${name}`);
         }
       } catch (e) {
         console.error('Error processing row:', e);
       }
     });
   } catch (e) {
     console.error('Error extracting courses from table:', e);
   }
 }
 
 // Extract course code and name from a string
 function extractCourseInfo(courseString) {
   if (!courseString) return ['', ''];
   
   const parts = courseString.split(' - ');
   const code = parts[0] ? parts[0].trim() : '';
   const name = parts[1] ? parts[1].trim() : '';
   
   return [code, name];
 }
 
 // Helper function to get text from an element
 function getElementText(elementId) {
   try {
     const element = document.getElementById(elementId);
     return element ? element.textContent.trim() : '';
   } catch (e) {
     console.error(`Error getting text for element ${elementId}:`, e);
     return '';
   }
 }
 
 // Run the extraction when DOM is loaded
 document.addEventListener('DOMContentLoaded', function() {
   console.log('DOM loaded, preparing to extract student data');
   setTimeout(fetchStudentData, 500); // Short delay to ensure everything is rendered
 });
 
 // Also run on window load to be safe
 window.addEventListener('load', fetchStudentData);
 
 // Listen for refresh requests
 chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   if (message.action === "refreshStudentData") {
     console.log('Received refresh request');
     fetchStudentData();
     sendResponse({success: true});
   }
   return true;
 });