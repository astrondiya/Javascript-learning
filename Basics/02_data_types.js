"use strict"; // treat all JS code as newer version

//alert(3+3) // we are using node.js, not browser

//string
let name = "hitesh"

// number -> 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value [type is object]
// undefined => not assigned any value
// symbol => unique

// object
console.log(typeof undefined); // undefined
console.log(typeof null); // object


// Two categorisation based on how the data is stored in memory and how it is accesssed
// primitive and non-primitive data types

// Loosely-typed language


// 7P : String, Number, Boolean, null, undefined, Symbol, Bigint


// Reference (non-primitive) : Array, Objects, Functions
//1
const fruits = ["apple", "mango", "pineapple"];

//2
let myObj = {
    name: "Diya",
    age: 22,
}

//3 
const myFunction = function(){
    console.log("Hello, world!");
}