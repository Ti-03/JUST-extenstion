// Guidance Plan Visualizer - Interactive Tree View for الخطة الاسترشادية
// This script transforms the table-based guidance plan into an interactive tree structure

(function() {
    'use strict';

    // Check if we're on the guidance plan page
    if (!window.location.href.includes('GuidancePlan.aspx')) {
        return;
    }

    // Wait for page to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGuidancePlanVisualizer);
    } else {
        initGuidancePlanVisualizer();
    }

    function initGuidancePlanVisualizer() {
        const fieldset = document.querySelector('fieldset');
        if (!fieldset) return;

        // Extract semester data
        const semesterData = extractSemesterData();
        if (semesterData.length === 0) return;

        // Create modern interface
        createModernInterface(fieldset, semesterData);
    }

    function extractSemesterData() {
        const semesters = [];
        const tables = document.querySelectorAll('table[style*="width: 100%"]');

        tables.forEach(table => {
            const headerRow = table.querySelector('th');
            if (!headerRow) return;

            const semesterName = headerRow.textContent.trim();
            if (!semesterName || semesterName.includes('المجموع')) return;

            const coursesTable = table.querySelector('table[id*="gvSemesterCourses"]');
            if (!coursesTable) return;

            const courses = [];
            const rows = coursesTable.querySelectorAll('tr');

            rows.forEach((row, index) => {
                if (index === 0) return; // Skip header
                const cells = row.querySelectorAll('td');
                if (cells.length >= 3) {
                    const hoursText = cells[2].textContent.trim();
                    const hoursMatch = hoursText.match(/\d+/);
                    const hours = hoursMatch ? parseInt(hoursMatch[0]) : 0;
                    
                    courses.push({
                        code: cells[0].textContent.trim(),
                        name: cells[1].textContent.trim(),
                        hours: hoursText,
                        hoursNum: hours
                    });
                }
            });

            // Calculate total hours by summing up course hours
            const totalHours = courses.reduce((sum, course) => sum + course.hoursNum, 0);

            semesters.push({
                name: semesterName,
                courses: courses,
                totalHours: totalHours
            });
        });

        return semesters;
    }

    function createModernInterface(fieldset, semesterData) {
        // Group semesters by year
        const yearGroups = groupSemestersByYear(semesterData);

        // Create container
        const container = document.createElement('div');
        container.className = 'guidance-plan-modern';
        container.innerHTML = `
            <style>
                .guidance-plan-modern {
                    padding: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .plan-header {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .plan-title {
                    font-size: 28px;
                    font-weight: bold;
                    color: #2c3e50;
                    margin-bottom: 10px;
                }

                .plan-stats {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 15px;
                    flex-wrap: wrap;
                }

                .stat-card {
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                    padding: 15px 25px;
                    border-radius: 12px;
                    color: white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }

                .stat-number {
                    font-size: 32px;
                    font-weight: bold;
                    display: block;
                }

                .stat-label {
                    font-size: 14px;
                    opacity: 0.9;
                }

                .view-toggle {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin: 20px 0;
                }

                .toggle-btn {
                    padding: 10px 20px;
                    border: 2px solid #2c3e50;
                    background: white;
                    color: #2c3e50;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 600;
                }

                .toggle-btn.active {
                    background: #2c3e50;
                    color: white;
                }

                .toggle-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
                }

                .year-container {
                    margin-bottom: 25px;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }

                .year-header {
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                    color: white;
                    padding: 18px 25px;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                    user-select: none;
                }

                .year-header:hover {
                    background: linear-gradient(135deg, #34495e 0%, #3498db 100%);
                }

                .year-title {
                    font-size: 20px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .year-icon {
                    font-size: 24px;
                }

                .year-info {
                    display: flex;
                    gap: 20px;
                    font-size: 14px;
                }

                .expand-icon {
                    font-size: 24px;
                    transition: transform 0.3s ease;
                }

                .year-container.expanded .expand-icon {
                    transform: rotate(180deg);
                }

                .year-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease;
                    background: #f8f9fa;
                }

                .year-container.expanded .year-content {
                    max-height: 5000px;
                }

                .semester-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
                    gap: 20px;
                    padding: 20px;
                }

                .semester-card {
                    background: white;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                }

                .semester-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                }

                .semester-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #e9ecef;
                }

                .semester-name {
                    font-size: 18px;
                    font-weight: bold;
                    color: #2c3e50;
                }

                .semester-hours {
                    background: #16a085;
                    color: white;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: bold;
                }

                .courses-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .course-item {
                    padding: 12px;
                    margin-bottom: 8px;
                    background: #f8f9fa;
                    border-radius: 8px;
                    border-left: 4px solid #2c3e50;
                    transition: all 0.2s ease;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .course-item:hover {
                    background: #e9ecef;
                    transform: translateX(5px);
                }

                .course-info {
                    flex: 1;
                }

                .course-code {
                    font-size: 13px;
                    color: #6c757d;
                    font-weight: 600;
                    display: block;
                    margin-bottom: 4px;
                }

                .course-name {
                    font-size: 14px;
                    color: #2c3e50;
                    font-weight: 500;
                }

                .course-hours {
                    background: #2c3e50;
                    color: white;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: bold;
                    min-width: 45px;
                    text-align: center;
                }

                .tree-view {
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 15px;
                    overflow-x: auto;
                }

                .tree-semester-row {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 20px;
                    margin-bottom: 40px;
                    position: relative;
                    flex-wrap: wrap;
                }

                .tree-semester-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .tree-semester-label {
                    background: linear-gradient(135deg, #3498db 0%, #16a085 100%);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
                    text-align: center;
                    min-width: 150px;
                }

                .tree-courses-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    align-items: center;
                }

                .tree-course-card {
                    background: white;
                    padding: 12px 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    border-left: 4px solid #3498db;
                    min-width: 250px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .tree-course-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 20px rgba(52, 152, 219, 0.3);
                    border-left-color: #16a085;
                }

                .tree-course-code {
                    font-size: 13px;
                    color: #6c757d;
                    font-weight: 600;
                    display: block;
                    margin-bottom: 5px;
                }

                .tree-course-name {
                    font-size: 15px;
                    color: #2c3e50;
                    font-weight: 500;
                }

                .tree-course-hours {
                    font-size: 12px;
                    color: #16a085;
                    font-weight: bold;
                    margin-top: 5px;
                    display: block;
                }

                .tree-year-divider {
                    text-align: center;
                    margin: 30px 0;
                    padding: 15px;
                    background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.3), transparent);
                    position: relative;
                }

                .tree-year-label {
                    background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
                    display: inline-block;
                    padding: 10px 30px;
                    border-radius: 30px;
                    font-size: 20px;
                    font-weight: bold;
                    color: white;
                    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
                }

                @media (max-width: 768px) {
                    .semester-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .plan-stats {
                        gap: 15px;
                    }
                }
            </style>

            <div class="plan-header">
                <div class="plan-title">📚 الخطة الاسترشادية</div>
                <div class="plan-stats">
                    <div class="stat-card">
                        <span class="stat-number">${semesterData.length}</span>
                        <span class="stat-label">فصول دراسية</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">${calculateTotalCourses(semesterData)}</span>
                        <span class="stat-label">مساقات</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">${calculateTotalHours(semesterData)}</span>
                        <span class="stat-label">ساعة معتمدة</span>
                    </div>
                </div>
            </div>

            <div class="view-toggle">
                <button type="button" class="toggle-btn active" data-view="card">📊 عرض البطاقات</button>
                <button type="button" class="toggle-btn" data-view="tree">🌳 عرض الشجرة</button>
            </div>

            <div id="planContent"></div>
        `;

        // Replace old content
        fieldset.innerHTML = '';
        fieldset.appendChild(container);

        // Render initial view
        renderCardView(yearGroups);

        // Add toggle listeners
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                if (this.dataset.view === 'card') {
                    renderCardView(yearGroups);
                } else {
                    renderTreeView(yearGroups);
                }
            });
        });
    }

    function groupSemestersByYear(semesters) {
        const years = {};
        
        semesters.forEach(semester => {
            const yearMatch = semester.name.match(/السنة\s+(الأولى|الثانية|الثالثة|الرابعة|الخامسة)/);
            const yearName = yearMatch ? yearMatch[0] : 'أخرى';
            
            if (!years[yearName]) {
                years[yearName] = [];
            }
            years[yearName].push(semester);
        });

        return years;
    }

    function renderCardView(yearGroups) {
        const content = document.getElementById('planContent');
        let html = '';

        Object.entries(yearGroups).forEach(([year, semesters]) => {
            const totalHours = semesters.reduce((sum, sem) => sum + parseInt(sem.totalHours), 0);
            const totalCourses = semesters.reduce((sum, sem) => sum + sem.courses.length, 0);

            html += `
                <div class="year-container expanded">
                    <div class="year-header">
                        <div class="year-title">
                            <span class="year-icon">📖</span>
                            ${year}
                        </div>
                        <div class="year-info">
                            <span>${semesters.length} فصول</span>
                            <span>${totalCourses} مساقات</span>
                            <span>${totalHours} ساعة</span>
                        </div>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="year-content">
                        <div class="semester-grid">
                            ${semesters.map(sem => `
                                <div class="semester-card">
                                    <div class="semester-header">
                                        <div class="semester-name">${sem.name.replace(year + ' - ', '')}</div>
                                        <div class="semester-hours">${sem.totalHours} ساعة</div>
                                    </div>
                                    <ul class="courses-list">
                                        ${sem.courses.map(course => `
                                            <li class="course-item">
                                                <div class="course-info">
                                                    <span class="course-code">${course.code}</span>
                                                    <span class="course-name">${course.name}</span>
                                                </div>
                                                <div class="course-hours">${course.hours} س</div>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        });

        content.innerHTML = html;
        addYearToggleListeners();
    }

    function renderTreeView(yearGroups) {
        const content = document.getElementById('planContent');
        if (!content) {
            console.error('planContent element not found');
            return;
        }

        let html = '<div class="tree-view">';

        Object.entries(yearGroups).forEach(([year, semesters], yearIndex) => {
            // Add year divider
            if (yearIndex > 0) {
                html += `
                    <div class="tree-year-divider">
                        <div class="tree-year-label">📖 ${year}</div>
                    </div>
                `;
            } else {
                html += `
                    <div class="tree-year-divider" style="margin-top: 0;">
                        <div class="tree-year-label">📖 ${year}</div>
                    </div>
                `;
            }

            // Create a row for all semesters in this year
            html += '<div class="tree-semester-row">';

            semesters.forEach(sem => {
                html += `
                    <div class="tree-semester-container">
                        <div class="tree-semester-label">
                            ${sem.name.replace(year + ' - ', '')}
                            <br>
                            <span style="font-size: 13px; opacity: 0.9;">${sem.totalHours} ساعة معتمدة</span>
                        </div>
                        <div class="tree-courses-grid">
                            ${sem.courses.map(course => `
                                <div class="tree-course-card">
                                    <span class="tree-course-code">${course.code}</span>
                                    <div class="tree-course-name">${course.name}</div>
                                    <span class="tree-course-hours">⏱️ ${course.hours} ساعة</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            });

            html += '</div>'; // Close semester row
        });

        html += '</div>';
        content.innerHTML = html;
        console.log('Tree view rendered successfully');
    }

    function addYearToggleListeners() {
        document.querySelectorAll('.year-header').forEach(header => {
            header.addEventListener('click', function() {
                this.parentElement.classList.toggle('expanded');
            });
        });
    }

    function calculateTotalCourses(semesters) {
        return semesters.reduce((total, sem) => total + sem.courses.length, 0);
    }

    function calculateTotalHours(semesters) {
        return semesters.reduce((total, sem) => total + parseInt(sem.totalHours), 0);
    }

})();
