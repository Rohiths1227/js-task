//  Grade calculation
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//  Time of day
let hour = 14;

if (hour < 12) {
  console.log("Morning");
} else if (hour < 17) {
  console.log("Afternoon");
} else if (hour < 20) {
  console.log("Evening");
} else {
  console.log("Night");
}

//  Check zero, pos, neg
let num1 = 0;

if (num1 > 0) {
  console.log("Positive");
} else if (num1 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//  Score result
let score = 80;

if (score >= 100) {
  console.log("Winner");
} else if (score >= 50) {
  console.log("Good");
} else {
  console.log("Try again");
}

//  Largest among 3 numbers
let a = 10, b = 25, c = 15;

if (a > b && a > c) {
  console.log("A is largest");
} else if (b > a && b > c) {
  console.log("B is largest");
} else {
  console.log("C is largest");
}