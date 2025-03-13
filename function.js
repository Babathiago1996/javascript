// functions decalration
// function functionName (){write the code}
// log hello to the console
function logger() {
  console.log("hello world ");
}
// / called the functionName

logger();

// write a function called welcomeUser logs welcome to the console
// function welcomeUser (){
//     console.log("welcome user");
// }
// welcomeUser ();

// function parameter

function welcomeUser(name = "anon") {
  console.log(`welcome ${name}`);
}
welcomeUser("vera");
welcomeUser("quadri");
welcomeUser();
// write a function that add two numbet together
function addtwoNumbers(n1 = 0, n2 = 0) {
  const total = n1 + n2;
  console.log(total);
}
addtwoNumbers(34, 10);
addtwoNumbers(9, 10);
// write a function that compute  that difference between two number
function substractTwoNumbers(n1, n2) {
  console.log(n1 - n2);
}
substractTwoNumbers(90, 5);
substractTwoNumbers(2, 6);

// default parameter
// write

function wordConverter(word = "word") {
  console.log(word.toLocaleUpperCase());
}
wordConverter("cat");
function replaceAllE(word) {
  console.log(word.toLowerCase().replaceAll("e", "*"));
}
replaceAllE("EYE");

function checkLength(word) {
  console.log(word.length);
}
checkLength("ryfgiyu");

function char(word) {
  console.log(word.charAt(0));
}
char("fhff");

function getInitials(firstName, lastName) {
  console.log(`${firstName.charAt(0)}.${lastName.charAt(0)}`);
}
getInitials("john", "doe");

function Extract(word) {
  console.log(word.substr(0, 5));
}
Extract("huyuyyy");

function positive(number) {
  if (number > 0) {
    console.log("it is positive");
  } else {
    console.log("it is negative");
  }
}
positive(5765);

//  function to a factory that produce a product

function sayHello() {
  return "say hello";
}
const val = sayHello();
console.log(val);
// example 2
function multiplyTwoNums(n1, n2) {
  return n1 + n2;
}
console.log(multiplyTwoNums(6, 10));

function addTwoNums(n1, n2, n3) {
  const average = (n1 + n2 + n3) / 3;
  return average;
}
console.log(addTwoNums(43, 5, 6));

function weekDays(week) {
  const days = weeks * 7;
  return days;
}
function daysMinute(hour) {
  const minutes = hour * 60;
  return minutes;
}
console.log(daysMinute);
//
function hrsToMins(hour) {
  return `${hour}hours is equal to ${hour * 60}minutes`;
}
console.log(hrsToMins);

function daysOfYears(years) {
  return `years is equal to ${years*12} months`;
}
console.log(daysOfYears(2));

function sumUp(number) {
  let numberTwo = 40;
  return numberTwo;
}
console.log(sumUp);

// function expression
const myName= function (){
    return "john"
}
console.log(myName ());

const divideTwoNumber=function(n1,n2){
    return n1/n2
}
console.log(divideTwoNumber(9,3))

// removealla("email");
// function removealla(word){
//     console.log(word.replace("a"),"")
// }
// removealla()

// arrow function
const myArrowFunc =()=>{
console.log("Arrow function")
}
myArrowFunc ();

// 
const checkWinner =(scoreA,scoreB)=>{
    if(scoreA>scoreB){
        return "scoreA wins"
    }else if(scoreB>scoreA) {
        return "scoreB wins"
    } else{
        return "it is a draw"
    } 
}
 console.log(checkWinner(66, 66));

 const calculateBMI=( mass , height)=>{
    let BMI =mass/height**2;
    return BMI.toFixed(2);
 }
 console.log(calculateBMI(78,1.75));

 const getBMICategory =(BMI)=>{
    if(BMI<18.5){
        return "you are underweight"
    } else if (BMI>18.5 &&BMI<=24.9){
        return "normal wight"
    }else if(BMI>25 && BMI<=29.9){
        return "you are overweight"
    }else{
        return "obese"
    }
 }
 console.log(getBMICategory(calculateBMI (70,1.75)));