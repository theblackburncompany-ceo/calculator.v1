const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', 'x', '÷', '%', 'C', '=']

let firstValue = ''
let secondValue = ''
let symbol  = ''
let result = ''

const calculate = () => {
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)

  if (symbol === '+') result = firstValue + secondValue
  if (symbol === '-') result = firstValue - secondValue
  if (symbol === 'x') result = firstValue * secondValue
  if (symbol === '÷') result = firstValue / secondValue
  if (symbol === '%') result = firstValue % secondValue

  display.innerText = result
  firstValue = result
  secondValue = ''
}

for (let button of controlButtons) {
  button.addEventListener('click', () => {
    const { innerText: btnValue } = button
    const btnValueIsSymbol = allSymbols.includes(btnValue)

    if (!secondValue && btnValue === '=') return null

    if (btnValue === 'C') {
      firstValue = secondValue = symbol = ''
      return display.innerText = ''
    }

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate()
      symbol = btnValue
    }

    // if there's no symbol, user is inputting first value
    else if (!symbol) firstValue += btnValue
    // if there's a symbol, that means user is inputting the second value
    else if (symbol) secondValue += btnValue
    // do not display equal symbol
    if (btnValue !== '=') display.innerText += btnValue
  })
}

/* ADD backspace tech to open button on calculator (v2) */
/* ADD functionality IF last character in display = symbol, then replace with the last selected symbol (v2) */
/* BUG FIX when result is ZERO after a calculation, calculator no longer calculates unless cleared out (v2) */







