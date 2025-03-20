// write a simple atm js algo
// checkBalance
// withdrawAmount
// depositAmount
// checkPin

let balance = 5000;
let pin = 1234;
let attempts = 3;

//checkPin
function checkPin() {
  const enteredPin = parseInt(prompt("Enter Pin: "));
  while (attempts > 0) {
    if (enteredPin === pin) {
      attempts = 3;
      //   startAtm();
      alert("start Atm");
    } else {
      attempts--;

      alert(Incorrect Pin, ${attempts} attempts left);
    }
  }
  alert("Your Card has been blocked");
}

function startAtm(choice) {
  if (choice === 1) {
    //withdrawal
    withdrawAmount(1000);
  } else if (choice === 2) {
    //deposit
    depositAmount(3000);
  } else if (choice === 3) {
    //check balance
    checkBalance();
  } else if (choice === 4) {
    //exit
    return "Thank you for banking with us";
  } else {
    //invalid option_
    return "Invalid option, try again";
  }
}

// function tto check balance -
function checkBalance() {
  return Your current balance is $${balance};
}
function withdrawAmount(amount) {
  if (amount <= balance) {
    balance -= amount;
    return "Withdrawal Successful";
  } else {
    return "Insufficient funds";
  }
}

function depositAmount(amount) {
  balance += amount;
  return "Deposit successful";
}
