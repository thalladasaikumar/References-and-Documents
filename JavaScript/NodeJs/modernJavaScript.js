// var keyword behaves different in function scope and block scope.
function hello(name) {
  // this is a function scope
  var greeting = "Hello";
  return greeting + " " + name;
}
console.log(hello("Node")); // Hello Node
console.log(greeting); // ReferenceError
// A variable defined in a function scope can't be accessed outside the function.

{
  // this is a block scope
  var scopeVariable = "42";
  let scopelet = "45";
  const scopeConst = "37";
  scopeConst = "39"; // TypeError Asignment to constant varaibale is not allowed
  {
    // this is a nested block scope
    var nestedScopeVariable = "37";
  }
}
console.log(scopeVariable); // 42
console.log(nestedScopeVariable); // 37
// A variable defined in a block scope is availabe out side of that block scope.
console.log(scopelet); // ReferenceError
console.log(scopeConst); // ReferenceError

if (true) {
  var letter1 = "A";
  var letter2 = "B";
}
console.log(letter1); // A
console.log(letter2); // ReferenceError

for (var i = 0; i < 10; i++) {
  //set of statements
}
console.log(i); // 10

for (let j = 0; j < 10; j++) {
  //set of statements
}
console.log(j); // ReferenceError

// ---------------------------------------------------------------------
exports.i = "am exports";
console.log(this); // {i: 'am exports'}

let util = {
  f1: function () {
    // regular scope
    console.log(this);
  },
  f2: () => {
    // f2 is arrow scope
    console.log(this);
  },
};

util.f1(); // {f1: [Function: f1], f2:[Function: f2] } | This keyword in f1 will be the caller, which is the util object.
util.f2(); // {i: 'am exports' } | This keyword in f2 will be the parent scope, which is the exports object.

// ----------------------- Destructuring ---------------------------------
const Component = require("react").Component; // Old way
const { Component } = require("react"); // modern Javascript

// ----------------------- Rest parameters -------------------------------
// '...' is called spread operator
const toDecimal = ({ base, ...numbers }) => {
  console.log(numbers);
  return numbers.map((number) => parseInt(number, base));
};
console.log(toDecimal(2, 101, 111, 1010)); // [5, 7, 10]
