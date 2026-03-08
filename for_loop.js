//Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Print 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Even numbers 1–20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Odd numbers 1–20
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}