//esse codigo fiz eu mesmo 
const quadro = document.querySelector('.image-container')
const btnRight = document.querySelector('#right')
const btnLeft = document.querySelector('#left')
const imgs = document.querySelectorAll('img')
var posicao = 0


setInterval(moverQuadro , 10000)


function moverQuadro(pular = 1) {
posicao += pular
    if (posicao >= imgs.length) {
        posicao = 0} else if (posicao < 0) 
        { posicao = imgs.length - 1}
    

    quadro.style.transform = `translateX(-${posicao}00%)`
}


btnRight.addEventListener('click', () => { 
moverQuadro(1)})
btnLeft.addEventListener('click', () => {
moverQuadro(-1)})

//falta resetar o setinterval quando clicar next ou prev