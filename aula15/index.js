let num1 = 10 // number
let num2 = 2.5 // number

num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0
num1 += num2 // 1.1
num1 += num2 // 1.2
num1 += num2 // 1.3
num1 += num2 // 1.4
num1 += num2 // 1.5

num1 = parseFloat(num1.toFixed(2))
console.log(num1)
console.log(Number.isInteger(num1))

//console.log(num1.toString() + num2)
// num1 = num1.toString()
// console.log(typeof num1)
//console.log(num1.toFixed(2))
//console.log(Number.isInteger(num1))

//obs: Não fazer conta com string
