//Exercise: Level 2

//1. Using console.log() print out the following statement:
let frase = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log(frase)

//2. Using console.log() print out the following quote by Mother Teresa:
let frase1 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(frase1)

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === typeof 10) //false
console.log(typeof Number('10') === typeof 10) //true
console.log(typeof +'10' === typeof 10) //true
console.log(typeof parseInt('10') === typeof 10) //true

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let pi = '9.8'
console.log(pi === typeof 10) //false

let piTen = Math.round(pi)
console.log(piTen)

let piTenNum = Number(piTen)
console.log(typeof piTenNum === typeof 10) //true

//5. Check if 'on' is found in both python and jargon
let python = 'python'
let jargon = 'jargon'
console.log(python.includes('on')) //true
console.log(jargon.includes('on')) //true

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon"
console.log(sentence.includes('jargon')) //true

//7. Generate a random number between 0 and 100 inclusively.
const num = Math.floor(Math.random() * 101)
console.log(num)

//8. Generate a random number between 50 and 100 inclusively.
const randomNumber = Math.floor(Math.floor(Math.random() * 51) + 50)
console.log(randomNumber)

//9. Generate a random number between 0 and 255 inclusively.
const ranNum = Math.floor(Math.random() * 256)
console.log(ranNum)

//10. Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * (js.length));
console.log(js[randomIndex]);

//11. Use console.log() and escape characters to print the following pattern.
/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let frase2 = 'You cannot end a sentence with because because because is a conjunction'
let because = frase2.slice(31,54)
console.log(because)

