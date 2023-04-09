const labels = document.querySelectorAll('.form-control label')




labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})


function roubar() {
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')

    alert(`tome cuidado com quem vc dar suas informações seu trouxa! (${email.value}) (${senha.value}), email e senha, Perdeu vacilão!`)
}