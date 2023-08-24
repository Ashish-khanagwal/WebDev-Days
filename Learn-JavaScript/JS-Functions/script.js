"use strict";
console.log("JavaScript Functions");

// ############# FUNCTION DECLARATION #############

// This is how we define a function. (First and the most basic way)
// The thing here is, that this function don't contain any parameter.

function myName() {
  console.log("My name is Ashish");
}

myName();
myName();
myName();
// Above is calling the declared function, call as many time as you want.

// Function with parameter
// Here, a and b are the parameters.

function addNum(a, b) {
  return a + b;
}

let sum = addNum(5, 6);
console.log(`The sum of both the number is ${sum}`); // Use of Template literal

/* In above function we've declared function with two parameters and we've already seen that functions 
can also reside without the parametere and as well as with only 1 parameter
*/

// Function with default parameter

function addNum2(a, b = 10) {
  return a + b;
}
const num3 = addNum2(20);
console.log(`The sum of both the number is ${num3}`);
/*
  Here, we've declared a function with two parameters but we've assigned a 
  default value to the second parameter.
*/

// Let's have a look on different examples of functions

function dynamicName(name) {
  return `My name is ${name}`;
}

// Using prompt feature just below for user.
/*
const look = prompt(`Enter your name : ${dynamicName()}`);
console.log(look);
*/

// Another basic way of handling functions
const hereName = dynamicName("Ashish");
console.log(hereName);

// ############# FUNCTION EXPRESSION #############

// This is another way of declaring a function, this is called function expression.

const myName2 = function () {
  console.log("My name is Ashish Khanagwal");
};

myName2();

// This time with parameters

const numMultiple = function (c, d) {
  let result = c * d;
  return result;
};

const multiNum = numMultiple(4, 5);
console.log(`The result of multiplication is ${multiNum}`);

// ############# REST PARAMETERS #############

/* 
rest parameters let you collect a bunch of values that were passed to a function 
as arguments into a single array. This makes it simpler to work with lots of arguments 
without listing them one by one
*/

/* 
The rest parameter must be the last parameter in the function's parameter list,
as it collects all remaining arguments.
*/

function pizzaSlice(first, second, ...third) {
  // third will be an Array containing all remaining elements in the argument list after first and second are used up
  console.log("First", first);
  console.log("Second", second);
  console.log("Third", third);
}

pizzaSlice("1", "2", "3", "5", "6", "7", "8");
// First 1 Second 2 Third [ '3', '5', '6', '7', '8' ]

// ############# ARROW FUNCTIONS #############

// Arrow functions, also known as fat arrow functions, are a concise way to write functions in JavaScript.
// Syntax

/*
const functionName = (parameter1, parameter2) => {
  code body
}
*/

const add = (x, y) => {
  return x + y;
};

console.log(add(5, 10));

// If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

const add2 = (x, y) => x + y;
// no curly braces and implicit return statement
let sumAgain = add2(9, 10); // returns value from expression without using assignment operator (=).
console.log(sumAgain);

// ############# NESTED FUNCTIONS #############

/*
Nested functions, also known as inner functions or functions within functions, are functions that are defined inside the scope of another function.
They have access to the variables and parameters of the outer (enclosing) function, creating a hierarchy of functions
*/

const outer = () => {
  console.log("Outer");
  const inner = () => console.log("inner");
  inner();

  /* As, inner function is nested inside the outer function then it is mandatory that we should
  call the inner function inside the outer function. */
};
outer();

const outerFunction = (x) => {
  const innerFunction = (y) => {
    return x * y;
  };
  return innerFunction(10);
};
const result2 = outerFunction(5);
console.log(result2);

// ############# "This" Keyword in REGULAR FUNCTIONS & ARROW FUNCTIONS #############

/*
In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
With arrow functions the this keyword always represents the object that defined the arrow function.
*/

