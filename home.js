let logOutBtn = document.getElementById("logout_btn");
logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

let history = document.querySelectorAll(".cards_details");
for (let his of history) {
  let mainHistory = his;
  mainHistory.addEventListener("click", function () {});
}

// function for style on card
function forStyleCard(variable) {
  let cards = document.querySelectorAll(".card");
  for (let card of cards) {
    card.style.backgroundColor = "";
    card.style.border = "";
  }

  Object.assign(variable.style, {
    backgroundColor: "rgba(8, 116,242,0.09)",
    border: "1px solid rgba(8,116,242,1)",
  });
}

// function for loop

function forLoop(classes) {
  let cards = document.querySelectorAll(classes);
  for (let card of cards) {
    card.style.display = "none";
  }
}

// function for block item

function blockItem(id) {
  let tamp = document.getElementById(id);
  tamp.style.display = "block";
}

let addMoney = document.getElementById("add_money");
addMoney.addEventListener("click", function () {
  let hidden = forLoop(".cards_details");
  let addMoneySec = blockItem("add_money_sec");
  let css = forStyleCard(addMoney);
  let blank = document.getElementById('blank_item');
   blank.style.display = 'none'
});

let cashOut = document.getElementById("cash_out");
cashOut.addEventListener("click", function () {
  let hidden = forLoop(".cards_details");
  let cashOutSec = blockItem("cash_out_sec");
  let css = forStyleCard(cashOut);
   let blank = document.getElementById('blank_item');
   blank.style.display = 'none'
});

let transfer = document.getElementById("transfer");
transfer.addEventListener("click", function () {
  let hidden = forLoop(".cards_details");
  let transferSec = blockItem("transfer_sec");
  let css = forStyleCard(transfer);
   let blank = document.getElementById('blank_item');
   blank.style.display = 'none'
});

let bonus = document.getElementById("bonus");
bonus.addEventListener("click", function () {
  let hidden = forLoop(".cards_details");
  let bonusSec = blockItem("bonus_sec");
  let css = forStyleCard(bonus);
   let blank = document.getElementById('blank_item');
   blank.style.display = 'none'
});

let payBill = document.getElementById("pay_bill");
payBill.addEventListener("click", function () {
  let hidden = forLoop(".cards_details");
  let payBillSec = blockItem("pay_bill_sec");
  let css = forStyleCard(payBill);
   let blank = document.getElementById('blank_item');
   blank.style.display = 'none'
});

let transaction = document.getElementById("transaction");
transaction.addEventListener("click", function () {
  let hidden = forLoop(".cards_details");
  let transactionSec = blockItem("transactionSec");
  let css = forStyleCard(transaction);
   let blank = document.getElementById('blank_item');
   blank.style.display = 'none'
});

// ........................................ //
// function for get amount from input and converted into num
function getAmountIntoNum(id) {
  let amount = document.getElementById(id).value;
  let converted = parseInt(amount);
  return converted;
}

// function for clear input field
function clearInputs(...ids) {
  ids.forEach((id) => {
    let input = document.getElementById(id);
    if (input) input.value = "";
  });
}

// fountion available balance
function availablebln() {
  let avlBlnc = document.getElementById("available_balance").innerText;
  let realBlnc = parseInt(avlBlnc);
  return realBlnc;
}

// function for changed available balance value

function changedValueOfAvlbln(amount) {
  let avlBlncElement = document.getElementById("available_balance");
  let realBlnc = parseInt(avlBlncElement.innerText);

  if (amount > realBlnc) {
    alert("Not enough balance 😒");
    return -1;
  }
  let newBlnc = realBlnc - amount;
  avlBlncElement.innerText = newBlnc;
  return newBlnc;
}

// function for historyCreate
function historyListCreate(id,src,heading){
  let time = new Date();
  let justTime = time.toLocaleTimeString();
  let newDiv = document.createElement('div')
  newDiv.innerHTML = `  <div class="detail_card p-3 rounded-2xl bg-white mt-2 flex items-center cursor-pointer  gap-4 hover:scale-105 transition-transform duration-300  ">
            <img class="bg-blue-200 p-2 rounded-full w-11 " src="${src}" alt="">
            <div class="card_info">
                <p class="font-bold">${heading}</p>
                 <p class="text-green-600">${(id)+' ' + 'BDT'}</p>
                <p>${justTime}</p>
            </div>
        </div>
    `
  let history = document.getElementById('history.list');
  history.appendChild(newDiv)
} 
const number = 12345;
const pinNum = 12345;
//  add money btn
let addMoneyBtn = document.getElementById("add_money_btn");
addMoneyBtn.addEventListener("click", function () {
  let num = getAmountIntoNum("add_account_num");
  let pin = getAmountIntoNum("add_pin_num");
  let amount = getAmountIntoNum("add_amount_input");
   
  if (num != number && pin != pinNum) {
    alert("Interaction failed");
    return;
  }

  let avlBlnc = document.getElementById("available_balance").innerText;
  let realBlnc = parseInt(avlBlnc);
  let addition = amount + realBlnc;
  document.getElementById("available_balance").innerHTML = addition;
  alert(" BDT" + " " + amount + " " + "Add money successfully 😊");

  let clearFields = clearInputs(
    "add_account_num",
    "add_pin_num",
    "add_amount_input"
  );
  let TempHeads = document.getElementById('add_money_h2').innerText;
  let heads = TempHeads
 
  let history = historyListCreate(amount,'./assets/wallet1.png',heads)
  

});

