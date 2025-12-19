



if(document.getElementById("ctl00_lbAllAccounts")!=null){
logoutB = document.getElementById("ctl00_lbAllAccounts");
logoutB.type = "button";

logoutB.value= "خروج";
logoutB.class = "test2";
logoutB.name="test";
logoutB.id = "test";

logoutB.addEventListener("click", ()=>{
   if(window.location.href=="https://services.just.edu.jo/stuservices/Student/Default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/Default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/default.aspx" )
   window.location.replace("../logout.aspx");
   else
   window.location.replace("../../logout.aspx");

});

}


chrome.runtime.onMessage.addListener(
    function(request) {
      
        // handle the received messages here
        if(request.AutoClose==true) {
            localStorage.setItem("notifications",1);
        document.location.reload();}
        else if(request.AutoClose==false){
            localStorage.setItem("notifications",0);
            document.location.reload();
        }

        

      
    }
  );




var JustLogo = document.querySelector("img[alt='JUST Logo']");
    JustLogo.addEventListener("click", function(){
        window.location.replace("https://services.just.edu.jo/stuservices/Student/Default.aspx");
    });
    
    
// Add CSS animation keyframes
var style = document.createElement('style');
style.innerHTML = `
    .element-to-hide {
        position: relative;
    }
    #hide-button {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
    @keyframes moveUp {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }
    @keyframes moveDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes moveRight {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }
    @keyframes moveLeft {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);


// Add CSS animation keyframes






chrome.runtime.onMessage.addListener(
    function(request) {
     
        // handle the received messages here
        if(request.Dark=='E'){

       localStorage.setItem("Dark",'E');
       document.location.reload();
        }
        else if(request.Dark=='D'){
            localStorage.setItem("Dark",'D');
            document.location.reload();
        }
        

      
    }
  );


if(localStorage.getItem("Dark")=='E'){ 
var Mainstyle = document.createElement('style');
Mainstyle.innerHTML = `

body {
    background-color:rgb(18, 18, 18);

}


/* scroll bar style */

html {
    scrollbar-face-color: #646464;
    scrollbar-base-color: #646464;
    scrollbar-3dlight-color: #646464;
    scrollbar-highlight-color: #646464;
    scrollbar-track-color: #000;
    scrollbar-arrow-color: #000;
    scrollbar-shadow-color: #646464;
    scrollbar-dark-shadow-color: #646464;
  }
  
  ::-webkit-scrollbar { width: 8px; height: 3px;}
  ::-webkit-scrollbar-button {  background-color: #666; }
  ::-webkit-scrollbar-track {  background-color: #646464;}
  ::-webkit-scrollbar-track-piece { background-color: #000;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: #646464;}}
  ::-webkit-resizer { background-color: #666;}



  /* end of scroll bar style */




div .InfoDiv{
    background-color:  rgb(30, 30, 30);
    color: white;
    border-bottom: solid 1px #ffffff;
    position:absolute;
    top: -1%;
    height: 100px;
    width: 500px;
    left: 10%;
    border-radius: 20px;
}
div .NameDiv{
    position:relative;
    top: 10px;
   
}
#ctl00_lblStuNo{
    position: relative;
    top: -26px;
    left: -300px;
}

.Control_Button{
    position: relative;
    top: -20px;
    
    width: 50px;
 
}
div .Control_Button{
    background-color: white;
}
div .Control_Button:hover{
    background-color: rgb(24, 87, 164);
    color: white;
}
.NotificationSpan{
    visibility: hidden;
}
div .top-header{
    background-color: #ffffff00;
}
.site-div{
    visibility: hidden;
}
body .mainContent legend {
    background-color: white !important;
    border: 2px solid white !important;
}
body .mainContent fieldset{
    border: 2px solid white !important;
    color: white;
}

/* right bar*/
#ctl00_MainMenuOnSeat li:hover{
    background-color: rgb(24, 87, 164);
}
#ctl00_contentPH_Label1{
    color: white;
}
.SubMenuDiv ul li{
    background-color:rgb(30, 30, 30) ;
}
.ArrowSubMenu .arrow-beside_sub_menu{
    border-left: 13px solid white;
}
#ctl00_MainMenuOnSeat .HasSubMenu , #ctl00_MainMenuOnSeat li{
    border-bottom: 1px solid #ffffff00;
}
.menuDiv ul{
    background-color: rgb(30, 30, 30);
    float: left;
    right: -500;
    top: 500;
}
.menuDiv{
    position: relative;
    visibility: visible; 
}
.ContainerSubMenu{
   z-index: 2;
}
#FooterDiv{
    background-color: rgb(30, 30, 30);  
    border-top: 3px solid #ffffff ;

}
#tableStudentInfo{
    color: white;
}
div .mainContent fieldset {
    color: white !important;
}
.mainContent table #tableDDL td {
    color: white !important;

}
#ctl00_contentPH_semLbl{
    color: white;
}
div .mainContent .Invoice {
    border: 2px solid #ffffff;
}



