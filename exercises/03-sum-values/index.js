// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	var IntStringA = parseInt(stringA);

	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;
	var IntStringB = parseInt(stringB);

	var stringC = document.getElementById("resultNumber");
	stringC.value = IntStringA + IntStringB;
};