/* 
1. Traditional Functions:
In regular functions, the value of this depends on how the function is called. It can change based on function invocation, binding, and context.

2. Arrow Functions:
Arrow functions, unlike regular functions, capture the value of this from their surrounding context at the time of creation. They "inherit" the value of this from the enclosing scope
*/

const person = {
  name: "Ashish",
  profession: "DevOps Enginner",
  intro: function () {
    console.log(`My name is ${this.name}`);
  },
  // jobRole: () => {
  //   console.log(`I work as an ${this.profession}`);
  // },
  // Since the global context (window object in browsers) does not have a job property, this.job is undefined.

  /*
arrow functions do not have their own this context and instead borrow it from their surrounding context. 
In most cases, this surrounding context is the global context, which can lead to unexpected behavior. 
However, when arrow functions are defined within regular functions, they inherit the this context of 
the outer function, resulting in the desired behavior.
*/
  jobRole: function () {
    const arrJob = () => {
      console.log(`I work as an ${this.profession}`);
    };
    arrJob();
  },
};

person.intro(); // My name is Ashish
// person.jobRole(); // I work as an undefined (This is an arrow function)
person.jobRole(); // arrow function inside regular function

// ############# FUNCTION SCOPE #############

/*
When you declare a variable inside a function, that variable is like an item you place in a specific room.
The variable is accessible within that room (function) and any smaller rooms inside it (nested functions).
However, you can't directly reach into another room (function) to access variables stored there. 
Each room (function) has its own space for variables, which helps keep things organized and separate.
*/

/*
Function scope helps prevent conflicts and keeps your code organized. Just like in a house, each 
room (function) can have its own "stuff" (variables) without interfering with other rooms.
*/

const greetMe = function (daytime) {
  const withName = function (myName) {
    console.log(`Hello, ${myName} ${daytime}`);
  };
  return withName("Ashish Khanagwal");
};
greetMe("Good morning");

// ############# CLOSURE #############

/*
Closures are like a magical way that functions remember things even after they're done running.
They're a powerful concept in programming that allows you to create special functions that 
"remember" their surroundings even after they're no longer active.
*/

/*
When you create a function, it has a little backpack called a closure that it carries around.
Inside the closure, the function can keep things safe, like variables, even after it's done working.
If the function is no longer needed, its closure can still be used by other functions to access those special things.
*/

const outerFunc = function (x) {
  const innerFunc = function (y) {
    return x + y;
  };
  return innerFunc;
};

const addFunc = outerFunc(7); // This is creating a funciton that adds 7

console.log(addFunc); // This will print out that innerFunc stays inside it. see below
/* OUTPUT:
ƒ (y) {
    return x + y;
  }
*/

console.log(addFunc(7)); // Output - 14

/*
In this example, outerFunc creates a special function that remembers the value of x. 
When you call outerFunc(7), it returns a function that adds x to any number you give it.
Even though outerFunc is done running, the function it returned (which we named addFunc) still remembers the value x = 7
*/

/*
Closures are like a little memory bubble that functions carry around, and they allow functions to access variables and 
values from their surrounding scope, even after that scope is no longer active.
This makes closures incredibly useful for creating flexible and reusable functions, callbacks, and much more in programming.
*/

const greetLater = function (userName) {
  setTimeout(function () {
    console.log(`Hello, ${userName}`);
  }, 1000);
};
greetLater("Ashish");

/*
In this example, the setTimeout function takes a callback function as its first argument.
Even though the greetLater function finishes quickly, the callback function inside setTimeout
remembers the name parameter and uses it after the greetLater function has finished.
So, after 1 second, the callback function says "Hello, Ashish" because it still has 
access to the name parameter through closure.
*/

// ############# CALLBACKS #############

/*
A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.
*/

const greet = function (name) {
  console.log(`Keep going, ${name}`);
};
const sayHiToMyFriend = function () {
  setTimeout(function () {
    greet("Ashish Khanagwal");
  }, 1000);
};
sayHiToMyFriend();
