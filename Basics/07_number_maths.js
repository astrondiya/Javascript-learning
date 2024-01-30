const score = 400
console.log(score);

// object
const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2)); // precison value applicable for ecommerce applications
console.log(balance.toString().length);

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




// *************** Maths ********************

console.log(Math);   // object
console.log(Math.abs(-9));
console.log(Math.round(9.64));
console.log(Math.ceil(9.64));   // highest value int
console.log(Math.floor(9.64));  // lowest value int

console.log(Math.random()); // 0 - 1


// when we want value between 10 and 20
const min = 10
const max = 20

// + 1 becoz in right shift it might produce 0 sometimes so to avoid it
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
