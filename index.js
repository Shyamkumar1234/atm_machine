
class BOb{
    currBalance = 0;
    transAmount = [];
    transType = [];
    transDate = [];
    atmNumber = "" + 1234567890123456;
    atmPin = "" + 1234;
    date = new Date();
    setAtmPin(newPin){
        this.atmPin = newPin;
    }
    viewBalance(){
        return this.currBalance;
    }
    setBalance(balance){
        this.currBalance = balance;
    }
    depositBalance(amountToDeposit){
        this.currBalance += amountToDeposit;
        this.transAmount.push(amountToDeposit);
        this.transType.push("Deposited")
        this.transDate.push(this.date.toLocaleString());
    }
    withrawBalance(amountTobeWithrawn){
        this.currBalance -= amountTobeWithrawn;
        this.transAmount.push(amountTobeWithrawn);
        this.transType.push("Withrawn")
        this.transDate.push(this.date.toLocaleString());
    }
}

let  bank = new BOb();


let img1 = document.getElementById('img1');
let mainScreen = document.getElementById('main-screen');
let intervalId = setInterval(()=>{
    setTimeout(()=>{
        img1.setAttribute('src', "./bobnew.jpg");
    }, 1500);
    setTimeout(()=>{
        img1.setAttribute('src', "./img2.webp");
    }, 3000);
    setTimeout(()=>{
        img1.setAttribute('src', "./img3.png");
    }, 4500);
    setTimeout(()=>{
        img1.setAttribute('src', "./img4.png");
    }, 6000);
    setTimeout(()=>{
        img1.setAttribute('src', "./img5.jpg");
    }, 7500);
}, 7500);

//variables

// language selection
let selectLanguage = `<div id="page1">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px;  text-align:center;">Please select your language</div>
                        <div class="choice-1">
                            <div class="withraw choi">मराठी</div>
                        </div>
                        <div class="choice-2">
                            <div class="balanceEnquiry choi">हिंदी</div>
                        </div>
                        <div class="choice-3">
                            <div class="deposit choi" onclick = "enterAtmNumber()">English</div>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

// to login in account atm number
let takeatmNumber = `<div id="page2">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; ">Enter your 16-digit ATM number</div>
                        <div class="choice-1">
                            <input type="password" maxlength="16" onkeyup = "checkDigit()" style="margin-bottom: 0.7rem; width: 50%; border: none; border-bottom: 2px solid #000;" autofocus id ="atmNumber" onkeyup = enteratm();>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn" onclick = "proceed1()"> OK </span> to proceed.</div>
                    </div>
                 </div>`;
// Invalid atm number
let invalidAtmNumber = `<div id="page8">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color: #ff0000;">Invalid ATM number</div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

// to login in account pin number
let takeatmPin = `<div id="page3">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; ">Enter your 4-digit ATM pin</div>
                        <div class="choice-1">
                            <input type="password" maxlength="4" style="margin-bottom: 0.7rem; width: 50%; border: none; border-bottom: 2px solid #000;" autofocus id = "atmpin">
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn" onclick = "proceed2()"> OK </span> to proceed.</div>
                    </div>
                 </div>`
// Invalid atm pin
let invalidAtmPin = `<div id="page8">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color: #ff0000;">Invalid ATM pin</div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;
// what would you like to do.
let facilityList = `<div id="page4">
                    <img src="./homep2.jpg" class="img">
                    <div class="choices">
                        <div class="choice-1">
                            <div class="pinchange choi" onclick = "pinchange()">Pin Change</div>
                            <div class="withraw choi" onclick = "withraw()">Withrawal</div>
                        </div>
                        <div class="choice-2">
                            <div class="ministatement choi" onclick = "displayministatement()">Mini Statement</div>
                            <div class="balanceEnquiry choi" onclick = "balanceEnquiry()">Balance Enquiry</div>
                        </div>
                        <div class="choice-3">
                            <div class="deposit choi" onclick = "deposit()">Deposit Balance</div>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

// pin change page with form
let pinchangePageWithform = `<div id="page5">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div style="display: flex; align-items: center;">
                            <div class="div1">
                                <p>Enter your old pin : </p>
                                <input type="password" max="4" style="margin-bottom: 0.7rem; width: 50%;" autofocus id = "oldpin">
                            </div>
                            <div class="div2">
                                <span class="pressbtn" onclick = "change()"> Change </span>
                            </div>
                        </div>
                        <p>Enter new pin : </p>
                        <input type="password" maxlength="4" style="margin-bottom: 0.7rem;" id = "newpin1">
                        <p>Re - Enter new pin : </p>
                        <input type="password" maxlength="4" style="margin-bottom: 0.7rem;" id = "newpin2">
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

// pin change Incorrect old pin alert
let incorrectOldpinalert = `<div id="page8">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color: #ff0000;">Incorrect old pin</div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

