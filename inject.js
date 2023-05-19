
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



const autoFun = function(Rvalue="5/5"){
	
    
if(window.location.href=="https://services.just.edu.jo/stuservices/Student/CourseQA/CQA_AssessCourse.aspx"){
    if(Rvalue=="5/5") Rvalue="5";
    else if(Rvalue=="3.50/3") Rvalue="3";
    else if(Rvalue=="1.75/1") Rvalue="1";
    }

	var radioButtons = document.querySelectorAll('input[type="radio"]');
    for(let i =0; i< radioButtons.length; i++){
        if(radioButtons[i].value === Rvalue){
            radioButtons[i].checked = true;
        }
    }

	// var radioInputs = document.querySelectorAll('input[type="radio"][value='+test+']');
	// // Loop through each radio input element
	// for (var i = 0; i < radioInputs.length; i++) {
	//   // Check the radio input
	//   radioInputs[i].checked = true;
	// }
    
    document.getElementById("ctl00_contentPH_openionTB").value="رأيك كتابة عن المدرس ";

}

autoFun();