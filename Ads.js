
const AdDate = new Date('March 28, 2024 00:00:00');
const userDate = new Date();
if (userDate<AdDate) {
if (window.location.href.indexOf("https://services.just.edu.jo/stuservices/login.aspx")>-1) {
    var loginstyle = document.createElement('style');
    var Ad = document.createElement("div");
    var Aimg = document.createElement("a");
    Aimg.href = "https://www.instagram.com/duckstorejo/";
    Aimg.target = "_blank";
    var img = document.createElement("img");
    img.src = "https://i.ibb.co/yWd2j15/Quack-quack-1.png";
    img.style.cssText = "pointer-events: none;width: 400px";
    var AdText = document.createElement("a");
    //AdText.innerHTML = "<br>JUST Extension is sponsered by DuckstoreJO";
    AdText.style.cssText = "color: #f5ae2e; font-size: 13px; font-weight: bold; text-align: center; text-decoration: none;";
    AdText.href = "https://i.ibb.co/yWd2j15/Quack-quack-1.png";
    AdText.target = "_blank";
    Aimg.appendChild(img);
    Ad.appendChild(Aimg);
    Ad.appendChild(AdText);

    Ad.style.cssText = "position: fixed;bottom: -100px; left: -20px; z-index: 9999;align-items: center;justify-content: center; display: flex; flex-direction: column;";
document.body.appendChild(Ad);
    loginstyle.innerHTML = `
    html body{
    
        
    
    }
    `;document.head.appendChild(loginstyle);
    
    
}
else {

    var AdChoose = Math.floor(Math.random() * 2);
  
    var loginstyle = document.createElement('style');
    var Ad = document.createElement("div");
    var Aimg = document.createElement("a");
    Aimg.href = "https://broochat.odoo.com/";
    Aimg.target = "_blank";
    var img = document.createElement("img");
    if (AdChoose == 0) {
        img.src  = "https://i.ibb.co/4FXrjp6/Quack-quack-1.png";
        img.style.cssText = "pointer-events: none;width: 200px";

    }
    else if (AdChoose == 1) {
        img.src = "https://i.ibb.co/4FXrjp6/Quack-quack-1.png";
        img.style.cssText = "pointer-events: none;width: 200px";

    }

    var AdText = document.createElement("a");
    AdText.innerHTML = "<br>JUST Extension is sponsered by BroochatJO";
    AdText.style.cssText = "color: #f5ae2e; font-size: 13px; font-weight: bold; text-align: center; text-decoration: none;stroke: 10px black;";
    AdText.href = "https://broochat.odoo.com/";
    AdText.target = "_blank";
    Aimg.appendChild(img);
    Ad.appendChild(Aimg);
    Ad.appendChild(AdText);

    Ad.style.cssText = "position: fixed;bottom: 70px; left: 20px; z-index: 9999;align-items: center;justify-content: center; display: flex; flex-direction: column;";
document.body.appendChild(Ad);
}
}