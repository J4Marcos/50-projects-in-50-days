const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'notificação 1',
    'notificação 2',
    'notificação 3',
    'notificação 4',
    'notificação 5',
    'notificação 6',
    'notificação 7'
]
button.addEventListener('click', () => createNotification('invalido', 'error'))

function createNotification (message = null, type = null) {
// criar div notification 
// colocar classe
// atribuir um message aleatorio
// adicionar a area de notificaçoes
    const novaNotification = document.createElement('div')
    novaNotification.classList.add('toast')
    novaNotification.classList.add(type ? type : 'info')
    const mensagemAleatorioIdx = Math.floor(Math.random() * messages.length)
    novaNotification.innerHTML = message ? message : messages[mensagemAleatorioIdx]

    toasts.appendChild(novaNotification)

    // setTimeout(() => {
    //  toasts.removeChild(toasts.children[0])   
    // }, 3000);

    setTimeout(() => {
        novaNotification.remove()
    }, 3000);
}

