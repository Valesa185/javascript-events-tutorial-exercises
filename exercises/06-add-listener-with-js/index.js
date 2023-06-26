window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
var greenButton = document.getElementById("theGreen");

greenButton.addEventListener("click", function (){
	alert("woohoo!");
});