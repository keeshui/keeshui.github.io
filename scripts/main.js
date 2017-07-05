var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world kh!, ';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/publi.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');
var myButt2 = document.querySelector('button' name='butt2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName  
}

function setUserNam2() {
  var myNam2 = prompt('Please naam2.');
  localStorage.setItem('name', myNam2);
  myHeading.textContent = myNam2  
}
// kill all about nam2's

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myHeading.textContent  + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// to kill nam2 
myBut2.onclick = function() {
  setUserNam2();
}



