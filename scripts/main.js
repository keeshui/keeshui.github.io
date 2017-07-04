var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world kh!, ';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/publi.png);
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName  
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myHeading.textContent  + storedName;
}

myButton.onclick = function() {
  setUserName();
}




