




logoutB = document.getElementById("ctl00_lbAllAccounts");
logoutB.value= "خروج";
logoutB.class = "test2";
logoutB.name="test";
logoutB.type = "button";
logoutB.id = "test";

logoutB.addEventListener("click", ()=>{
   if(window.location.href=="https://services.just.edu.jo/stuservices/Student/Default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/Default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/default.aspx" || window.location.href=="https://services.just.edu.jo/stuservices/Student/default.aspx" )
   window.location.replace("../logout.aspx");
   else
   window.location.replace("../../logout.aspx");

});




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

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:  rgb(30, 30, 30); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(63, 63, 63); 
}



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
if(localStorage.getItem("notifications")==1){
test[0].click();
test[1].click();
}
    





