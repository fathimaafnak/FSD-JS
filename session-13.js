// console.log ("Hello");

// let name = "John";
// console.log("name =", name);
// console.log(typeof name);

// let age = 35;
// console.log(typeof age);

// let age = "35";
// console.log(typeof age);



// type conversion
// let age = Number("35");

// let city; //undefined

// let city = null;

// console.log(typeof age);

// console.log(Number("abc"));
// console.log(Number(""));
// console.log(Number("true"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(typeof undefined); //undefined

// console.log(typeof String(22));
// console.log(String(true));

// console.log(typeof String(true)); //"true" => string
// console.log(String(undefined)); //undefined => "undefined" => string
// console.log(String(null)); //null => "null" => string

// console.log(Boolean(1)); //true
// console.log(Boolean(-1)); //true
// console.log(Boolean(0.1)); //true
// console.log(Boolean(" ")); //true
// console.log(Boolean("0")); //true
// console.log(Boolean("false")); //true
// console.log(Boolean("true")); //true
// console.log(typeof Boolean("true")); //true, boolean
// console.log(typeof Boolean("11")); //true, boolean

// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(0)); //false
// console.log(Boolean("")); //false
// console.log(Boolean(NaN)); //false

// console.log(10+2); //12



// type coercion, auto

// console.log("10"+ 2); //102, string 
// console.log(10 +"2"); //102, string 
// console.log("10" +2+3); //1023, string
// console.log(10 + 2 + "3"); //123, string
// console.log(10 + "2" + 3); //1023, string

// console.log("10" - 2); //8, number
// console.log(10 - "2"); //8, number
// console.log("10" - "2"); //8, number

// console.log("5" * 2); //10, number
// console.log("5" * "2"); //10, number

// console.log("15" / 5); //3, number
// console.log("15" / "5"); //3, number



// Arithmetic operators =>   +, -, *, /, %, **

// console.log(10 + 10); //20
// console.log(10 - 5); //5
// console.log(10 * 5); //50
// console.log(10 / 5); //2
// console.log(10 % 2); //0
// console.log(2 ** 3); //8
// console.log(10 ** 3); //1000



// comparison operators=>    ==, ===, !=, !==, >, <, >=, <=

// console.log(10 == "10"); //true
// console.log(10 === "10"); //false
// console.log(10 === 10); //true
// console.log(10 != 10); //false
// console.log(10 !== "10"); //true
// console.log(10 > 5); //true
// console.log(10 < 5); //false
// console.log(10 > 10); //false
// console.log(10 >= 10); //true
// console.log(10 >= 5); //true
// console.log(10 <= 5); //false



//Assignment operators =>    =, +=, -=, *=, /=, %=, **=

// let score = 90;
// score += 10; //score = score + 10
// console.log(score); //100

// score -= 10; //score = score - 10
// console.log(score); //80




// logical operators =>   &&, ||, !

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// console.log(10>2 && 5<2); //false

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false
// console.log(true || false || true); //true

// console.log(10>2 || 5<2); //true

// console.log(!true); //false
// console.log(!false); //true



// conditional statements => if, if-else, if-else-if, switch-case

// let score = 56;

// if (score >= 40) {
//     console.log("You have passed the exam.");
// }
//     console.log("All the best");


// if (score >= 40) {
//     console.log("You have passed the exam.");
// } else {
//     console.log("You have failed the exam.");
// }
// console.log("All the best");

// let score = 30;
// if (score >= 40) {
//     console.log("You have passed the exam.");
// } else {
//     console.log("You have failed the exam.");
// }
// console.log("All the best");

// if (score >= 90) {
//     console.log("A");
// } else if (score >= 80) {
//     console.log("B");
// } else if (score >= 70) {
//     console.log("C");
// } else if (score >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }
// console.log("All the best");


// let day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("It's Monday!");
//         break;
//     case "Tuesday":
//         console.log("It's Tuesday!");
//         break;
//     case "Wednesday":
//         console.log("It's Wednesday!");
//         break;
//     case "Thursday":
//         console.log("It's Thursday!");
//         break;
//     case "Friday":
//         console.log("It's Friday!");
//         break;
//     default:
//         console.log("It's not a weekday!");
// }