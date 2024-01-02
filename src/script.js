const divLinkCards = document.querySelector('.projectslink')

function inserirCard(num, html) {
    const card = document.createElement("div")
    card.classList.add("card")
    const pLink = document.createElement('h3')
    const numeral = String(num).padStart(2, "0")
    pLink.innerHTML = `<a href="project${numeral}" target="_blank" rel="next">${numeral} : ${html.title}</a>`
    divLinkCards.appendChild(card)
    card.appendChild(pLink)

}

async function getCards() {
    for (let n = 1; n <= 50; n++) {
        const getSiteData = await fetch(`project${String(n).padStart(2, '0')}`)
        .then((data) => data.text())
        .then((data) => {
            var parser = new DOMParser()
            var html = parser.parseFromString(data, 'text/html')
            inserirCard(n,html)
        })
    }
}

getCards()
    
    




