//booleans true or false
// comparison operator < > <= >= ==(loose) ===(strict)
console.log(45<50);
console.log(50 <= 50);

//BOOLEANS true or false
//
const isMarried = true;
// comparison operators < > <= >= ==(loose) === (strict)

console.log(5 == "5.0");
console.log(5 === "5");
let userspin = 1234;

let enteredpin = 1224;
console.log(userspin == enteredpin); //false

let balance = 10000;
let withdrawalAmount = 9000;
balance >= withdrawalAmount; //f

userspin === enteredpin && balance >= withdrawalAmount;

// logical operators and && or   not !
// and operator - every condition must be true
//  or just needs one condition to be true
// ! negate that,s tells the opposite 
console.log(3 < 4 && 5 < 8 && 10 > 15); // t and t and f
console.log(5 == "5" && 4.5 >= 5.9999); // t and f == f
 console.log(54===54.0 || 2.5 < 0.7)// t or f

//  truthy and falsy value 
// "ade"
// strings and valid string will be true ,
const  myName ="     jay"
console.log(Boolean(myName));
// numbers any amount is true positive or negavtive
// zero (falsy)
const value = 0.0;
console.log(Bolean(value));