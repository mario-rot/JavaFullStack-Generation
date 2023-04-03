let arr = ["This", "is", "a", "sentence."];

// Solution 1
function printOutString(array) {
	console.log(array.join(" "))
}
printOutString(arr);

// Solution 2
function printOutString2(array) {
	let finalString = ""
	for(let i = 0; i < array.length; i++){
		finalString += array[i] + " "
	}
	console.log(finalString.slice(0,-1))
}
printOutString2(arr);
