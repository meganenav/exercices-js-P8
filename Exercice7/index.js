function convertToBinary() {
	const input = document.getElementById("decimalInput").value
	let decimalInput = parseInt(input)
	if(input == decimalInput) {
		const binaryResult = document.getElementById("binaryResult")
		let binary = []
		while(decimalInput > 0) {
			binary.unshift(decimalInput % 2)
			decimalInput = Math.floor(decimalInput / 2)
		}
		binaryResult.textContent = binary.join("")
	}
}