/* go see firfo pag src
// for site (public=free,else 7/mnd)at ..?.. keeshui.github.io :
// keeshui.github.io
// gos https://keeshui.github.io/ and shows only: 
// keeshui.github.io		in Fat Big	  ( + bijlagig=paperclip on Touch )  	
// just a start try own page	in normal char
// =========================	-------------
4-7-17: spelfout in storedName correct met myButton cattenates new tot reload, then just new. err-1!
err-1 must be in fun setUserName();
===================== */
var myHeading = document.querySelector('h1');
 // myHeading.textContent = 'Mozilla is cool, ' + myName;
myHeading.textContent = 'Hello world!, ';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
//   myImage.setAttribute ('src','images/publi.png'); //e-5? taken at home BUT: at disk is .PNG, @Site matters?
//     myImage.setAttribute ('src','images/publi.PNG); //oeink e-5, broken works at home; also i n index.html?!!
      myImage.setAttribute ('src','images/publi.PNG);
//    publi.PNG nb was firefox2.png'); 
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
// myHeading.textContent = 'Mozilla is cool, ' + myName;
// err1  myHeading.textContent = myHeading.textContent + myName  // + "br"; 
// err-2?:myBut,,cancel -> nul-lifies storedName
  myHeading.textContent = myName  // don e-1
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
// myHeading.textContent = 'Mozilla is cool, ' + storedName;
  myHeading.textContent = myHeading.textContent  + storedName;
}

myButton.onclick = function() {
  setUserName();
}
// err-3 type iets of niets, cancel kills Heading en
// err-4 type iets, ok kills pre-part = just nam


