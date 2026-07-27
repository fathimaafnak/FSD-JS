// variable

// var
// let
// const

// var data = 10;
// let data1 = "afna"
// const data2 = true
// console.log(data);
// console.log(data1);
// console.log(data2);



// JavaScript is:

// 1. Synchronous
// Executes code line by line. Code ഓരോ വരിയായി ക്രമത്തിൽ execute ചെയ്യും.

// 2. Single-threaded
// Executes one task at a time. ഒരേ സമയം ഒരു task മാത്രം execute ചെയ്യും.

// 3. Loosely Typed (Dynamically Typed)
// Variable declare ചെയ്യുമ്പോൾ type പറയേണ്ടതില്ല. പിന്നീട് വേറെ type-ലേക്ക് value മാറ്റാനും കഴിയും.
// The data type of a variable can change at runtime.
// Example:
// let a = 10;
// a = "Afna";
// a = true;



// Data Types

// Primitive: Number, String, Boolean, Undefined, Null
// Non-Primitive: Object, Array

// Number
// let a = 1;
// console.log(typeof a); // number

// Boolean
// let b = true;
// console.log(typeof b); // boolean

// Undefined
// let name;
// console.log(name, typeof name);
// let c = 2 + 3;
// name = c * 5;
// console.log(name, typeof name);
// console.log(typeof c); // undefined

// Null
// let d = null;
// console.log(typeof d); // object

// Object
// let e = {
//     name: "afna",
//     age: 20,
//     class: "FSD"
//  }
// console.log("my name is " + e.name + " and my age is " + e.age + " and I am in class " + e.class);
// console.log(typeof e); // object

// Array
// let f = [1,2,3, true, "afna", {name: "afna", age: 20}];
// console.log(f);
// console.log(typeof f); // object

// String
// let g = "Hello, World!";
// console.log(typeof g); // string



// Javascript is synchronous , but it can be asynchronous too. 
// synchronous and asynchronous
// synchronous: code is executed line by line, in order - blocking
// asynchronous: code is executed concurrently, without waiting for each other - non-blocking



// declaration and initialization

// var a = "afna";
// console.log(a); //afna
// a = "10";
// console.log(a); //10

// var a = "afna"
// console.log(a)
// var a = 10
// console.log(a)

// var = redeclaration and reassigning are possible
// a = 10 → Reassignment (പുതിയ value മാത്രം കൊടുക്കുന്നു)
// var a = 10 → Redeclaration + Reassignment (var ഉപയോഗിച്ച് വീണ്ടും declare ചെയ്യുകയും value കൊടുക്കുകയും ചെയ്യുന്നു)


// let a = "afna"
// console.log(a)
// a = 10
// console.log(a)
// let = reassigning is possible, redeclaration is not possible

// const a = 10;
// console.log(a)
// a = 20;
// console.log(a)
// const = reassigning is not possible , redeclaration is not possible
// Declaration ചെയ്യുമ്പോൾ തന്നെ value കൊടുക്കണം.
// പിന്നീട് value മാറ്റാൻ (reassign) പാടില്ല.
// വീണ്ടും declare ചെയ്യാനും പാടില്ല.

// Keyword	Reassign	Redeclare
// var	    ✅ Yes	       ✅ Yes
// let	    ✅ Yes	       ❌ No
// const    ❌ No	       ❌ No

// Declaration -> Creating a variable.
// Initialization -> Giving a value while declaring.
// Reassignment -> Changing the value of an existing variable.
// Redeclaration -> Declaring the same variable again.

// let a;        // Declaration
// a = 10;       // Initialization (after declaration)
// a = 20;       // Reassignment

// var b = 10;   // Declaration + Initialization
// var b = 30;   // Redeclaration + Reassignment




// Primitive Data Types

// Primitive Data Types are copied by value.
// Changing one variable does not affect the other variable.

// var a = 10;
// var b = a;
// console.log(a, b);     // 10 10
// a = 20;
// console.log(a, b);     // 20 10

// var a = "entri";
// var b = a;
// a = "afna";
// console.log(a, b);   // afna entri

// var a = true;
// var b = a;
// a = false;
// console.log(a, b);   // false true

// Primitive = Value Type
// Examples: Number, String, Boolean



// Non-Primitive Data Types (Reference Type)

// Non-Primitive Data Types are copied by reference.
// Both variables point to the same object.
// Changing one object also changes the other object.

// var a = { name: "entri" };
// var b = a;

// a.name = "afna";

// console.log(a, b); // { name: "afna" } { name: "afna" }


// var data = { place: "Malappuram" };
// var newData = data;

// data.place = "Calicut";

// console.log(data, newData);  // { place: "Calicut" } { place: "Calicut" }

// Non-Primitive = Reference Type
// Examples: Object, Array