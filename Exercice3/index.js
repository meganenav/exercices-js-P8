// Créez votre fonction ici
function calculateAverage(arrayNumbers) {
	if(!arrayNumbers || arrayNumbers.length === 0) {
		return "No numbers to calculate average"
	}
	let total = 0
	arrayNumbers.forEach(number => {
		number = parseInt(number)
		total = total + number
	})
	return total / arrayNumbers.length
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
