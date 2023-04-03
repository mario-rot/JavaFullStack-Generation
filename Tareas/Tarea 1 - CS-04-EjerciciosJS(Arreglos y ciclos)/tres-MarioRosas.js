const arr = [1,2,3,4]

// solution 1
let arraySum = 0
let arrayProduct = 1

for(let i = 0; i < arr.length; i++){
	arraySum += arr[i]
	arrayProduct *= arr[i]
}

console.log(`The sum is: ${arraySum}. The product is: ${arrayProduct}`)

// solution 2 
let aSum = 0
let aProd = 1
arr.forEach(each => aSum += each)
arr.forEach(each => aProd *= each)

console.log(`The sum is: ${aSum}. The product is: ${aProd}`)

// solution 3
let arSum = arr.reduce((total, currentValue) => total + currentValue, 0)
let arProd = arr.reduce((total, currentValue) => total * currentValue, 1)

console.log(`The sum is: ${arSum}. The product is: ${arProd}`)
