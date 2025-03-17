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
// 
// function askQuestion (){
//     let name= prompt("who is there")
//     if(name== null || name.trim() ===""){
//         alert("cancelled");
//     }
//     if (name === "dami"){
//         let password =prompt("what is your password?");
//         if (password ===null || password.trim()=== ""){
//             alert("cancelled")
//         }else if (password === "javascript"){
//             alert("welcome user")
//         }else{
//             alert("wrong password")
//         }
//     } else{
//         alert("i dont know you");
//     }
// }
//  askQuestion()
// example 2

 function askQuestion (){
    let name= prompt("what is your name")
    if(name===null || name.trim()===""){
        alert("cancelled")
    }
    if(name==="dami"){
        let password=prompt("what is your password")
        if(password===null || password.trim()===""){
            alert("cancelled")
        }else if(password==="javascript"){
            alert(`welcome ${name}`)
        } else{
            alert("wrong password")
        }
    } else{
        alert(`wrong ${name} i dont know you `)
    }
 }
  askQuestion();

// example 3
// function askQuestion (){
//     let name =prompt("who are you nigga")
//     if(name==="dami"){
//      let password= prompt("enter your password nigga")
//     if(password !=="javascript"){
//         alert("wrong password")
//     }else if(password ===null || password.trim()===""){
//         alert ("cancelled")
//     }else{
//         alert("welcome to the hood nigga")
//     }
// }
//    else  if(name===null || name.trim()===""){
//         alert("fuck off nigga")
//     }
//     else{
//         alert("i dont know you nigga")
//     }
// }
// askQuestion();
//   
// Type coercion --force
console.log("2"+ 4); //24
console.log("wale" /4) //nan
console.log("50"-4)//56
// whenever a string is involve with + --->string concatination
// eg "58"+ 5= 505
// however a valid number string "24" is involve with other math operator -corced to behave as a number eg "50"-5=45