`;document.head.appendChild(Mainstyle);
document.body.classList.add('dark-mode');



// fast buttons 


if(window.location.href=="https://services.just.edu.jo/stuservices/Student/Default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/Default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/default.aspx" )
{
    var Pdiv = document.createElement("div"); // parent div
Pdiv.style.position ="absolute";
Pdiv.style.top="50%";
Pdiv.style.left="50%";
Pdiv.style.transform = "translate(-50%,-50%)";
Pdiv.style.textAlign = "center";
Pdiv.id="ParentDiv";
Pdiv.style.zIndex="1";

document.body.appendChild(Pdiv);


//
// first div
//
var mainText = document.createElement("h1");
mainText.innerHTML = "الإنتقال السريع";
mainText.style.color="white";
document.getElementById("ParentDiv").appendChild(mainText);


var divC = document.createElement("div");
divC.style.padding = "10px"
divC.style.marginBottom = "10px";
divC.style.width="fit-contant";
divC.style.height="fit-contant";
divC.style.border="1px solid white";
divC.style.borderRadius="5px";
divC.id="divCenter";
divC.style.direction = "rtl"
document.getElementById("ParentDiv").appendChild(divC);



var button3 = document.createElement("button");
button3.innerHTML = "تسجيل المواد";
button3.id="button3";

button3.addEventListener("click", ()=>{
    window.open("https://services.just.edu.jo/sturegistration/", '_blank');
 });
document.getElementById("divCenter").appendChild(button3);



var button1 = document.createElement("button");
button1.innerHTML = "اخر المواد المسجلة";
button1.id="button1";

button1.addEventListener("click", ()=>{
    window.location.replace("https://services.just.edu.jo/stuservices/Student/Reg/lastregisterdcourses.aspx");
 });
document.getElementById("divCenter").appendChild(button1);




var button6 = document.createElement("button");
button6.innerHTML = "الجدول الدراسي";
button6.id="button5";

button6.addEventListener("click", ()=>{
    window.open("https://services.just.edu.jo/courseschedule/", '_blank');
 });
document.getElementById("divCenter").appendChild(button6);



//
// second div
//

var div2 = document.createElement("div");
div2.style.padding = "10px"
div2.style.marginBottom="10px"
div2.style.width="fit-contant";
div2.style.height="fit-contant";
div2.style.border="1px solid white";
div2.style.borderRadius="5px";
div2.id="div2";
div2.style.direction = "rtl"
div2.style.alignContent = "center";

document.getElementById("ParentDiv").appendChild(div2);

var button4 = document.createElement("button");
button4.innerHTML = "نتائج الأعمال الفصلية";
button4.id="button4";

button4.addEventListener("click", ()=>{
    window.location.replace("https://services.just.edu.jo/stuservices/Student/SemResult/WorkSemResult.aspx");
 });
document.getElementById("div2").appendChild(button4);


var button5 = document.createElement("button");
button5.innerHTML = "نتائج الفصل النهائي";
button5.id="button5";

button5.addEventListener("click", ()=>{
    window.location.replace("https://services.just.edu.jo/stuservices/Student/SemResult/CurrentSemesterResult.aspx");
 });
document.getElementById("div2").appendChild(button5);


var button2 = document.createElement("button");
button2.innerHTML = "بطاقة الطالب";
button2.id="button2";

button2.addEventListener("click", ()=>{
    window.location.replace("https://services.just.edu.jo/stuservices/Student/Reg/StudentCard.aspx");
 });
document.getElementById("div2").appendChild(button2);


 //
// third div
//
var div3 = document.createElement("div");
div3.style.padding = "10px"
div3.style.marginBottom = "10px";
div3.style.width="fit-contant";
div3.style.height="fit-contant";
div3.style.border="1px solid white";
div3.style.borderRadius="5px";
div3.id="div3";
div3.style.direction = "rtl"
document.getElementById("ParentDiv").appendChild(div3);


var button8 = document.createElement("button");
button8.innerHTML = "المعلومات الشخصية";
button8.id="button8";

button8.addEventListener("click", ()=>{
    window.location.replace("https://services.just.edu.jo/stuservices/Student/Info/StudentInfo.aspx");
 });
document.getElementById("div3").appendChild(button8);


var button7 = document.createElement("button");
button7.innerHTML = "جدول الإمتحانات";
button7.id="button7";

button7.addEventListener("click", ()=>{
    window.location.replace("https://services.just.edu.jo/stuservices/Student/Schedules/RealFinalExams.aspx");
 });
document.getElementById("div3").appendChild(button7);






var button9 = document.createElement("button");
button9.innerHTML = "التقويم الجامعي";
button9.id="button9";

button9.addEventListener("click", ()=>{
    window.window.open("https://www.just.edu.jo/ar/calendar/Pages/default.aspx","_blank");
 });
document.getElementById("div3").appendChild(button9);




}// end of fast buttons 




//hide info in dark theme 


    // Get the element to hide
    var elementToHide = document.getElementsByClassName("InfoDiv")[0];
    var elementToHide2 = document.getElementsByClassName("menuDiv")[0];

    // Create the button
    var hideButton = document.createElement("input");
    hideButton.type ="button";
    hideButton.value = "▲";
    hideButton.id = "hide-button";
    hideButton.style.position = "absolute";
    hideButton.style.width="25px";
    hideButton.style.height="25px";
    hideButton.style.color="white";
    hideButton.style.borderRadius = "5px";
    hideButton.style.backgroundColor="rgb(30, 30, 30)";
    hideButton.style.borderColor="#ffffff00"

    hideButton.style.left = "10em";
    hideButton.style.top="0em";
// Add the button to the element to hide
document.body.appendChild(hideButton);



getHiddenValue= localStorage.getItem("hidden");
if(getHiddenValue==0){
    elementToHide.style.visibility="hidden";
    //elementToHide2.style.visibility="hidden";
}
// Add a click event listener to the button
hideButton.addEventListener("click", function(){
    // Check the current display property of the element
    if (elementToHide.style.visibility=="hidden") {
        // If the element is hidden, show it with animation
        elementToHide.style.visibility="visible";
        //elementToHide2.style.visibility="visible";
        localStorage.setItem("hidden",1)
        hideButton.value = "▲";
        elementToHide.style.animation = "moveDown 0.35s ease-in-out";
        //elementToHide2.style.animation = "moveLeft 0.5s ease-in-out";

    } else {
        // If the element is visible, hide it with animation
        elementToHide.style.animation = "moveUp 0.35s ease-in-out";
        //elementToHide2.style.animation = "moveRight 0.5s ease-in-out";
        localStorage.setItem("hidden",0)

        setTimeout(function() {
            elementToHide.style.visibility="hidden";
           // elementToHide2.style.visibility="hidden";

            hideButton.style.visibility="visible";
            hideButton.value = "▼";
        }, 200);
    }
});
// end of hide info 


}








//close alert boxes auto  we want it to be active when the slider on the main extension is on 
test = document.getElementsByClassName("ui-button-text");
if(localStorage.getItem("notifications")==1 && test && test.length > 0){
    try {
        test[0].click();
        test[1].click();
    } catch (error) {
        console.warn('Could not automatically close notification:', error);
    }
}


// Modern Sidebar Enhancement
(function enhanceSidebar() {
    const menuDiv = document.querySelector('.menuDiv');
    if (!menuDiv) return;

    // Add modern styles
    const modernMenuStyle = document.createElement('style');
    modernMenuStyle.innerHTML = `
        .menuDiv {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            position: relative !important;
        }

        .menuDiv.sidebar-collapsed {
            width: 50px !important;
            overflow: visible !important;
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
        }

        .menuDiv.sidebar-collapsed .search-menu-container {
            padding: 5px !important;
            justify-content: center !important;
            background: transparent !important;
        }

        .menuDiv.sidebar-collapsed > *:not(.search-menu-container) {
            display: none !important;
        }

        .menuDiv.sidebar-collapsed .search-menu-input {
            display: none !important;
        }

        .menuDiv.sidebar-collapsed .sidebar-toggle-btn {
            padding: 8px !important;
        }

        body.sidebar-collapsed .mainContent {
            margin-right: auto !important;
            margin-left: auto !important;
            width: 100% !important;
            max-width: 1400px !important;
        }

        .sidebar-toggle-btn {
            padding: 6px !important;
            background: rgba(255,255,255,0.9) !important;
            border: none !important;
            border-radius: 6px !important;
            color: #2c3e50 !important;
            font-size: 14px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-weight: 600 !important;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
            min-width: 28px !important;
            width: 28px !important;
            height: 28px !important;
        }

        .sidebar-toggle-btn:hover {
            background: white !important;
            box-shadow: 0 0 0 2px rgba(24, 87, 164, 0.3) !important;
        }

        .sidebar-toggle-btn:active {
            transform: scale(0.98) !important;
        }

        .menuDiv.sidebar-collapsed .sidebar-toggle-btn {
            margin-right: 0 !important;
        }

        .menuDiv ul {
            scrollbar-width: thin !important;
            scrollbar-color: rgba(100,100,100,0.3) transparent !important;
            padding-bottom: 20px !important;
        }

        .menuDiv ul::-webkit-scrollbar {
            width: 6px !important;
        }

        .menuDiv ul::-webkit-scrollbar-thumb {
            background: rgba(100,100,100,0.3) !important;
            border-radius: 3px !important;
        }

        body .menuDiv #ctl00_MainMenuOnSeat li {
            position: relative !important;
            transition: all 0.3s ease !important;
            margin: 0 !important;
            border-bottom: none !important;
        }

        body .menuDiv #ctl00_MainMenuOnSeat li:hover {
            transform: translateX(5px) !important;
        }

        body .menuDiv #ctl00_MainMenuOnSeat li a {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            padding: 10px 15px !important;
            text-decoration: none !important;
            line-height: 1.5 !important;
            white-space: nowrap !important;
        }

        .menu-icon {
            font-size: 16px !important;
            width: 20px !important;
            min-width: 20px !important;
            max-width: 20px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            margin-left: 5px !important;
        }

        .menu-text {
            flex: 1 !important;
            display: inline-block !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
        }

        .ContainerSubMenu {
            animation: slideIn 0.3s ease !important;
        }

        body .menuDiv .SubMenuDiv ul li a {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            padding: 10px 15px !important;
            text-decoration: none !important;
            line-height: 1.5 !important;
            white-space: nowrap !important;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-10px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .search-menu-container {
            padding: 10px;
            background: rgba(0,0,0,0.2);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex !important;
            align-items: center !important;
        }

        .search-menu-input {
            flex: 1 !important;
            padding: 8px 1px;
            border: none;
            border-radius: 6px;
            background: rgba(255,255,255,0.9);
            color: #2c3e50;
            font-size: 13px;
            transition: all 0.3s ease;
            margin-right: 8px !important;
        }

        body.dark-mode .search-menu-input {
            background: #2c3e50;
            color: #ffffff;
        }

        .search-menu-input:focus {
            outline: none;
            background: white;
            box-shadow: 0 0 0 2px rgba(24, 87, 164, 0.3);
        }

        body.dark-mode .search-menu-input:focus {
            background: #3d4e60;
            box-shadow: 0 0 0 2px rgba(46, 164, 0, 0.4);
        }

        .search-menu-input::placeholder {
            color: #6c757d;
        }

        body.dark-mode .search-menu-input::placeholder {
            color: #9ca3af;
        }

        .menu-item-hidden {
            display: none !important;
        }

        .menu-highlight {
            background: rgba(255, 255, 0, 0.2);
        }

        .recent-items {
            background: rgba(255,255,255,0.05);
            padding: 10px;
            margin: 0 10px 10px 10px;
            border-radius: 6px;
            max-height: 150px;
            overflow-y: auto;
        }

        body.dark-mode .recent-items {
            background: #1e1e1e;
            margin: 0;
        }

        .recent-title {
            font-size: 12px;
            color: rgba(255,255,255,0.9);
            margin-bottom: 8px;
            font-weight: 600;
        }

        .recent-link {
            display: block;
            padding: 6px 10px;
            color: rgba(255,255,255,0.95);
            text-decoration: none;
            border-radius: 4px;
            margin-bottom: 4px;
            font-size: 13px;
            transition: all 0.2s ease;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .recent-link:hover {
            background: rgba(255,255,255,0.15);
            transform: translateX(3px);
            color: white;
        }
    `;
    document.head.appendChild(modernMenuStyle);

    // Remove icon functionality - no longer adding emojis to menu items
    const menuItems = document.querySelectorAll('#ctl00_MainMenuOnSeat li a');
    menuItems.forEach(item => {
        const text = item.textContent.trim();
        
        // Wrap existing text in span for styling
        const textNode = item.childNodes[0];
        if (textNode && textNode.nodeType === 3) {
            const textSpan = document.createElement('span');
            textSpan.className = 'menu-text';
            textSpan.textContent = textNode.textContent.trim();
            textNode.replaceWith(textSpan);
        }
    });

    // Add search functionality
    const menuUl = document.querySelector('#ctl00_MainMenuOnSeat');
    if (menuUl) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-menu-container';
        
        // Add toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'sidebar-toggle-btn';
        toggleBtn.innerHTML = '◀';
        toggleBtn.title = 'إخفاء/إظهار القائمة';
        
        // Create search input
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'search-menu-input';
        searchInput.placeholder = '🔍 ابحث في القائمة...';
        
        // Insert toggle button first, then search input
        searchContainer.appendChild(toggleBtn);
        searchContainer.appendChild(searchInput);
        
        menuUl.parentElement.insertBefore(searchContainer, menuUl);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const allMenuItems = document.querySelectorAll('#ctl00_MainMenuOnSeat > li');
            
            allMenuItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (searchTerm === '' || text.includes(searchTerm)) {
                    item.classList.remove('menu-item-hidden');
                    if (searchTerm !== '') {
                        item.classList.add('menu-highlight');
                    } else {
                        item.classList.remove('menu-highlight');
                    }
                } else {
                    item.classList.add('menu-item-hidden');
                    item.classList.remove('menu-highlight');
                }
            });
        });
        
        // Toggle functionality
        let sidebarVisible = true;
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            sidebarVisible = !sidebarVisible;
            
            if (sidebarVisible) {
                menuDiv.classList.remove('sidebar-collapsed');
                document.body.classList.remove('sidebar-collapsed');
                toggleBtn.innerHTML = '◀';
            } else {
                menuDiv.classList.add('sidebar-collapsed');
                document.body.classList.add('sidebar-collapsed');
                toggleBtn.innerHTML = '▶';
            }
        });
    }

    // Add recently accessed items
    function addRecentItems() {
        const recent = JSON.parse(localStorage.getItem('recentMenuItems') || '[]');
        if (recent.length === 0) return;

        const recentContainer = document.createElement('div');
        recentContainer.className = 'recent-items';
        recentContainer.innerHTML = `
            <div class="recent-title">آخر الصفحات المستخدمة</div>
            ${recent.slice(0, 3).map(item => `
                <a href="${item.url}" class="recent-link">${item.text}</a>
            `).join('')}
        `;
        
        const menuUl = document.querySelector('#ctl00_MainMenuOnSeat');
        if (menuUl && menuUl.parentElement) {
            menuUl.parentElement.insertBefore(recentContainer, menuUl);
        }
    }

    // Track menu clicks
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            const url = this.href;
            
            let recent = JSON.parse(localStorage.getItem('recentMenuItems') || '[]');
            recent = recent.filter(r => r.url !== url);
            recent.unshift({ text, url, date: Date.now() });
            recent = recent.slice(0, 10);
            
            localStorage.setItem('recentMenuItems', JSON.stringify(recent));
        });
    });

    addRecentItems();

})();



