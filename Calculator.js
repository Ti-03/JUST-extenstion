
if(localStorage.getItem("regHelpCheck")==0) window.location.replace("popup.html");
regHelper = document.getElementById("RegHelper2");
regHelper.addEventListener("click",function(){
    localStorage.setItem("regHelpCheck",0);
    window.location.replace("popup.html");
});



GPA= document.getElementById("GPA");

if(localStorage.getItem("numberOfCourses")>0)
var counter = localStorage.getItem("numberOfCourses");
else {  var counter=0;
    localStorage.setItem("GPA",0);
    GPA.style.display="none";
}











AddEntrie = document.getElementById("addEntrie");
DivP = document.getElementById("Entries");



// from the storge get me all the values 
for(var i=0;i<counter;i++){
    newDiv = document.createElement("div");
    newDiv.id="newDivC"+i;
    newDiv.style.border="1px solid white";
    
    document.getElementById("Entries").appendChild(newDiv);
    


    STitle = document.createElement("a");
STitle.innerHTML = "Name : ";
STitle.style.color="red";
document.getElementById("newDivC"+i).appendChild(STitle);
    
    newS = document.createElement("a");
    newS.innerHTML = localStorage.getItem(i+"-name");
    document.getElementById("newDivC"+i).appendChild(newS);





    NTitle = document.createElement("a");
NTitle.innerHTML = " | Hours : ";
NTitle.style.color="red";
document.getElementById("newDivC"+i).appendChild(NTitle);

    newN = document.createElement("a");
    newN.innerHTML = localStorage.getItem(i+"-hour");
    document.getElementById("newDivC"+i).appendChild(newN);
    

    LTitle = document.createElement("a");
LTitle.innerHTML = " | Mark : ";
LTitle.style.color="red";
document.getElementById("newDivC"+i).appendChild(LTitle);

    newL = document.createElement("a");
    newL.innerHTML = localStorage.getItem(i+"-mark");
    document.getElementById("newDivC"+i).appendChild(newL);


    
    
    newB =document.createElement("button");
    newB.innerHTML = "Delete";
    newB.id="Del"+i;
    newB.classList.add("testing");
    newB.style.width="fit-content"
    newB.style.marginLeft="10px"
    document.getElementById("newDivC"+i).appendChild(newB);



 

}

var buttons = document.querySelectorAll("button[class='testing']");

// Loop through each button and add a click event listener
for (var i = 0; i < buttons.length; i++) {
    (function(buttonIndex) {
      buttons[buttonIndex].addEventListener("click", function() {
                 localStorage.removeItem(buttonIndex+"-hour");
                localStorage.removeItem(buttonIndex+"-mark");
                localStorage.removeItem(buttonIndex+"-name");
                for(var j=buttonIndex;j<counter;j++){
                    localStorage.setItem(j+"-hour",localStorage.getItem(j+1+"-hour"));
                    localStorage.setItem(j+"-mark",localStorage.getItem(j+1+"-mark"));
                    localStorage.setItem(j+"-name",localStorage.getItem(j+1+"-name"));

                }
                counter--;

                localStorage.setItem("numberOfCourses",counter);
                document.location.reload();


      });
    })(i);
  }
  totalHours=0;
    for(var i=0;i<counter;i++){
        totalHours+=parseFloat(localStorage.getItem(i+"-hour"));
    }
    totalMarks=0;
    for(var i=0;i<counter;i++){
        mark = localStorage.getItem(i+"-mark");
        if(typeof mark != 'number'){
            mark = mark.toUpperCase();
            if(mark=="A+") mark=4.2;
            else
            if(mark=="A") mark=4;
            else if(mark=="A-") mark=3.75;
            else if(mark=="B+") mark=3.5;
            else if(mark=="B") mark=3.25;
            else if(mark=="B-") mark=3;
            else if(mark=="C+") mark=2.75;
            else if(mark=="C") mark=2.5;
            else if(mark=="C-") mark=2.25;
            else if(mark=="D+") mark=2;
            else if(mark=="D") mark=1.75;
            else if(mark=="D-") mark=1.5;
            else if(mark=="F") mark=0.5;
        }
        totalMarks+=mark*parseFloat(localStorage.getItem(i+"-hour"));
    }
  document.getElementById("SGPA").innerHTML = (totalMarks/totalHours).toFixed(2);





// store the values 
AddEntrie.addEventListener("click",function(){


newDiv = document.createElement("div");
newDiv.id="newDivC"+counter;
newDiv.style.direction = "rtl"
newDiv.style.border="1px solid white";

document.getElementById("Entries").appendChild(newDiv);



newN = document.createElement("a");
newN.innerHTML = document.getElementById("CMarkName").value;
localStorage.setItem(counter+"-name", document.getElementById("CMarkName").value);
document.getElementById("newDivC"+counter).appendChild(newN);



newN = document.createElement("a");
newN.innerHTML = document.getElementById("hour").value;
localStorage.setItem(counter+"-hour", document.getElementById("hour").value);
document.getElementById("newDivC"+counter).appendChild(newN);





newL = document.createElement("a");
newL.innerHTML = document.getElementById("mark").value;
localStorage.setItem(counter+"-mark", document.getElementById("mark").value);
document.getElementById("newDivC"+counter).appendChild(newL);



newB =document.createElement("button");
newB.innerHTML = "Fill";
newB.id="Del"+counter;
newB.style.width="fit-content"
document.getElementById("newDivC"+counter).appendChild(newB);


localStorage.setItem("numberOfCourses",++counter);

});
