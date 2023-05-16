bancoDeImagens = ['https://images4.alphacoders.com/105/thumbbig-1050982.webp','https://images2.alphacoders.com/107/thumbbig-1077792.webp','https://images4.alphacoders.com/107/thumbbig-1077524.webp','https://images2.alphacoders.com/107/thumbbig-1077528.webp','https://images6.alphacoders.com/107/thumbbig-1077823.webp','https://images7.alphacoders.com/107/thumbbig-1074610.webp','https://images3.alphacoders.com/107/thumbbig-1074249.webp','https://images6.alphacoders.com/106/thumbbig-1069233.webp','https://images5.alphacoders.com/104/thumbbig-1049371.webp','https://images2.alphacoders.com/104/thumbbig-1046463.webp','https://images5.alphacoders.com/107/thumbbig-1077984.webp','https://images8.alphacoders.com/107/thumbbig-1077840.webp','https://images8.alphacoders.com/107/thumbbig-1077623.webp','https://images4.alphacoders.com/107/thumbbig-1072512.webp','https://images6.alphacoders.com/104/thumbbig-1047038.webp','https://images4.alphacoders.com/107/thumbbig-1078223.webp','https://images6.alphacoders.com/107/thumbbig-1077673.webp','https://images8.alphacoders.com/107/thumbbig-1077660.webp','https://images7.alphacoders.com/107/thumbbig-1077508.webp','https://images7.alphacoders.com/107/thumbbig-1073295.webp']
let idxJaEscolhido = []

const container = document.querySelector('.container')

for (i = 0; i < bancoDeImagens.length ; i++) {
    const imgAleatoria = idxAleatorio()
    const imgLink = document.createElement('a')
    imgLink.href = bancoDeImagens[imgAleatoria]
    const img = document.createElement('img')
    img.src = bancoDeImagens[imgAleatoria]
    console.log(img)
    img.classList.add('img')
    imgLink.target = '_blank'
    imgLink.appendChild(img)
    container.appendChild(imgLink)
}

function idxAleatorio() {
    const idxRandom = Math.floor(Math.random() * bancoDeImagens.length) 
    if (!idxJaEscolhido.includes(idxRandom)) {
        idxJaEscolhido.push(idxRandom)
        return idxRandom
    } else {
        return idxAleatorio();
    }
}

const h1 = document.querySelector('h1')
h1.innerHTML = `${bancoDeImagens.length} das melhores imagens`