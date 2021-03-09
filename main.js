/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the array, do it with a loop,
// printing each item you're asked to print INDIVIDUALLY.
//
//
//
// Challenge 1
// Loop through the following array, console.logging out each value.
const students = [
  "Tre",
  "Sonny",
  "Crystal",
  "Ilyas",
  "Greg",
  "Fernando",
  "Timothy",
  "Patrick",
  "Steve",
  "Jimothy",
  "Pat",
  "Arnold",
  "Andy",
];

console.log("Challenge #1");
console.log(
  "Loop through the following array, console.logging out each value."
);
console.log(students);

console.log("Log each value individually.");
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(student);
}

// console.log("Log each value individually.");
// for (const item of students) {
//   console.log(item);
// }

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be
// printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

console.log("=================");
console.log("Challenge #2");
console.log(
  "Loop through the following array BACKWARDS, console.logging out each value."
);
console.log(grades);

// Reverse For Loop
console.log("Log each value individually.");
for (let i = grades.length - 1; i >= 0; i--) {
  console.log(grades[i]);
}

// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

console.log("=================");
console.log("Challenge #3");
console.log("Log out only the even numbers in the following array.");

console.log(positiveNumbers);

console.log("Log each value individually.");
for (const positiveNumber of positiveNumbers) {
  if (positiveNumber % 2 === 0) {
    console.log(positiveNumber);
  }
}

// console.log("Log each value individually.");
// const evens = positiveNumbers.filter((number) => number % 2 == 0);
// console.log(evens);
// for (const item of evens) {
//   console.log(item);
// }

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There
// should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

console.log("=================");
console.log("Challenge #4");
console.log("Log out the Even Numbers. INCLUDING the negative ones.");

console.log(mixedSignNumbers);

console.log("Log each value individually.");
for (const mixedNumber of mixedSignNumbers) {
  if (mixedNumber % 2 === 0) {
    console.log(mixedNumber);
  }
}

// const evensAndNegative = mixedSignNumbers.filter((number) => number % 2 == 0);
// console.log(evensAndNegative);

// console.log("Log each value individually.");
// for (const item of evensAndNegative) {
//   console.log(item);
// }

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by
// deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = [
  "A",
  "H",
  "I",
  "M",
  "O",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
];

console.log("=================");
console.log("Challenge #5");
console.log(
  "Remove two values from the beginning and one value from the end of the following array"
);
console.log(symmetricalCapitals);

console.log("Remove two values from the beginning.");
symmetricalCapitals.splice(0, 2);
console.log(symmetricalCapitals);

console.log("Remove one value from the end.");
symmetricalCapitals.pop();
console.log(symmetricalCapitals);

console.log("Log each value individually.");
for (let i = 0; i < symmetricalCapitals.length; i++) {
  console.log("value:", symmetricalCapitals[i]);
}

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to
// the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

console.log("=================");
console.log("Challenge #6");
console.log(
  "Add a value to the start of the following array and two values to the end simply by adding them in the following line, and then log out each value individually."
);
console.log(fibonacciNumbers);

console.log("Add a value to the start of array.");
fibonacciNumbers.unshift(0);
console.log(fibonacciNumbers);

console.log("Add two new values at the end of array.");
fibonacciNumbers.push(14, 15);
console.log(fibonacciNumbers);

console.log("Log each value individually.");
for (let i = 0; i < fibonacciNumbers.length; i++) {
  console.log("value:", fibonacciNumbers[i]);
}

// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the
// previous 6 challenges; that is, every value should be placed within the square brackets.
// Now console.log out each value individually.
const createdArray = ["J", "O", "H", "N", "M"];

console.log("=================");
console.log("Challenge #7");
console.log("Make a NEW array with 5 values of your choice.");

console.log(createdArray);

console.log("Log each value individually.");
for (const item of createdArray) {
  console.log(item);
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
emptyArray = [];

console.log("=================");
console.log("Challenge #8");
console.log(
  "Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift"
);

console.log(emptyArray);

console.log("push method");
emptyArray.push(4, 5);
console.log(emptyArray);

console.log("unshift method");
emptyArray.unshift(1, 2, 3);
console.log(emptyArray);

console.log("Log each value individually.");
for (const item of emptyArray) {
  console.log(item);
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE),
// logging out each value individually.

console.log("=================");
console.log("Challenge #9");
console.log(
  "Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10."
);

console.log(students);

console.log("Log each value individually.");
for (let i = 3; i < students.length - 2; i++) {
  console.log("index:", i);
  console.log("value:", students[i]);
}

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3
// and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array,
// loop through the old one, and put values from the original in the new one. Then log out each value of
// the copy individually.

console.log("=================");
console.log("Challenge #10");
console.log(
  "Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10."
);

console.log(students);

let = challenge10Array = [];

console.log("Push students at i, into empty array.");
for (let i = 3; i < students.length - 2; i++) {
  challenge10Array.push(students[i]);
}

console.log("=============================");

console.log("Log each value individually.");
for (const value of challenge10Array) {
  console.log(value);
}

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE),
// then log out each value of the copy individually. THEN log out each value of the original array.
// Notice that the original array didn't get any values taken out of it, because `slice` does NOT
// modify the original array.

console.log("=================");
console.log("Challenge #11");
console.log(
  "Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array."
);

console.log("=================");
const challenge11Array = students.slice(3, 11);
console.log("Logged value of challenge11Array.");
for (const value of challenge11Array) {
  console.log(value);
}
console.log("=================");
console.log("Logged value of original array.");
for (const value of students) {
  console.log(value);
}

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = [
  "Velociraptor",
  "T-Rex",
  "Stegosaurus",
  "Triceratops",
  "Dimetrodon",
  "Allosaur",
  "Spinosaurus",
  "Gigantosaur",
];

console.log("=================");
console.log("Challenge #12");
console.log(
  "Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array."
);
console.log(dinosaurs);
console.log("=================");
const challenge12Items = dinosaurs.splice(4, 3);
console.log(
  "Logged value of original array dinosaurs with .splice(4, 3) applied."
);
for (const value of dinosaurs) {
  console.log(value);
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log("=================");
console.log("Challenge #13");
console.log(
  "Use .join to change the dinosaur strings from the above array into one string with a '*' string as the 'separator'. Then console.log out that string."
);
console.log("=================");

const str = dinosaurs.join("*");

console.log(
  "Used .join to change the strings from the previous spliced dinosaur array into 1 string."
);

console.log("=================");
console.log("Logged string.");
console.log(str);

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
console.log("=================");
console.log("Challenge #14");
console.log(
  "Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array."
);
console.log("=================");
dinosaurs.reverse();
console.log("Used .reverse() to reverse the order of the original array.");
console.log(dinosaurs);

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ["red", "yellow", "blue"];
const secondaries = ["orange", "green", "purple"];

console.log("=================");
console.log("Challenge #15");
console.log(
  "Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays."
);
console.log("=================");
const bigArray = primaries.concat(secondaries);

console.log("Big array:", bigArray);
console.log("Primary array:", primaries);
console.log("Secondary array:", secondaries);
