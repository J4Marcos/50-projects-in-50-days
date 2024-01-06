const divLinkCards = document.querySelector('.projectslink')

function inserirCards(pages = []) {
    // console.log(pages);
    pages.forEach((page, index) => {
        const card = document.createElement("div")
        card.classList.add("card")
        const pLink = document.createElement('h3')
        const numeral = String(index + 1).padStart(2, "0")
        pLink.innerHTML = `<a href="project${numeral}" target="_blank" rel="next">${numeral} : ${page.title}</a>`
        divLinkCards.appendChild(card)
        card.appendChild(pLink)
    });

}

async function getCards() {
    const linksList = []
    let n
    for (n = 1; n <= 50; n++) linksList.push(`project${String(n).padStart(2, '0')}`)
    const requests = linksList.map((link) => fetch(link).then(res => res.text()))
    Promise.all(requests)
        .then((html) => {
            const parser = new DOMParser()
            const pages = html.map(text => parser.parseFromString(text, 'text/html'))
            inserirCards(pages)
        })

}

getCards()