// successfully pin changed notification
let pinchangedSuccessful = `<div id="page9">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices" style="align-items: center;">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color:green;">Pin changed successfully.. <span style="font-size: 40px;">👮‍♀️</span></div>
                        <div class="choice-1" style="display: flex;flex-direction: column;">
                            <div class="press-cancel" style="font-size: 2rem;">Please remove your card</div>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;
// pin mismatched alert
let pinmismatched = `<div id="page8">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color: #ff0000;">Sorry, Pin mismatched.</div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`

//--------------------------- DEPOSIT SECTION-----------------------------------------
// Deposit form
let depositForm = `<div id="page6">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices" style="align-items: center;">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem;">Enter Amount to Deposit</div>
                        <div class="choice-1" style="display: flex;flex-direction: column;">
                            <input type="text" maxlength="6" style="margin-bottom: 0.7rem; width: 50%; border: none; border-bottom: 2px solid #000;" autofocus id = "amountdeposit">
                            <span>transaction limit : 10-10000 ₹</span>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn" onclick = "continueDeposit()"> Continue </span> to proceed.</div>
                    </div>
                 </div>`;
// Invalid amount alert to deposit
let invalidamountdeposit = `<div id="page8">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color: #ff0000;">Invalid Amount.</div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

// choose correct or incorrect amount to deposit to confirm
let correctOrIncorrectForm = `<div id="page7">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem;">Please select one..</div>
                        <div class="choice-1">
                            <div class="withraw choi" onclick = "Correct()">Correct</div>
                        </div>
                        <div class="choice-2">
                            <div class="balanceEnquiry choi" onclick = "Incorrect()">Incorrect</div>
                        </div>
                        
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

// correct amount alert successful
let successfulDepositalert = `<div id="page9">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices" style="align-items: center;">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color : green;">Transaction successful <span style="font-size: 40px;">👮‍♀️</span></div>
                        <div class="choice-1" style="display: flex;flex-direction: column;">
                            <div class="press-cancel" style="font-size: 2rem;">Please remove your card</div>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;
// incorrect alert deposit
let incorrectDepositalert = `<div id="page8">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color: #ff0000;">Transaction Faild..</div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;

//-------------------------BALANCE ENQUIRY SECTION-----
// show available balance


//------------------------WITHRAW SECTION---
// show withraw form
let withrawform = `<div id="page6">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices" style="align-items: center;">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem;">Enter Amount to Withraw</div>
                        <div class="choice-1" style="display: flex;flex-direction: column;">
                            <input type="text" maxlength="6" style="margin-bottom: 0.7rem; width: 50%; border: none; border-bottom: 2px solid #000;" autofocus id = "amountwithraw">
                            <span>transaction limit : 10-10000 ₹</span>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn" onclick = "continueWithraw()"> Continue </span> to proceed.</div>
                    </div>
                 </div>`;
// invalid withraw amount alert
let invalidWithrawAmountalert = `<div id="page8">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem; color: #ff0000;">Invalid Amount.</div>
                        <div class="press-cancel"> Press <span class="pressbtn"> Cancel </span> to Exit.</div>
                    </div>
                 </div>`;
// use correct or incorrect from above variables
// show mini statement
let displayMinistatement = `<div id="page4">
                    <img src="./homepage.jpg" class="img">
                    <div class="statement-container">
                        <table>
                            <tr style="border-bottom: 2px solid #000;">
                                <th>Amount</th>
                                <th>Withrawal</th>
                                <th>Date    &   Time</th>
                            </tr>
                        </table>
                    </div>
                 </div>`;
        // -------------MINI STATEMENTS CODE GOES HERE-----------------

//  above write code for mini statements

img1.addEventListener('click', function(){
    clearInterval(intervalId);
    mainScreen.innerHTML = selectLanguage;
});
// for entering atm number
function enterAtmNumber(){
    mainScreen.innerHTML = takeatmNumber;
    myFun();
}


// for atm number validation
function proceed1(){
    let atmNumber = "" + document.getElementById('atmNumber').value;
    if(atmNumber != bank.atmNumber){
        mainScreen.innerHTML = invalidAtmNumber;
        setTimeout(()=>{
            mainScreen.innerHTML = takeatmNumber;
        }, 3000);
    }else{
        mainScreen.innerHTML = takeatmPin;
    }
}
// for atm pin validation
function proceed2(){
    let atmpin = "" + document.getElementById('atmpin').value;
    if(atmpin != bank.atmPin){
        mainScreen.innerHTML = invalidAtmPin;
        setTimeout(()=>{
            mainScreen.innerHTML = takeatmPin;
           }, 3000);
    }else{
        mainScreen.innerHTML = facilityList;
    }
}

// for pin change
function pinchange(){
    mainScreen.innerHTML = pinchangePageWithform;
}

// pin verification
function change(){
    let oldpin = ""+document.getElementById('oldpin').value;
    let newpin1 = ""+document.getElementById('newpin1').value;
    let newpin2 =""+ document.getElementById('newpin2').value;
    if(oldpin != bank.atmPin){
        mainScreen.innerHTML = incorrectOldpinalert;
                setTimeout(()=>{
                    mainScreen.innerHTML = facilityList;
                }, 3000);
    }
    else if((newpin1.length == 4) && (newpin2.length == 4) && (newpin1 === newpin2)){
        mainScreen.innerHTML = pinchangedSuccessful;
        bank.setAtmPin(newpin1);
        setTimeout(()=>{
            mainScreen.innerHTML = facilityList;
        }, 3000);
    }else{
        mainScreen.innerHTML = pinmismatched;
                 setTimeout(()=>{
                    mainScreen.innerHTML = facilityList;
                }, 3000);
    }
}


