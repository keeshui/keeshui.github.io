var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world !, kh ';

var myImage = document.querySelector('img');
var arr = ['publi.png', 'varia2.JPG', 'Ras11x9-varia.JPG','pi7-jx9-af.JPG', "pi5-jx9-af.JPG",'compa256p2txt.png', 'Kul-2-11x9.JPG', 'firefox-icon.png' ];
// was lastig firefox-icon.png' ]; met parts transparant oid, KH, no ? was by blank 1st char ' fir..'

var aL = arr.length-1;
var i = 0;	// which picture od all in on
var ccP = 0; 	// counts clicks on Pictures
var dr=1;	// direction {+1,-1}
var buts = document.querySelectorAll('button');

myImage.onclick = function() {
   i+=dr; ccP++;  
   check();
   myImage.setAttribute ('src',  'images/' + arr[i] );
   ccP++;
 if ( ccP === 1 ){ myHeading.textContent = 'Hello world !, kh ' + (aL+1) + '  Paints' ; }
}

function check(){
  if ( i < 0 ){ i=aL; }  
  if ( i > aL ){ i=0; } 
  myImage.setAttribute ('src',  'images/' +  arr[i]);
 // myImage.setAttribute ('alt', alts[i] );
  myHeading.textContent = 'Hai world!, kh ' + (i+1) + ' v' + (aL+1) + ' Paints, ' + arr[i];
}

buts[0].onclick = function(){ setUserName();}
buts[1].onclick = function(){     check(--i);}
buts[2].onclick = function(){     dr=-dr;  i+=dr; check(i); }
buts[3].onclick = function(){     check(++i);}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName  + ' !, kh  +  ' + (aL+1) + '  Paints' // 2 be persanal if possible
}
function cl(a ){ console.log(a); }

if(!localStorage.getItem('name')) {
//  setUserName();  // do not disturb 1st visits of the page, where there s a button to give a name, kh
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myHeading.textContent  + storedName;
}

myButton.onclick = function() {
  setUserName();
}
var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world !, kh ';

var myImage = document.querySelector('img');
var arr = ['publi.png', 'varia2.JPG', 'Ras11x9-varia.JPG','pi7-jx9-af.JPG', "pi5-jx9-af.JPG",'compa256p2txt.png', 'Kul-2-11x9.JPG', 'firefox-icon.png' ];
// was lastig firefox-icon.png' ]; met parts transparant oid, KH, no ? was by blank 1st char ' fir..'

var aL = arr.length-1;
var i = 0;	// which picture od all in on
var ccP = 0; 	// counts clicks on Pictures
var dr=1;	// direction {+1,-1}
var buts = document.querySelectorAll('button');

myImage.onclick = function() {
   i+=dr; ccP++;  
   check();
   myImage.setAttribute ('src',  'images/' + arr[i] );
   ccP++;
 if ( ccP === 1 ){ myHeading.textContent = 'Hello world !, kh ' + (aL+1) + '  Paints' ; }
}

function check(){
  if ( i < 0 ){ i=aL; }  
  if ( i > aL ){ i=0; } 
  myImage.setAttribute ('src',  'images/' +  arr[i]);
 // myImage.setAttribute ('alt', alts[i] );
  myHeading.textContent = 'Hai world!, kh ' + (i+1) + ' v' + (aL+1) + ' Paints, ' + arr[i];
}

buts[0].onclick = function(){ setUserName();}
buts[1].onclick = function(){     check(--i);}
buts[2].onclick = function(){     dr=-dr;  i+=dr; check(i); }
buts[3].onclick = function(){     check(++i);}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName  + ' !, kh  +  ' + (aL+1) + '  Paints' // 2 be persanal if possible
}
function cl(a ){ console.log(a); }

if(!localStorage.getItem('name')) {
//  setUserName();  // do not disturb 1st visits of the page, where there s a button to give a name, kh
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myHeading.textContent  + storedName;
}

myButton.onclick = function() {
  setUserName();
}
