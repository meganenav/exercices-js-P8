const myButton = document.getElementById("myButton")
const body = document.querySelector("body")

myButton.addEventListener("click", () => {
	const p = document.createElement("p")
	p.textContent = "Bonjour, vous avez cliqué sur le bouton !"
	body.appendChild(p)
})