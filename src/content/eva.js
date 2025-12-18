let evaV;


var slider = document.getElementById("evaRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function(){
    
       
            evaV = slider.value+"/"+slider.value;
            

                chrome.tabs.query({currentWindow: true}, function(tabs) {
                    //loop through the tabs
                    for (var i = 0; i < tabs.length; i++) {
                        //send the value to the JavaScript file running in the tab
                        chrome.tabs.sendMessage(tabs[i].id, {value: evaV});
                    }
                });

                // chrome.runtime.sendMessage({greeting: "hello",  value : evaV});
        
    
   /* 
   
                   localStorage.setItem("evaVV=",evaV);


                   chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.greeting === "getValue") {
                sendResponse({value: evaV});
            }
        });*/

    console.log(evaV);
};

AutoCN = document.getElementById("ACN");
if(localStorage.getItem("notifications")==1)AutoCN.checked=true;
else AutoCN.checked=false;
AutoCN.addEventListener("click",function(){


    chrome.tabs.query({currentWindow: true}, function(tabs) {

        var AutoCn_Check = AutoCN.checked;
        if(AutoCn_Check==true) localStorage.setItem("notifications",1);
        else localStorage.setItem("notifications",0);

        //loop through the tabs
        for (var i = 0; i < tabs.length; i++) {
          //send multiple values in the request object
          chrome.tabs.sendMessage(tabs[i].id, {
            AutoClose: AutoCn_Check
          });
        }
      });

});



Dark = document.getElementById("Darktheme");
if(localStorage.getItem("Dark")=='E')Dark.checked=true;
else Dark.checked=false;
Dark.addEventListener("click",function(){


    chrome.tabs.query({currentWindow: true}, function(tabs) {

        var Dark_Check = Dark.checked;
        if(Dark_Check==true) localStorage.setItem("Dark",'E'); // E from Enable
        else localStorage.setItem("Dark",'D');  // D from Disable 

        //loop through the tabs
        for (var i = 0; i < tabs.length; i++) {
          //send multiple values in the request object
          if(Dark_Check==true)
          chrome.tabs.sendMessage(tabs[i].id, {
           
            Dark: 'E'
          });else chrome.tabs.sendMessage(tabs[i].id, {
           
            Dark: 'D'
          });
        }
      });

});


if(localStorage.getItem("regHelpCheck")==1) window.location.replace("RegHelper.html");
regHelper = document.getElementById("RegHelper");
regHelper.addEventListener("click",function(){
  localStorage.setItem("regHelpCheck",1);
  window.location.replace("RegHelper.html");

});

if(localStorage.getItem("regHelpCheck")==2) window.location.replace("Calculator.html");
regHelper = document.getElementById("calc");
regHelper.addEventListener("click",function(){
  localStorage.setItem("regHelpCheck",2);
  window.location.replace("Calculator.html");

});






