const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiBtn = document.getElementById('multi')
const divisionBtn = document.getElementById('division')
const resultElement = document.getElementById('resultSum')
const submitBtn = document.getElementById('presscalc1')
const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiBtn.onclick = function () {
    action = '*'
}

divisionBtn.onclick = function () {
    action = '/'
}

function calcNumbers (input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    
    if ( actionSymbol == '+' ) {
        return num1 + num2
    }

    if ( actionSymbol == '-' ) {
        return num1 - num2
    }

    if ( actionSymbol == '*' ) {
        return num1 * num2
    }

    if ( actionSymbol == '/' ) {
        return num1 / num2
    }

}

submitBtn.onclick = function () {
    const summary = calcNumbers (inp1, inp2, action)
    resultElement.textContent = summary
}