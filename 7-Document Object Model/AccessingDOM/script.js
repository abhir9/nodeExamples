var mainTitle = document.getElementById("mainTitle");

console.log("This is an element of type:",mainTitle.nodeType);
console.log("The Inner HTML is:", mainTitle.innerHTML);
console.log("Child nodes is:", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links :", myLinks.length);