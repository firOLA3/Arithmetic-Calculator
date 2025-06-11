function multiply() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    // console.log(firstNumber, secondNumber);
    const product = firstNumber * secondNumber
    console.log(product);
    answer.innerHTML = product
}


function subtract() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const subtract = firstNumber - secondNumber;
    console.log(subtract);
    answer.innerHTML = subtract
}

function divide() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const divide = firstNumber / secondNumber;
    console.log(divide);
    answer.innerHTML = divide
}

function add() {
    let firstNumber = Number(numberOne.value);
    let secondNumber = Number(numberTwo.value);
    let add = firstNumber + secondNumber;
    console.log(add);
    answer.innerHTML = add
}