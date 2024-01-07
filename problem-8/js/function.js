//Use the length property to find the length of a given string.

let string = "Apple is sweet"
let result = string.length;
 console.log("The legth of string is:" + result);

 //Concatenate two strings using the + operator.
let str1 = "Apple"
let str2 = "Tree"
let Concatenate = str1 + str2
console.log(Concatenate);

//Extract a substring from a given string using the substring method.

let sub = "Hello world"; 
let substring = sub.substring(5,3);

console.log(substring);

//Slice:Use the slice method to extract a portion of a string.

let sily = "Marhaban bi kum";
let sliceResult = sily.slice(-6);

console.log(sliceResult);

////IndexOf:Find the index of a specific character
let inx = "Kifal Hal Ya Rafeeqi"

let finalindex = inx.indexOf("H");

console.log(finalindex);

//IndexOf: substring index of using the indexOf method.
 
let orgstr = "Hello World";

let substr = "World";

let orginalResult = orgstr.indexOf(substr);

if(orginalResult != -1) {
  let finalResult = orgstr.slice(orginalResult, orginalResult + substr.length)
   console.log("String mil gya hai:" + finalResult)
} else {
    console.log("string nahi mila");
}

//LastIndexOf:Find the last index of a specific character or substring using the lastIndexOf method.

let character = "Hello Ya Pakistan"
let index = character.lastIndexOf("n");
console.log(index);
//sol : 2

let str = "Hello World: This is an example";
let stringo = "an";

let resultng = str.lastIndexOf(stringo);

console.log("The result of:" + stringo + resultng + str); 
//CharAt:Use the charAt method to retrieve the character at a specific index.

let stringing = "Hey this is an index";

let stri = 17;
let resu = stringing.charAt(stri);
console.log("This is char result:" + resu);
//Replace a specific substring within a string using the replace method.

let stro = "This is example of Replace";

let strio = "This system is hack";
let resto = "This is not hack";
let restlo = stro.replace(resto);
console.log("This is change:" + restlo);
//String Template Literals:Practice using template literals for string interpolation.

let name = "World";
let greeting = `Hello, ${name}!`;
console.log(greeting);

let a = 100;
let b = 300;
console.log(`This is the sum of ${a} and ${b} is ${a + b}`);
//String Conversion:Convert numbers to strings and vice versa using toString() and parseInt() or parseFloat().

let stringon = 23;
let resstr = stringon.toString();
console.log(resstr);

let pres = "10101010";
let respres = parseInt(pres, 3);
console.log(respres);

let floatstr = "3.14";

let resfloat = parseFloat(floatstr);
console.log(resfloat);

//String Comparison:Compare two strings using the comparison operators (== and ===).

let compare1 = "hello 32";
let compare2 = "hello 32";
if(compare1 === compare2) {
  console.log("both string are equal");
} else {
  console.log("Both are not equal");
}

//String Methods Chaining:Chain multiple string methods together to perform a complex operation on a string.

let orginalstr = "Hello My beloved Pakistan";
let resulting = orginalstr
.trim()                  // Trim whitespace from the beginning and end
.toLowerCase()           // Convert the string to lowercase
.replace(",", "")        // Remove commas
.substring(0, 5)         // Extract the first 5 characters
.split(" ")              // Split the string into an array of words
.map(word => word + "!")  // Add an exclamation mark to each word
.join(" ");              // Join the words back into a string

console.log(resulting);

//Escaping Characters:Use escape characters in strings to include special characters.

let strn1 = "Hello, \n World!";
console.log(strn1);

let strn2 = "Hello, \tWorld";
console.log(strn2);

let strn3 = 'Hello, \'Lahore!\'';
console.log(strn3);

let strn4 = "Hello, \"Hi!\"";
console.log(strn4);

let strn5 = "Hello, \\"
console.log(strn5);

//Palindrome Check:Write a function to check if a given string is a palindrome (reads the same backward as forward).

function palindrome(str) {
  let palinstr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedstr = palinstr.split('').reverse().join('');
  
  return palinstr === reversedstr;
}

let testingStr = "Level";
  console.log(palindrome(testingStr));

  let testingStr2 = "Hello World";

  console.log(palindrome(testingStr2));

 
// Store a data in localStorage

localStorage.setItem(`username`, 'Abdullah');
localStorage.setItem('age', '25');
localStorage.setItem('Profession', 'Software Engineer');
localStorage.removeItem('Profession');

const storedUser = localStorage.getItem('username');
const storeAge = parseInt(localStorage.getItem('age'), 10);
const storedProfession = localStorage.getItem('Profession');


console.log("Username:", storedUser);
console.log("Age:", storeAge);
console.log("Profession", storedProfession);








  












  