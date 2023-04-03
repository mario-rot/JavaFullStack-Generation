const arr = [1,2,4,5]

// Solution 1
function doubleNumbersInArray(array){
	for(let i = 0; i < array.length; i++){
		array[i] = array[i] * 2
	}
	console.log(array)
}

doubleNumbersInArray(arr.slice())

// Solution 2
function doubleNumbersInArray2(array){
	console.log(array.map(a => a*2))
}

doubleNumbersInArray2(arr)
