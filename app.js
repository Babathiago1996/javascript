function calcSumOfNums(){
    const num1= prompt("Enter First Number:")
    const num2=prompt("Enter Second Number:")
    console.log(num1 +num2);

}

// /calculation
// /type of conversion
// number to strings toString, String
// 60 ==>"60"
const num =90;
console.log(typeof num);
console.log(typeof num.toString());
console.log(typeof String(num));

// string to number 
// number parseInt
const myStr ="30"
console.log(typeof myStr);
console.log(typeof Number(myStr))
console.log(typeof parseInt(myStr))
console.log(parseInt(myStr)*2);