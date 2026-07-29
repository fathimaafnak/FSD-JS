// JavaScript executes code in two phases.

// 1. Creation Phase (Memory Phase)
// - Scans the entire code.
// - Creates memory for variables and functions.
// - 'var' is initialized as undefined.
// - Function declarations are stored completely.
// - 'let' and 'const' are hoisted but not initialized (TDZ).

// 2. Execution Phase (Code Phase)
// - Executes the code line by line.
// - Assigns values to variables.
// - Calls and executes functions.


// Function:
// A reusable block of code that performs a specific task.
// It runs only when it is called.

// function → JavaScript-നോട് "ഒരു function ഉണ്ടാക്കുന്നു" എന്ന് പറയുന്ന keyword.
// greet → Function-ന്റെ പേര്.
// { } → ചെയ്യേണ്ട ജോലി.
// greet(); → Function run ചെയ്യാൻ (call ചെയ്യാൻ).

// Function Naming Rules
// 1. The name should be meaningful.
// 2. Start with a lowercase letter.
// 3. Use camelCase for multiple words.
// 4. Do not use spaces.
// 5. Do not start with a number.
// 6. Do not use JavaScript keywords.


// function declaration
// function greet() {
//     // logic
//     console.log("Hello !!!!");
// }
// greet();
// greet();
// greet();
// greet();


// // fn parameter -> name

// function greet(name) {
//     // logic
//     console.log("Hello", name);
// }
// output = hello afna



// // fn argument -> afna

// greet("afna");
// greet("lafna");
// output = hello afna
//          hello lafna



// function greet(fname, lname) {
//     console.log("Hello", fname + " " + lname);
// }

// greet("afna", "fathima");
// greet("lafna", "fathima");
// output = hello afna fathima
//          hello lafna fathima




// function add(a,b) {
//     return a + b;
// }
// const result = add(10, 20);
// console.log("Result =", result);
// output = result = 30

// return:
// Returns a value.
// Ends the function.
// Code after return will not execute.

// function add(a,b) {
//     a += 10;   // a = a + 10 , 10 + 10
//     b += 20;   // b = b + 20 , 20 + 20
//     return a + b;  // 20 + 40
// }
// const result = add(10, 20);
// console.log("Result =", result);
// output = result = 60



// function expression
// Function Expression എന്നത് ഒരു function-നെ ഒരു variable-ൽ store ചെയ്യുന്നതാണ്.

// const greetings = function () {
//     // logic
//     console.log("Hello!");
// };
// greetings();




// Arrow function
// Arrow Function എന്നത് Function Expression-ന്റെ ഒരു short syntax ആണ്.

// const greetings = () => {
//     // logic
//     console.log("Hello!");
// };
// greetings();

//  arrow function with parameter and return, short version
// const add = (a, b) => a + b;
// const res = add(10, 20);
// console.log("Result =", res);


//const greet = name => name;


// const add = (a, b) => {
//     a += 10;
//     b += 20;
//     return a +  b;
// };
// const res = add(10, 20);
// console.log("Result =", res);




// EXAMPLE

// const gradCheck = score => {
//     if (score >= 90) return "A+";
//     if (score >= 80) return "A";
//     if (score >= 70) return "B+";
//     if (score >= 60) return "B";
//     if (score >= 50) return "C+";
//     if (score >= 40) return "C";
//     return "E";
// }

// const grade = gradCheck(85);
// console.log("Your grade is : ", grade);
//output = Your grade is : A



// const gradeCheck = score => {
//     if (score >= 90) console.log("A+");
//     if (score >= 80) console.log("A");
//     if (score >= 70) console.log("B+");
// };

// gradeCheck(85);
//output = A
//         B+

// കാരണം:

// 85 >= 90 ❌ False
// 85 >= 80 ✅ True → "A" print ചെയ്യും.
// 85 >= 70 ✅ True → "B+" print ചെയ്യും.
// Function അവസാനിച്ചിട്ടില്ല, അതിനാൽ അടുത്ത if-കളും പരിശോധിക്കും.

// console.log() → Value print ചെയ്യും, പക്ഷേ function തുടരും.
// return → Value തിരികെ നൽകും കൂടാതെ function ഉടനെ അവസാനിപ്പിക്കും.