const name = "Diya"
const moreName = "Karmakar"

// console.log(name + moreName + "Value") => avoid this

console.log('Hello my first name is ${name} and my last name is ${moreName}');

// Declaration 2
const gameName = new String('Banana') // will be defined as obj so in form of {key : value} pair

// Method 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,1)
const anotherString = gameName.slice(-5,-1)
console.log(anotherString);

const newStringOne = "   Lowe's   "
console.log(newStringOne.trim());


const url = "https://www.diya%20karmakar.com"
console.log(url.replace('%20','-'));

console.log(url.includes('Diya')); 

console.log(url.split('a')); 



