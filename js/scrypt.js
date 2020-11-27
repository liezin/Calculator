const A = document.querySelector(".number_A");
const B = document.querySelector(".number_B");
const action = document.querySelector(".actions")
const calc = document.querySelector(".calc")
const InputResult = document.querySelector(".result");

calc.addEventListener("click", () => {
	if (action.value === "+") {
		let result = Number(A.value) + Number(B.value);
		InputResult.innerHTML = result;
		console.log(result);		
	}

	if (action.value === "-") {
		let result = Number(A.value) - Number(B.value);
		InputResult.innerHTML = result;
		console.log(result);		
	}

	if (action.value === "/") {
		let result = Number(A.value) / Number(B.value);
		InputResult.innerHTML = result;
		console.log(result);		
	}

	if (action.value === "*") {
		let result = Number(A.value) * Number(B.value);
		InputResult.innerHTML = result;
		console.log(result);
		
	}

	if (action.value === "%") {
		let result = Number(A.value) % Number(B.value);
		InputResult.innerHTML = result;
		console.log(result);		
	}
});