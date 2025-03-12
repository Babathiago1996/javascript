// conditional statement
// if statement
// if(condition)[
// lines of codes
//  ]
if (true) {
  console.log("hello world");
}
// 18+ // you are eligible to vote
// age >=
const age = 42;
if (age >= 18) {
  console.log("you are eligible to vote");
}
const password = "ghgguughgh";
// write an if statement that logs password is strong to the
// console if the password length is 9 and above
if (password.length >= 9) {
  console.log("password is stromg");
}
if (password.length >= 9) {
  console.log("password is stromg");
} else [console.log("password is weak")];
// declare two variable
const balance = 5000;
const amount = 4000;
if (balance >= amount) {
  console.log("transaction sucessful");
} else {
  console.log(" transaction insufficient");
}
//  // declare two variable
const userpin = 1055;
const enterpin = 2455;
if (enterpin == userpin) {
  console.log("incorect pin");
} else {
  console.log("pin is correct");
}
//
const email = "adebisi@gmail.com";
if (email.includes("@")) {
  console.log("email is correct");
} else {
  console.log("email is not correct");
}
const score = 50;
if (score >= 50) {
  console.log("you pass");
} else {
  console.log("you fail");
}

const number = 5;
if (number < 0) {
  console.log("it is a negavtive number");
} else {
  console.log("it is a positive number");
}
const num1 = 5;
const num2 = 7;
if (num1 > num2) {
  console.log("num1 is greater");
} else {
  console.log("num2 is greater");
}
console.log(`num1 ${num1}is greater than num2${num2}`);
console.log(`num2 ${num2}is greater than num1${num1}`);

//
const Number = 8;
if (Number % 2 == 0) {
  console.log("the number is even");
} else {
  console.log("it odd number");
}
const cost = 90;
const discount = 100;
if (cost > discount) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}

const num3 = (54 + 56 + 78) / 3;
const num4 = (67 + 60 + 83) / 3;

console.log(`team num3  has an average score of ${num3}`);
console.log(`team num4 has an average score of ${num3}`);
if (num3 > num4) {
  console.log("team A won");
} else {
  console.log("team B won");
}
const timeOfDay = 13;
if (timeOfDay > 10 && timeOfDay <= 16) {
  console.log("you should be in class");
} else {
  console.log("be at home");
}
const transaction = 6700;
if (transaction > 2500) {
  console.log("your charge is 100");
} else {
  console.log("your charge is 50");
}

let word = "banana";
if (
  word.includes("a") ||
  word.includes("e") ||
  word.includes("o") ||
  word.includes("i") ||
  word.includes("u")
) {
  console.log("the word is vowel");
} else {
  console.log("it a consonant sound");
}

const scoreA = 100;
const scoreB = 100;
if (scoreA > scoreB) {
  console.log("Awins");
} else if (scoreB > scoreA) {
  console.log("B wins");
} else {
  console.log("it is a draw");
}

const movieRating=6.5

if(movieRating>=8){
    console.log("Excellent movie")
}else if(movieRating>=6){
    console.log("good movie")
}else if(movieRating>=5){
    console.log("average movie")
}else{
    console.log("bad movie");
}

const userAge=90
if(userAge>60){
    console.log("old people club")
}else if(userAge<18){
    console.log("young club")
}else{
    console.log("adult club")
}

// let word = "CAT".toLowerCase();

// includes l0gical or
// if (
//   word.includes("a") ||
//   word.includes("e") ||
//   word.includes("o") ||
//   word.includes("i") ||
//   word.includes("u")
// ) {
//   console.log("The word is a vowel");
// } else {
//   console.log("The word is consonant");
// }

// if(email && password){
    // if(email is registered){
//         if(password is correct){
//             // login
//         }else{
//             console.log('Incorrect pass');
            
//         }

//     }else{
//         console.log('please register');
        
//     }

// }else{
//     console.log('provide your email and password');
    
// }

const grade ="p"

switch (grade){
    case "A":
    case "a":
    console.log("excellent")
    break;
     case "B":
    case "b":
    console.log("very good")
    break;
     case "C":
    case "c":
    console.log("good")
    break;
     case "D":
    case "d":
    console.log("fair")
    break;
     case "E":
    case "e":
    console.log("pass")
    break;
     case "F":
     case "f":
    console.log("fail")
    break;
     default:
     console.log("invalid grade, try again")
}