//Exercise: Level 1
//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

//2 Print the string on the browser console using console.log()
console.log(challenge)

//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,2))
console.log(challenge.substring(0,2))

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(0,3))

//8.Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))

//9. Split the string into an array using split() method
console.log(challenge.split())

//10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(social.split(','))

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'))

//13.