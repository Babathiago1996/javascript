let balance=5000
let pin=1255
let attempts=3
let name ="azeez"
// 
function checkPin(){
    while(attempts>0){
        let enteredPin=parseInt(prompt("Entered your pin"))
        if(enteredPin===pin){
            alert(`correct pin! welcome ${name}`)
            return startAtm();
        }else {
            attempts--
            if(attempts===0){
                alert(`your atm card as been blocked ${name} for inputting the wrong pin 3 times`)
                return;
            }else{
                    alert(`you input the wrong pin ${name}! you have ${attempts}attepmts left`);
            }
        }

    }
}
 function startAtm(){
    while(true){
    let choice=parseInt(prompt("choose an option from the menu:\n1.withdraw money\n2.deposit money\n3.checkbalance\n4.Exit"));
    if(choice===1){
        let amount=parseInt(prompt(`enter the amount you've come to withdraw ${name}`))
        alert(withdrawAmount(amount))
    }else if(choice===2){
        let amount = parseInt( prompt(`enter the amount you've come to deposit ${name}`));
        alert(depositAmount(amount))
    }else if(choice===3){
        alert (checkBalance())
    }else if(choice===4){
        alert(`thank you for banking with us ${name}`)
        return
    }else{
        alert("you've entered invalid option! try again")
    }
 }
}
function checkBalance(){
    return (`your current balance is  ${balance}`)
}
 
function withdrawAmount(amount){
if(amount<0){
    alert("you have entered incorrect amount to withdraw")
}else if(amount>balance){
    alert("you dont have upto that in your account")
}else{
    balance=balance-amount
    return (`transaction succesful your current balance now is $${balance}`)
}
}
function depositAmount(amount) {
    if(amount<0){
        alert("you have entered incorrect amount to deposit")
    }else {
        balance= balance+amount
        return (`you have successfully deposited ! you new current balance is now $${balance} `)
    }
}
checkPin()