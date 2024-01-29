let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber); //NaN - not a number
// 33 => 33
// "33abc" => NaN
// TRUE => 1; FALSE => 0

let isLoggedIn = "true"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// null => 0
// "diya" => true


// ***************** Operations ***************
let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2)

let str1 = "Hello"
let str2 = "Diya"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log(1 + 1 + "2");  //22
console.log("1" + "1" +2); //112

// prefix and postfix operator