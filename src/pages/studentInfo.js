// Handle the back button
document.getElementById('backButton').addEventListener('click', function() {
   window.location.replace('popup.html');
});

// Navigate to GPA Calculator with student data
document.getElementById('gpaCalculatorBtn').addEventListener('click', function() {
   localStorage.setItem("regHelpCheck", 2); // Set state for Calculator
   window.location.replace('Calculator.html');
});

// Navigate to Courses page
document.getElementById('viewCoursesBtn').addEventListener('click', function() {
   window.location.href = 'courses.html';
});

// Handle refresh data button
document.getElementById('refreshDataBtn').addEventListener('click', function() {
   this.textContent = 'Refreshing...';
   this.disabled = true;
   
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       // Check if we're on a JUST website tab
       if (tabs[0] && tabs[0].url.includes('services.just.edu.jo')) {
           chrome.tabs.sendMessage(tabs[0].id, { action: "refreshStudentData" });
           setTimeout(function() {
               loadStudentData();
               document.getElementById('refreshDataBtn').textContent = 'Refresh';
               document.getElementById('refreshDataBtn').disabled = false;
           }, 1000);
       } else {
           alert('Please visit the JUST website to refresh student data');
           document.getElementById('refreshDataBtn').textContent = 'Refresh';
           document.getElementById('refreshDataBtn').disabled = false;
       }
   });
});

// Load and display student data
function loadStudentData() {
   chrome.storage.local.get('studentData', function(result) {
       const studentData = result.studentData;
       const dataContainer = document.getElementById('dataContainer');
       const noDataContainer = document.getElementById('noDataContainer');
       
       if (studentData && Object.keys(studentData).length > 0 && studentData.studentName) {
           // Show data container, hide no-data message
           dataContainer.style.display = 'block';
           noDataContainer.style.display = 'none';
           
           // Populate all fields with student data
           document.getElementById('studentName').textContent = studentData.studentName || 'Student';
           document.getElementById('studentId').textContent = studentData.studentId || '-';
           document.getElementById('department').textContent = studentData.department || '-';
           document.getElementById('gpa').textContent = studentData.gpa || '-';
           document.getElementById('completedHours').textContent = studentData.completedHours || '-';
           document.getElementById('passedHours').textContent = studentData.passedHours || '-';
           document.getElementById('planHours').textContent = studentData.planHours || '-';
           document.getElementById('studentStatus').textContent = studentData.studentStatus || '-';
           document.getElementById('planYear').textContent = studentData.planYear || '-';
       } else {
           // Show no-data message, hide data container
           dataContainer.style.display = 'none';
           noDataContainer.style.display = 'block';
           
           // Hide courses button since there's no data
           document.getElementById('viewCoursesBtn').style.display = 'none';
       }
   });
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadStudentData);