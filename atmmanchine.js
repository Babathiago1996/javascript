// write a simple atm js algo
// checkBalance
// withdrawAmount
// depositAmount
// checkPin
let balance = 5000;
let pin = 1234;
let attempts = 3;
//
function checkPin() {
  while (attempts > 0) {
    let enteredPin = parseInt(prompt("Enter your pin"));
    if (enteredPin===pin) {
      alert("pin correct! welcome.");
    return  startAtm();
      
    } else {
      attempts--;
      if (attempts === 0) {
        alert("your card is blocked");
        return;
      } else {
        alert(`incorrect pin. you have ${attempts}attempts left.`);
      }
    }
  }
}
// function to display atm menu and perform actions
function startAtm(){
    while (true){
        let choice=parseInt(prompt("choose an option:\n1.withdraw money\n2.deposit money\n3.check balance\n4.Exit"));
        if(choice===1){
            let amount=parseInt(prompt("Enter amount to withdraw:"));
            alert(withdrawAmount(amount));
        }
        else if(choice===2){
            let amount =parseInt(prompt("Enter amount  to deposit"))
            alert(depositAmount(amount));
        }
        else if (choice===3){
            alert(checkBalance());
        }
        else if(choice===4){
            alert("thanks you customer for banking with us")
            return
        }
        else{
            alert("invalid option. please try again");
        }
    }
}
// function to checkbalance
function checkBalance(){
    return `your current balance is ${balance}`
}
// function to withdraw money
function withdrawAmount(amount){
    if(amount>balance){
        return "insufficient funds"
    }else if(amount<=0){
        return "invalid amount!"
    }else{
        balance=balance-amount
        return `withdrawal succesful your new balance is $${balance}`
    }
}
// function to deposit money 
function depositAmount(amount){
    if(amount<=0){
        return "invalid deposit amount";
    }else {
        balance=balance+amount;
        return `deposit succesful! your new balance is ${balance}`
    }
}
// start the atm by checking pin
checkPin();