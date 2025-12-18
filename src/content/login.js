



chrome.runtime.onMessage.addListener(
    function(request) {
     
        // handle the received messages here
        if(request.Dark=='E') localStorage.setItem("Dark",'E');
        else if(request.Dark=='D')localStorage.setItem("Dark",'D');

        document.location.reload();

      
    }
  );


if(localStorage.getItem("Dark")=='E'){
var loginstyle = document.createElement('style');
loginstyle.innerHTML = `
html body{

    background-color: rgb(18, 18, 18); 
    

}
.top-header {
    background-color: #2c3e5000;
}
#ContentDiv{
    visibility: hidden;
}
.LoginTable{
    background-color: rgb(30, 30, 30);
    border-color: rgb(30, 30, 30) ;

}
#LoginDiv{
    visibility: visible;
    background-color: rgb(30, 30, 30); 
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 1px 1px 30px rgba(255, 255, 255, 0);

    


}

.site-div{
    border-right: 2px white;
       
}
.loginDiv{
    border-color: rgb(30, 30, 30) ;
    background-color: rgb(30, 30, 30);  
}
center{
    position: absolute;
    top: 10%;
    left: 10%;

    
}
#NotesDiv{
    visibility: hidden;
}
.NotificationSpan{
    visibility: hidden;
}
.LoginLinks{
    visibility: hidden;
}
#ctl00_contentPH_hlForgetPassword, #ctl00_contentPH_hlChangePassword{
    visibility: visible;
    text-decoration: none;
    color: white;
    position: absolute;
    bottom: 150px;
}
.NoteSpanFont{
    visibility: hidden;
    color: white;
}
center div img {
    visibility: hidden;
}
#FooterDiv{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgb(30, 30, 30);  
    border-top: 3px solid #ffffff ;

}
div .top-header {
    background-color: rgba(30, 30, 30, 0); 
   
}
#ctl00_contentPH_btnLogin{
    background-color: #ffffff;
   
}
#ctl00_contentPH_btnLogin:hover{
    background-color: rgb(24, 87, 164);
    color: white;
}
.site-div{
    visibility: hidden;
}
`;document.head.appendChild(loginstyle);

}

