const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clicou = false
//pra simplificar so coloque dbclick event
loveMe.addEventListener('click', (e) => {
    if (clicou == true) {
        //ativar coração
      createHeart(e)
    } else {
        clicou = true
        setTimeout(() => {
            clicou = false
        }, 500);
    }
    
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    

    const xInside = x - leftOffset
    const yInside = y - topOffset

    // console.log(xInside,"  " ,yInside)
    
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
}