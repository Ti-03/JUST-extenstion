
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //check if the message is the one you want
        if(request.value) {
            //do something with the value that was passed
			autoFun(request.value);
           
        }
    });

// var test = localStorage.getItem("evaVV");
// window.alert(test);



const autoFun = function(Rvalue="10/10"){
	
    
if(window.location.href=="https://services.just.edu.jo/stuservices/Student/CourseQA/CQA_AssessCourse.aspx"){
    if(Rvalue=="10/10") Rvalue="5";
    else if(Rvalue=="5/5") Rvalue="3";
    else if(Rvalue=="0/0") Rvalue="1";

    var radioButtons = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].value === Rvalue) 
       
          radioButtons[i].checked = true;
        }
    
    }


    var table = document.querySelector('#ctl00_contentPH_questionsGV'); // Assuming the table has the ID "ctl00_contentPH_questionsGV"
    var radioButtons = table.querySelectorAll('input[type="radio"]');
    
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].value === Rvalue) {
        if (radioButtons[i].name === "ctl00$contentPH$rbTest2" || radioButtons[i].id === "ctl00_contentPH_rbTest2") {
          continue;
        } else {
          radioButtons[i].checked = true;
        }
      } else if (Rvalue === "3.50/3" || Rvalue === "1.75/1") {
        if (radioButtons[i].id === "ctl00_contentPH_questionsGV_ctl02_ansRBL_0") {
          radioButtons[i].checked = true;
        }
      }
    }
    

	// var radioButtons = document.querySelectorAll('input[type="radio"]');
    // for(let i =0; i< radioButtons.length; i++){
    //     if(radioButtons[i].value === Rvalue){
    //         if(radioButtons[i].name === "ctl00$contentPH$rbTest2" || radioButtons[i].id=="ctl00_contentPH_rbTest2")continue;
    //         else 
    //         radioButtons[i].checked = true;
       
    //             }else  if(Rvalue=="3.50/3" ||Rvalue=="1.75/1" ){
    //                 if(radioButtons[i].id === "ctl00_contentPH_questionsGV_ctl02_ansRBL_0" )
    //                 radioButtons[i].checked = true;
    //             }
    // }
    
    document.getElementById("ctl00_contentPH_openionTB").value="رأيك كتابة عن المدرس "+Math.floor(Math.random() * 10);    ;

}

autoFun();