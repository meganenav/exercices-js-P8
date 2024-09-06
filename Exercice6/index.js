function appendToDisplay(element) {
	const display = document.getElementById("display")
	let value = display.getAttribute("value")
	let newValue = ""
	if(value !== null) {
		newValue = value + element
	}
	else {
		newValue = element
	}
	display.setAttribute("value", newValue)
}

function calculateResult() {
	const displayInput = document.getElementById("display")
	const display = displayInput.value
	let elements = ""
	let operation = 0 
	const addition = display.indexOf("+")
	const soustraction = display.indexOf("-")
	const multiplication = display.indexOf("*")
	const division = display.indexOf("/")

	if(addition !== -1) {
		elements = display.split("+")
		let nb1 = parseInt(elements[0])
		let nb2 = parseInt(elements[1])
		operation = nb1 + nb2
	}
	if(soustraction !== -1) {
		elements = display.split("-")
		let nb1 = parseInt(elements[0])
		let nb2 = parseInt(elements[1])
		operation = nb1 - nb2
	}
	if(multiplication !== -1) {
		elements = display.split("*")
		let nb1 = parseInt(elements[0])
		let nb2 = parseInt(elements[1])
		operation = nb1 * nb2
	}
	if(division !== -1) {
		elements = display.split("/")
		let nb1 = parseInt(elements[0])
		let nb2 = parseInt(elements[1])
		if(nb2 === 0) {
			operation = "Division by zero is not allowed"
		}
		else {
			operation = nb1 / nb2
		}
	}
	displayInput.setAttribute("value", operation)
}

function clearDisplay() {
	const display = document.getElementById("display")
	display.setAttribute("value", "")
}