// Los bolenos representan un valor true or false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

//operadores de asignacion: para asignar un valor a una variable
// =, +=, -=, *=, /=, %=, **=

//operadores aritmeticos
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

//String interpolation ${variable}
const gravity = 9.81      // in m/s2
const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC

console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

//Operadores ternarios: otra forma de escribir condiciones
let isRaining = true
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')

isRaining = false
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')


//DATE (FECHA)

//time object
const now = new Date()
console.log(now)
console.log(now.getFullYear()) // 2026
console.log(now.getMonth()) // 4 (mayo) Enero seria 0
console.log(now.getDate()) // 6 de mayo
console.log(now.getDay()) // 3 (Miercoles) Domingo es 0
console.log(now.getHours()) // 16 porque son las 4:57
console.log(now.getMinutes()) // 57 porque son las 4:57
console.log(now.getSeconds()) // 44 segundos

//getting time
console.log(now.getTime()) // UNIX time. Segundos que han pasado desde el primero de enero de 1970 hasta hoy

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true


//FORMATO LEGILBE PARA LOS HUMANOS
const ahora = new Date();
const year = now.getFullYear(); // return años
const month = now.getMonth() + 1; // return meses(0 - 11)
const date = now.getDate(); // return días (1 - 31)
const hours = now.getHours(); // return horas (0 - 23)
const minutes = now.getMinutes(); // return minutos (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56