let firstNum = null;
let secondNum = null;
let operator = null;

let display = document.querySelector('#display');

function add(num1, num2){
    return num1 + num2;
}   

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operate){
    switch(operate){
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
    }
}

function getNum(){
    let numbers = document.querySelector('#number');


    numbers.addEventListener('click', (event) => {


        if (event.target == event.currentTarget) {
            return}
        

        firstNum = event.target.id
        display.placeholder = firstNum;
    

    })
}



getNum();

