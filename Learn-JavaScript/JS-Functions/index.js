"use strict";
console.log("JavaScript Functions Second part");

// ############# CALLBACKS #############

/*
A callback function is a function that is passed to another function as an argument 
and is executed after some operation has been completed.
*/

// ############# BASIC CALLBACK FUNCTION EXAMPLE #############

// EXAMPLE-1
const greet = function (name) {
  console.log(`Keep going, ${name}`);
};
const sayHiToMyFriend = function () {
  setTimeout(function () {
    greet("Ashish Khanagwal");
  }, 0);
};
sayHiToMyFriend();

// EXAMPLE-2
const bakeCookies = function (callback) {
  console.log("Baking cookies...");
  setTimeout(() => {
    console.log("Cookies are done baking");
    callback();
  }, 2000);
};

const iceBaking = () => {
  console.log("Icing cookies...");
};
bakeCookies(iceBaking);

// EXAMPLE-3
/*
Problem Statement: Fetch and Process Data

Imagine you're building a weather app. You need to fetch weather data from a server and then 
process that data to display it on your app. To do this, you can use callback functions.
*/

function fetchWeatherData(callback) {
  console.log("Fetching the weateher data from the server...");
  setTimeout(function () {
    const weatherData = {
      temperature: 25,
      status: "Sunny",
    };
    console.log("Weather data recieved");
    callback(weatherData);
  }, 3000);
}

function displayWeather(weather) {
  console.log(
    `The weather is ${weather.status} with a temperature of ${weather.temperature} degrees Celsius`
  );
}

fetchWeatherData(displayWeather);

// ############# INTERMEDIATE CALLBACK FUNCTION EXAMPLE #############

// EXAMPLE-1
/*
Imagine you're reading a book, and you want to do something after each chapter is finished.
You could use a callback to trigger that action at the end of each chapter.
*/

function readBookChapters(chapter, callback) {}
