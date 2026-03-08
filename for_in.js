//Print all values
let student = {
  name: "ROHITH",
  age: 26,
  department: "IT"
};

for (let key in student) {
  console.log(student[key]);
}

//Print keys
for (let key in student) {
  console.log(key);
}

//Print key and value
for (let key in student) {
  console.log(key + " : " + student[key]);
}