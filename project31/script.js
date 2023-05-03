const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandowLower,
    upper: getRandowUpper,
    number: getRandowNumber,
    symbol: getRandowSymbol
}

generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    
})

function generatePassword(lower, upper, number, symbol, lenght) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol 
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0) {
        return ''
    }

    for(let i = 0 ; i < lenght; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, lenght)

    return finalPassword
}


function getRandowLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandowUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandowNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandowSymbol() {
    const symbols = '!@#$%¨&*()_+=-[{]}/?;:.,'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

