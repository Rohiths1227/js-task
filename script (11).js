// Task 1

let name1 = "Rohith";
let age = 26;
let city = "Coimatore";

console.log("My name is ", name1, ".");
console.log("I am ", age, " years old.");
console.log("I am from ", city, ".");

// Task 2

let username = prompt("Enter your Name");
alert("Welcome");
let learnjS = confirm("Do you want to learn java script");
if (learnjS) {
    alert("Good Choice!")
}
else {
    alert("No problem!")
}

// Task 3

let Stn = "hello";
let num = 100;
let boolean = true;
let und;
let nullvalue = null;

console.log("Value: ", Stn, " | Type: ", typeof (Stn));
console.log("Value: ", num, " | Type: ", typeof num);
console.log("Value: ", boolean, " | Type: ", typeof boolean);
console.log("Value: ", und, " | Type: ", typeof und);
console.log("Value: ", nullvalue, " | Type: ", typeof nullvalue);

// Task 4

let colors = ["blue", "yellow", "red", "green", "pink", "white"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);

// Task 5

let subjects = ["English", "Maths", "Science", "Tamil", "Computer"];
let userIndex = prompt("Enter index number (0 to 4):");

console.log("Subject: " + subjects[userIndex]);

//Task 6

let student = {
    name: "Rohith",
    age: 26,
    course: "Full Stack Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Java"]
};

console.log("Student Name:", student.name);
console.log("Second Skill:", student.skills[1]);
console.log("Course Name:", student.course);

//Task 7

let product = {
    name: "Laptop",
    price: 45000,
    category: "Electronics",
    inStock: true
};

console.log("Product Name:", product.name);
console.log("Price:", product.price);

if (product.inStock) {
    console.log("Available: Yes");
} else {
    console.log("Out of Stock");
}

// Task 8

let fruits = {
    tropical: ["mango", "pineapple"],
    berries: ["strawberry", "blueberry"],
    citrus: ["orange", "lemon"]
};

console.log(fruits.berries[1]);
console.log(fruits.tropical[0]);
console.log(fruits.citrus[1]);
console.log("Total Categories:", Object.keys(fruits).length);