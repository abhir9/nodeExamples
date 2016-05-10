var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");

mainTitle = document.getElementById("mainTitle");
console.log(mainTitle.innerHTML);

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);

var myNewElement = document.createElement("li");


var myElement = document.getElementById("yes");
myElement.appendChild(myNewElement);

myElement.innerHTML = "New Item Text";

