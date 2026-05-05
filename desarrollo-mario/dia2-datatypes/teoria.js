// Tipos de datos
/* 
Datos primitivos: Numbers, Strings, Booleans, Null, Undefined, Symbol 

Datos no primitivos: se pueden cambiar
objetos y arreglos (arrays)

los arrays no se puedne comparar
*/

//Array
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]

//objeto
let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

/////NUMBERS

/*Math Object
In JavaScript the Math Object provides a lots of methods to work with numbers.
*/

//RANDOM
let randomNumber = Math.random() // generates 0 to 0.999...
console.log(randomNumber)

//RANDOM NUMBER BETWEEN 0 y 10
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

//RANDOM NUMBER BETWEEN 0 y 10 y lo redonde con el metodo mathfloor
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10


////////////////////

//STRINGS
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

//CONCATENACION
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

//LONG STRINGS
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)


/*
ESCAPE SEQUENCES
Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

//Template Literals (Template Strings)
 let a = 2
 let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let c = 4
let d = 5
console.log(`${c} is greater than ${d}: ${c > d}`)


//String Methods
let js = 'JavaScript'
console.log(js.length)         // 10

