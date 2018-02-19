var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
myHeading.textContent = 'Hello world!';

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	mySrc = (mySrc === 'images/DSC_4301.jpg') ? 'images/frank.jpg' : 'images/DSC_4301.jpg' ;
	myImage.setAttribute('src',mySrc);

}
var myButton = document.querySelector('button');
function setUserName(){
	let usrName = prompt('Please enter your name.');
	localStorage.setItem('name',usrName);
	myHeading.textContent = 'Wellcome, Mr ' + usrName;
}
(!localStorage.getItem('name')) ? setUserName() : myHeading.textContent = 'Welcome, Mr ' + localStorage.getItem('name');
myButton.onclick = function(){
	setUserName();
}