console.log(2>1);
console.log(2>=1);
console.log(1==1);

// compare only same datatypes

/* Avoid this syntax */
//Equality check and comparisons work differently; comparisons converts null to 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// === (strict checking i.e. apart from value it also compares the data type)
console.log("2"===2); 