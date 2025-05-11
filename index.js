var name = "Sakina";      
var age = 26;
var graduate = true;      
var student = { name: "Sakina", age: 26 }; // Object
var subjects = ["Math", "Science", "English"];
console.log(name, age, graduate, student, subjects);

// 2) Program for basic arithmetic operations
var num1 = 10;
var num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

// 3) Check if a number is positive, negative, or zero
var number = -3;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// 4) Array of 5 students
var students = ["Waniya", "Laiba", "zainab", "nazia", "Fatima"];

// 5) Array methods
students.push("Hina");          // Add a student
students.pop();                 // Remove the last student
students.sort();                // Sort the array
students.reverse();             // Display in reverse order

console.log("Final Students Array:", students);
  