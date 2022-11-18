//Handle deposit button step-1
document.getElementById('deposit-Button').addEventListener('click', function () {
    //console.log('button Clicked')

    //   get deposit input value step-2
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmountInputField = parseFloat(depositAmountText);
    // console.log(depositAmountText)

    // get Current diposited Amount step-3
    const dipositedAmount = document.getElementById('currentdepositedAmount');
    const dipositedAmountText = dipositedAmount.innerText;
    // console.log(dipositedAmountText)
    const dipositAmountDashboard = parseFloat(dipositedAmountText);

    // set input value in the  current balance step-4
    dipositedAmount.innerText = depositAmountInputField + dipositAmountDashboard;


    // clear input Field - step -5
    depositInput.value = '';


    // update main balance in dashboard 
    const mainBalance = document.getElementById('main-balance');
    //console.log('click main')

    const previousMainBalance = parseFloat(mainBalance.innerText);
    //  mane hocche innerText er modde set korte hoy
    mainBalance.innerText = previousMainBalance + depositAmountInputField;
    //  console.log(previousMainBalance + depositAmountInputField)
});


// handle withdraw button

document.getElementById('withdraw-Button').addEventListener('click', function () {
    //console.log('clicked withdraw')

    // step 2 get inputWithdraw value from input field
    const inputWithdraw = document.getElementById('withdraw-input');
    const inputWithdrawField = parseFloat(inputWithdraw.value);
    //console.log(inputWithdrawField)

    // get current Amount of withdrawfield

    const withdrawCurrentAmount = document.getElementById('withdrawAmount');
    //console.log(withdrawCurrentAmount.innerText)
    const withdrawAmountTotal = parseFloat(withdrawCurrentAmount.innerText);
    withdrawCurrentAmount.innerText = inputWithdrawField + withdrawAmountTotal;

    // withdraw ammout minus from main account 
    // update main balance in dashboard 
    const mainBalance = document.getElementById('main-balance');
    //console.log('click main')

    const previousMainBalance = parseFloat(mainBalance.innerText);
    //  mane hocche innerText er modde set korte hoy
    mainBalance.innerText = previousMainBalance - inputWithdrawField;

    // clear input field 
    inputWithdraw.value = '';
})