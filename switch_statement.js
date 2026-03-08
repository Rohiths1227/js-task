//  Day name
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

//  Traffic light
let trafficLight = "Green";

switch (trafficLight) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Ready");
    break;
  case "Green":
    console.log("Go");
    break;
}

//  Month season
let month = 12;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Summer");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Rainy");
    break;
  default:
    console.log("Autumn");
}

//  Role message
let role = "Guest";

switch (role) {
  case "Admin":
    console.log("Welcome Admin");
    break;
  case "User":
    console.log("Welcome User");
    break;
  case "Guest":
    console.log("Welcome Guest");
    break;
}

//  Grade message
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Needs Improvement");
}