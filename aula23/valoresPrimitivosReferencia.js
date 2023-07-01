/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (biginit, symbol) 

Referência (Mutável) - array, object, function
*/

// let nome = 'Paulo'
// nome = 'Trindade'

// console.log(nome)

// let a = 'a';
// let b = a; // Aqui é feito uma cópia da váriavel A

// console.log(a, b);

let a = [1, 2, 3]
let b = a

console.log(a, b)

a.push(4)

console.log(a, b)
