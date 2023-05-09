
const config = document.querySelector('.config')
const container = document.querySelector('.container')

criarQuadro()

config.addEventListener('input' , () => 

criarQuadro())


function criarQuadro() {

container.innerHTML = ""
const quadro = document.querySelector('#quadro')
const quadrados = document.querySelector('#quadrados')
var raizDosSquares = quadrados.value
var ladoDoQuadro = quadro.value


document.documentElement.style.setProperty('--raiz-dos-square', raizDosSquares)

document.documentElement.style.setProperty('--lado-do-quadro', `${ladoDoQuadro}px`)


for (var c = 1 ; c <= raizDosSquares * raizDosSquares ; c++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseenter', () => {
       
        let cor = Math.floor(Math.random() * 355)
        square.style.backgroundColor = `hsl(${cor}, 100%, 50%)`
        square.style.boxShadow = `0 0 10px hsl(${cor}, 100%, 50%)`
    })
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = ``
        square.style.boxShadow = ``
    })


    container.appendChild(square)
}

}