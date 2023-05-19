
if(localStorage.getItem("regHelpCheck")==0) window.location.replace("popup.html");
regHelper = document.getElementById("RegHelper2");
regHelper.addEventListener("click",function(){
    localStorage.setItem("regHelpCheck",0);
    window.location.replace("popup.html");
});




if(localStorage.getItem("numberOfEnt")>0)
var counter = localStorage.getItem("numberOfEnt");
else var counter=0;











AddEntrie = document.getElementById("addEntrie");
DivP = document.getElementById("Entries");



// from the storge get me all the values 
for(var i=0;i<counter;i++){
    newDiv = document.createElement("div");
    newDiv.id="newDivC"+i;
    newDiv.style.border="1px solid white";
    
    document.getElementById("Entries").appendChild(newDiv);
    
    NTitle = document.createElement("a");
NTitle.innerHTML = "course Name: ";
NTitle.style.color="red";
document.getElementById("newDivC"+i).appendChild(NTitle);

    newN = document.createElement("a");
    newN.innerHTML = localStorage.getItem(i+"-Name");
    document.getElementById("newDivC"+i).appendChild(newN);
    

    LTitle = document.createElement("a");
LTitle.innerHTML = " | course Line: ";
LTitle.style.color="red";
document.getElementById("newDivC"+i).appendChild(LTitle);

    newL = document.createElement("a");
    newL.innerHTML = localStorage.getItem(i+"-Line");
    document.getElementById("newDivC"+i).appendChild(newL);

    
STitle = document.createElement("a");
STitle.innerHTML = " | Section:";
STitle.style.color="red";
document.getElementById("newDivC"+i).appendChild(STitle);
    
    newS = document.createElement("a");
    newS.innerHTML = localStorage.getItem(i+"-Sec");
    document.getElementById("newDivC"+i).appendChild(newS);
    
    newB =document.createElement("button");
    newB.innerHTML = "Fill";
    newB.id="Del"+i;
    newB.classList.add("testing");
    newB.style.width="fit-content"
    document.getElementById("newDivC"+i).appendChild(newB);



 

}

var buttons = document.querySelectorAll("button[class='testing']");

// Loop through each button and add a click event listener
for (var i = 0; i < buttons.length; i++) {
    (function(buttonIndex) {
      buttons[buttonIndex].addEventListener("click", function() {

        chrome.tabs.query({currentWindow: true}, function(tabs) {
            //loop through the tabs
            for (var i = 0; i < tabs.length; i++) {
              //send multiple values in the request object
              chrome.tabs.sendMessage(tabs[i].id, {
               
                Line: localStorage.getItem(buttonIndex+"-Line"),
                Sec: localStorage.getItem(buttonIndex+"-Sec")
              });
            }
          });


      });
    })(i);
  }


DelB = document.getElementById("Del");
DelB.addEventListener("click",function(){
    localStorage.removeItem(counter-1+"-Name");
    localStorage.removeItem(counter-1+"-Line");
    localStorage.removeItem(counter-1+"-Sec");
 //  var ToBeDel = document.getElementById("newDivC"+counter-1);
 //   ToBeDel.remove();
    counter--;
    localStorage.setItem("numberOfEnt",counter);

    document.location.reload();

});


// store the values 
AddEntrie.addEventListener("click",function(){


newDiv = document.createElement("div");
newDiv.id="newDivC"+counter;
newDiv.style.direction = "rtl"
newDiv.style.border="1px solid white";

document.getElementById("Entries").appendChild(newDiv);





newN = document.createElement("a");
newN.innerHTML = document.getElementById("CName").value;
localStorage.setItem(counter+"-Name", document.getElementById("CName").value);
document.getElementById("newDivC"+counter).appendChild(newN);





newL = document.createElement("a");
newL.innerHTML = document.getElementById("CNumber").value;
localStorage.setItem(counter+"-Line", document.getElementById("CNumber").value);
document.getElementById("newDivC"+counter).appendChild(newL);




newS = document.createElement("a");
newS.innerHTML = document.getElementById("CSection").value;
localStorage.setItem(counter+"-Sec", document.getElementById("CSection").value);

document.getElementById("newDivC"+counter).appendChild(newS);

newB =document.createElement("button");
newB.innerHTML = "Fill";
newB.id="Del"+counter;
newB.style.width="fit-content"
document.getElementById("newDivC"+counter).appendChild(newB);


localStorage.setItem("numberOfEnt",++counter);

});



