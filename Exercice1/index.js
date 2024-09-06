function pairNumbers(min, max) {
	let stringPairNumbers = ""
	min = parseInt(min)
	max = parseInt(max)
	for(let i=min; i<=max; i++) {
		if(i%2===0) {
			stringPairNumbers += i
			if(i !== max && i !==max-1) {
				stringPairNumbers += ","
			}
		}
	}
	return stringPairNumbers
}
export default pairNumbers
