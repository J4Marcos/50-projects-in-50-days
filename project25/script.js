const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    //window.scrollY > nav.offsetHeight +150)
    if(window.scrollY > window.innerHeight / 2) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }


}