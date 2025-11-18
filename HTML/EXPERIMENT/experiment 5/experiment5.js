
// Task 1: Welcome Message App

function welcomeUser() {
  let userName = prompt("What is your name?");
  let favColor = prompt("What is your favorite color?");

  alert("Welcome, " + userName + "!");

  document.write(
    `<h2 style="color:${favColor};">Hello ${userName}! Glad to have you here.</h2>`
  );
}



// Task 2: Eligibility Checker

function checkEligibility() {
  let age = prompt("Enter your age:");

  if (age > 60) {
    alert("You are a senior citizen voter.");
    document.write("<p>You are a senior citizen voter.</p>");

  } else if (age >= 18) {
    alert("You are eligible to vote!");
    document.write("<p>You are eligible to vote!</p>");

  } else {
    alert("You are not eligible yet.");
    document.write("<p>You are not eligible yet. Come back when you are 18!</p>");
  }

  let message = (age >= 18) ? 
                "Ternary: You are eligible to vote." : 
                "Ternary: You are not eligible yet.";

  console.log(message);
}



// Task 3: Array Method Practice

function arrayPractice() {
  let numbers = [10, 25, 30, 45, 50];

  let doubled = numbers.map(num => num * 2);
  console.log("Doubled:", doubled);

  let above30 = numbers.filter(num => num > 30);
  console.log("Numbers above 30:", above30);

  let sum = numbers.reduce((total, num) => total + num, 0);
  console.log("Sum:", sum);

  numbers.forEach(num => console.log("Number:", num));
}
