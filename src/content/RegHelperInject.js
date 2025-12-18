//Lineid = document.getElementById("ctl00_cphBody_QQjPPCUMTQByFBTpOhXDbhnwx");
//SecId = document.getElementById("ctl00$cphBody$HlJaEHFnLsEjVrtIewstbRPIW");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        

// Get the table element
var table = document.querySelector("table");

// Get all input elements with type "text" and a style attribute that contains "width:75px" inside the table
var textInputs = table.querySelectorAll("input[type='text']");

// Set the value of each input element to "Example Text"
for (var i = 0; i < textInputs.length; i++) {
    if(i<textInputs.length/2)
  textInputs[i].value = request.Line;
  else
  textInputs[i].value=request.Sec;
  
}
    });