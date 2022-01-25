'use strict'

const billInputDOM = document.querySelector('#bill-amount'),
    personCountDOM = document.querySelector('#number-of-people'),
    billPerPersonDOM = document.querySelector('#total-per-person'),
    tipAmountDOM = document.querySelector('#tip-amount'),
    tip5 = document.querySelector('#five-percent'),
    tip10 = document.querySelector('#ten-percent'),
    tip15 = document.querySelector('#fifteen-percent'),
    tip20 = document.querySelector('#twenty-percent');
let billInput = billInputDOM.value,
    personCount = personCountDOM.value,
    activeTip = 15;

function addBill(e) {
    billInput = e.target.value;
    calculate()
}
function addPerson(e) {
    personCount = e.target.value > 0 ? e.target.value : 1;
    calculate()
}
function setActiveTip(e) {
    switch (e.target.value) {
        case "5%":
            activeTip = 5
            break;
        case "10%":
            activeTip = 10
            break;
        case "15%":
            activeTip = 15
            break;
        case "20%":
            activeTip = 20
            break;
        default:
            break;
    }
    calculate()
}
function calculate() {
    billPerPersonDOM.textContent = Math.ceil((billInput / personCount) * 100) / 100;
    tipAmountDOM.textContent = Math.floor(billInput * activeTip) / 100;
}
billInputDOM.addEventListener('input',addBill)
personCountDOM.addEventListener('input',addPerson)
tip5.addEventListener('change',setActiveTip)
tip10.addEventListener('change',setActiveTip)
tip15.addEventListener('change',setActiveTip)
tip20.addEventListener('change',setActiveTip)