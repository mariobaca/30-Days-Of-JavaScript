//Exercise: Level 3

//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
let loveCount = sentence.match(pattern).length;
console.log(loveCount)


//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let quote = 'You cannot end a sentence with because because because is a conjunction'
let patron = /because/gi
let patronCount = quote.match(patron).length;
console.log(patronCount)

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let porcentaje = /%/gi
let pesos = /\$/gi
let arroba = /@/gi
let iii = /&/gi
let coma = /;/gi
let numeral = /#/gi
let admiracion = /\!/gi
let pregunta = /\?/gi

let newSentence = sentence1.replace(porcentaje, '').replace(pesos, '').replace(arroba, '').replace(iii, '').replace(numeral, '').replace(numeral, '').replace(admiracion, '').replace(pregunta, '').replace(coma, '')
console.log(newSentence)

//4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'