// for Deposit
function deposit(){
    mainScreen.innerHTML = depositForm;
   
}
// continue deposit validation
function continueDeposit(){
    let amounttodeposit = Number.parseInt(document.getElementById('amountdeposit').value);
    if(amounttodeposit <= 0 || amounttodeposit > 100000){
        mainScreen.innerHTML = invalidamountdeposit;
                 setTimeout(()=>{
                    mainScreen.innerHTML = facilityList;
                }, 3000);
    }else{
        mainScreen.innerHTML = correctOrIncorrectForm;
        bank.setBalance(bank.currBalance +amounttodeposit)
        bank.transAmount.push(amounttodeposit);
        bank.transType.push("Deposited");
        bank.transDate.push(bank.date.toLocaleString());
    }
}
function Correct(){
    mainScreen.innerHTML = successfulDepositalert;
                 setTimeout(()=>{
                    mainScreen.innerHTML = facilityList;
                }, 3000);
}
function Incorrect(){
    mainScreen.innerHTML = incorrectDepositalert;
                 setTimeout(()=>{
                    mainScreen.innerHTML = facilityList;
                }, 3000);
}

function balanceEnquiry(){
    mainScreen.innerHTML = `<div id="page3">
                    <img src="./homepage.jpg" class="img">
                    <div class="choices">
                        <div class="press-cancel" style="margin-top: -70px; font-size: 2rem;">Total Available Balance : </div>
                        <div class="choice-1">
                            <div class="balance" style="width: 15rem;height: 3rem; font-size: 30px; border-bottom: 2px solid rgb(6, 6, 32);">${bank.viewBalance()} ₹</div>
                        </div>
                        <div class="press-cancel"> Press <span class="pressbtn" onclick = "proceed2()"> OK </span> to proceed.</div>
                    </div>
                 </div>`;
                 setTimeout(()=>{
                    mainScreen.innerHTML = facilityList;
                }, 3000);
}

function withraw(){
    mainScreen.innerHTML = withrawform;
}

function continueWithraw(){
    let amountwithraw = Number.parseInt(document.getElementById('amountwithraw').value);
    if(amountwithraw <= 0 || amountwithraw > bank.currBalance){
        mainScreen.innerHTML = invalidWithrawAmountalert;
                 setTimeout(()=>{
                    mainScreen.innerHTML = facilityList;
                }, 3000);
    }else{
        mainScreen.innerHTML = correctOrIncorrectForm;
        bank.setBalance(bank.currBalance - amountwithraw);
        bank.transAmount.push(amountwithraw);
        bank.transType.push("Withrawn");
        bank.transDate.push(bank.date.toLocaleString());
    }
}

function displayministatement(){
    mainScreen.innerHTML = displayMinistatement;  
    let table = document.querySelector('table');
    for(let i = 0 ; i < bank.transAmount.length; i++){
        // console.log(bank.transAmount[i])
        console.log(bank.transType[i])
        console.log(bank.transDate[i])
        let data = ` <tr>
                <td>${bank.transAmount[i]}</td>
                <td>${bank.transType[i]}</td>
                <td>${bank.transDate[i]}</td>
                </tr>`;
            table.innerHTML += data;
    } 

    setTimeout(()=>{
        mainScreen.innerHTML = facilityList;
    }, 4000);
}

let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn0 = document.getElementById('btn0');
let clr = document.getElementById('clr');
let cancel = document.getElementById('cancel');
let exit = document.getElementById('exit');
function myFun(){
    btn1.addEventListener('click', function(){
        document.querySelector('input').value += 1;
    })
    btn2.addEventListener('click', function(){
        document.querySelector('input').value += 2;
    })
    btn3.addEventListener('click', function(){
        document.querySelector('input').value += 3;
    })
    btn4.addEventListener('click', function(){
        document.querySelector('input').value += 4;
    })
    btn5.addEventListener('click', function(){
        document.querySelector('input').value += 5;
    })
    btn6.addEventListener('click', function(){
        document.querySelector('input').value += 6;
    })
    btn7.addEventListener('click', function(){
        document.querySelector('input').value += 7;
    })
    btn8.addEventListener('click', function(){
        document.querySelector('input').value += 8;
    })
    btn9.addEventListener('click', function(){
        document.querySelector('input').value += 9;
    })
    btn0.addEventListener('click', function(){
        document.querySelector('input').value += 0;
    })
    clr.addEventListener('click', function(){
        document.querySelector('input').value  = "";
    })

    cancel.addEventListener('click', function(){
        mainScreen.innerHTML = facilityList;
    })
    exit.addEventListener('click', function(){
    })
}
