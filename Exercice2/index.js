// Créez votre fonction ici
function calculate(nb1, nb2, operator) {
	let operation = 0
	nb1 = parseInt(nb1)
	nb2 = parseInt(nb2)
	if(operator === '%') {
		return "Invalid operator"
	}
	if(nb2 === 0 && operator === '/') {
		return "Division by zero is not allowed"
	}
	switch(operator) {
		case '+' :
			operation = nb1 + nb2
			break
		case '-' :
			operation = nb1 - nb2
			break
		case '*' :
			operation = nb1 * nb2
			break
		case '/' :
			operation = nb1 / nb2
			break
		default:
			return "Invalid operator"
	}
	return operation
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
