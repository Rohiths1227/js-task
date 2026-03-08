// Print characters
let text = "javascript";
for (let char of text) {
  console.log(char);
}

//Print fruits
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

//Count characters
let word = "javascript";
let count = 0;
for (let char of word) {
  count++;
}
console.log(count);

//Print vowels
let str = "javascript";
let vowels = "aeiou";
for (let char of str) {
  if (vowels.includes(char)) {
    console.log(char);
  }
}

//Sum array numbers
let numbers = [10, 20, 30];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum);