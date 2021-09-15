function phoneUpdateNumber(product, price, isIncreasing){
    const phoneInput = document.getElementById(product + '-number');
    let phoneNumber = phoneInput.value;
    if(isIncreasing == true){
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if(phoneNumber > 0){
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;

    const phoneTotal = document.getElementById(product + '-total');
    phoneTotal.innerText = phoneNumber * price;

    toCalculateNumber();

}

function getInputValue(product){
    const phoneInput =  document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function toCalculateNumber(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;

}

document.getElementById('phone-plus').addEventListener('click', function(){
    phoneUpdateNumber('phone', 1219, true);
  
})
document.getElementById('phone-minus').addEventListener('click', function(){
    phoneUpdateNumber('phone', 1219, false);
})

document.getElementById('case-plus').addEventListener('click', function(){
    phoneUpdateNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    phoneUpdateNumber('case', 59, false);
})
