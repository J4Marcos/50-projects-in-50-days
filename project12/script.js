const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(oioi => {
    oioi.addEventListener('click', () => {
        oioi.parentNode.classList.toggle('active')
    })
})


