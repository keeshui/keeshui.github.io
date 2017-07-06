
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world !, kh ';

var myImage = document.querySelector('img');
var arr = ['publi.png', 'varia2.JPG', 'Ras11x9-varia.JPG','pi7-jx9-af.JPG', "pi5-jx9-af.JPG",'compa512p2txt.png', 'Kul-2-11x9.JPG' ];
var i = 1;
var aL = arr.length;

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
 console.log(  mySrc + ' repl. by: images/ ' + arr[i] );  ///?on\ipv/ en nog on this line //it solves?

 //  if(mySrc == 'images/publi.png') {
      myImage.setAttribute ('src',  'images/' + arr[i] );
	i=i+1;
 //      myImage.setAttribute ('src','images/publi.png');
//    } 
//   else {
//     myImage.setAttribute ('src','images/' + arr[i]); // cross;forbidden, could ?
//	i=i+1;
 //   }
console.log( 'i= ' + i );
if (arr.length == i ){i=0;   // === cannot
    }

console.log( 'i=' + i );
}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName  
}
// =============
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myHeading.textContent  + storedName;
}

function cl(a ){ console.log(a); }
cl(aL + ' prents, kh');

myButton.onclick = function() {
  setUserName();
}




