//Print to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//Print 5 to 1
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

//Even numbers 1–10
let k = 1;
while (k <= 10) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
}

//Sum 1–10
let a = 1;
let sum = 0;
while (a <= 10) {
  sum += a;
  a++;
}
console.log("Sum:", sum);

//Squares 1–5
let b = 1;
while (b <= 5) {
  console.log(b * b);
  b++;
}