// cash out btn
let cashOutBtn = document.getElementById("cash_out_btn");
cashOutBtn.addEventListener("click", function () {
  let num = getAmountIntoNum("cash_account_num");
  let pin = getAmountIntoNum("cash_pin_num");
  let amount = getAmountIntoNum("cash_out_input");

  if (num != number && pin != pinNum) {
    alert("Interaction failed");
    let clearFields = clearInputs(
      "cash_account_num",
      "cash_pin_num",
      "cash_out_input"
    );
    return;
  }

  let avlBlnc = changedValueOfAvlbln(amount);

  if (avlBlnc === -1) {
    clearInputs("cash_account_num", "cash_pin_num", "cash_out_input");
    return;
  }

  alert(" BDT" + " " + amount + " " + "Cash out successfully 😊");

  let clearFields = clearInputs(
    "cash_account_num",
    "cash_pin_num",
    "cash_out_input"
  );
   let TempHeads = document.getElementById('cash_out_h2').innerText;
  let heads = TempHeads
  let history = historyListCreate(amount,'./assets/send1.png',heads)
});

// transfer btn
let transferMoneyBtn = document.getElementById("transfer_money_btn");
transferMoneyBtn.addEventListener("click", function () {
  let num = getAmountIntoNum("transfer_account_num");
  let pin = getAmountIntoNum("transfer_account_num");
  let receiver = getAmountIntoNum("receiver_input");
  let amount = getAmountIntoNum("transfer_input");

  if (num != number && pin != pinNum) {
    alert("Interaction failed");
    let clearFields = clearInputs(
      "cash_account_num",
      "cash_pin_num",
      "cash_out_input"
    );
    return;
  }

  let avlBlnc = changedValueOfAvlbln(amount);

  if (avlBlnc === -1) {
    clearInputs("cash_account_num", "cash_pin_num", "cash_out_input");
    return;
  }
  alert(
    "Send money successfully to" +
      " " +
      receiver +
      " " +
      " BDT " +
      amount +
      " " +
      "😊"
  );

  let clearFields = clearInputs(
    "transfer_account_num",
    "transfer_pin_num",
    "transfer_input",
    "receiver_input"
  );
    let TempHeads = document.getElementById('transfer_h2').innerText;
  let heads = TempHeads
  let history = historyListCreate(amount,'./assets/money1.png',heads)
});

// get bonus btn
let getBonusBtn = document.getElementById("bonus_btn");
getBonusBtn.addEventListener("click", function () {
  let coupon = "iam poor";
  let couponInput = document.getElementById("coupon_input");
  let value = couponInput.value;

  let num = 500;
  if (coupon != value) {
    alert("coupon code is wrong try again 😒");
  } else {
    let avlBlncElement = document.getElementById("available_balance");
    let realBlnc = parseInt(avlBlncElement.innerText);
    let converted = realBlnc + num;
    avlBlncElement.innerText = converted;
    alert("congratulation you got 500 BDT 😃");
  }

  let clearFields = clearInputs("coupon_input");

    let TempHeads = document.getElementById('bonus_h2').innerText;
  let heads = TempHeads
  let history = historyListCreate(amount,'./assets/bonus1.png',heads)
});

// pay bill btn
let PayBillBtn = document.getElementById("pay_bill_btn");
PayBillBtn.addEventListener("click", function () {
  let num = getAmountIntoNum("pay_account_num");
  let pin = getAmountIntoNum("pay_pin_num");
  let amount = getAmountIntoNum("pay_input");

  if (num != number && pin != pinNum) {
    alert("Interaction failed");
    let clearFields = clearInputs(
      "cash_account_num",
      "cash_pin_num",
      "cash_out_input"
    );
    return;
  }

  let avlBlnc = changedValueOfAvlbln(amount);

  if (avlBlnc === -1) {
    clearInputs("cash_account_num", "cash_pin_num", "cash_out_input");
    return;
  }
  alert("Pay Bill successfully " + " " + " BDT " + amount + " " + "😊");
  let clearFields = clearInputs("pay_account_num", "pay_pin_num", "pay_input");

   let TempHeads = document.getElementById('pay_bill_h2').innerText;
  let heads = TempHeads
  let history = historyListCreate(amount,'./assets/purse1.png',heads)
});

