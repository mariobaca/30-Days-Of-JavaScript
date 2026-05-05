//length
let string = 'JavaScript'
console.log(string.length)

//acceder al string
let string2  = 'JavaScript'
let primeraLetra = string2[0]
console.log(primeraLetra)

let segundaLetra = string2[1]
console.log(segundaLetra)

//upperCase
console.log(string2.toUpperCase())

//lowerCase
console.log(string2.toLowerCase())

//substr()
console.log(string2.substr(4,6))

//substring()
console.log(string2.substring(4,6))

//split()
let script3 = "30 Days Of JavaScript"
console.log(script3.split()) // lo convierte en un string
console.log(script3.split('')) // lo separa por caracteres

let script4 = "30, Days, Of, JavaScript"
console.log(script4.split(',')) // lo separa por la coma en este caso

//Includes() -  Case sensitive
let script5 = "30 Days Of JavaScript"
console.log(script5.includes('Days')) //True

//Replace()
let script6 = "30 Days Of JavaScript"
console.log(script6.replace('30', '60')) //60 Days Of mJavaScript

//indexOf()
let string7 = '30 Days Of JavaScript'
console.log(string7.indexOf('D')) // 3
console.log(string7.indexOf('Days')) // 3


let string8 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string8.search('love'))          // 2
console.log(string8.search(/javascript/gi))  // 7

//match
let string9 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
console.log(string9.match('love'))

let pattern = /love/gi
console.log(string9.match(pattern))   // ["love", "love", "love"]



//TYPE OF
let firstName1 = 'Asabeneh'      // string
let lastName1 = 'Yetayeh'        // string
let country1 = 'Finland'         // string
let city1 = 'Helsinki'           // string
let age1 = 250                   // number, it is not my real age, do not worry about it
let job1                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName1)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

//CONVERT DATA TYPE TO OTHER DATATYPE

//string number  to number
let num = '10'
let numInt1 = parseInt(num)
console.log(numInt1) // 10

let numInt2 = Number(num)
console.log(numInt2) // 10

let numInt3 = +num
console.log(numInt3) // 10

//string float number to float number
let num2 = '9.81'
let num2Int1 = parseFloat(num2)
console.log(num2Int1) // 9.81

let num2Int2 = Number(num2)
console.log(num2Int2) // 9.81

let num2Int3 = +num2
console.log(num2Int3) // 9.81


//float number to integers
let num3 = 9.81
let numInt33 = parseInt(num3)

console.log(numInt33) // 9