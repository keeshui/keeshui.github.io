var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world !, kh ';

var myImage = document.querySelector('img');
var arr = ['publi.png', 'varia2.JPG', 'Ras11x9-varia.JPG','pi7-jx9-af.JPG', "pi5-jx9-af.JPG",'compa256p2txt.png', 'Kul-2-11x9.JPG', 'firefox-icon.png' ];
// was lastig firefox-icon.png' ]; met parts transparant oid, KH, no ? was by blank 1st char ' fir..'

var aL = arr.length;
var i = 1;
var ccP = 0; // counts clicks on Pictures

myImage.onclick = function() {
   var mySrc = myImage.getAttribute('src');
   cl(  mySrc + ' repl. by: ' + arr[i] );  ///?on\ipv/ en nog on this line //it solves?
   myImage.setAttribute ('src',  'images/' + arr[i] );
   i=i+1; ccP++;
   cl( 'i= ' + i );
   if ( i == aL ){ i=0;   // === cannot
   }
   cl( 'i=' + i );
// cl(ccP); //temp tes ++, ok
 if ( ccP === 1 ){ myHeading.textContent = 'Hello world !, kh ' + aL + ' Paints' ; }
}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName  
}
function cl(a ){ console.log(a); }
// =============
cl(aL + ' prents, kh');  //nb

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myHeading.textContent  + storedName;
}

myButton.onclick = function() {
  setUserName();
}




