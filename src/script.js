
 const divLinkCards = document.querySelector('.projectslink')
 const projectslinks = []
 
 for (let num = 1 ; num < 50 || num == 50 ; num ++) {
    projectslinks.push(`https://j4marcos.github.io/50-projects-in-50-days/project${String(num).padStart(2,'0')}/index.html`)
 }

const pegarSite = new Promise((sucesso, falha) => {
    const site = require(link)  
    sucesso(site)
    falha(site)
})

projectslinks.forEach((link, num) => { 
    pegarSite
.then(site => site.text())
.then(data => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, 'text/html');

    var pageTitle = doc.title
    inserirCard(String(num), link, pageTitle)
})
.catch(error => console.error(error))

})




function inserirCard(num, link, title) {
    const card = document.createElement("div.card")
    const pLink = document.createElement('h3')
    pLink.innerHTML = `<a href="${link}" target="_blank" rel="next">${numpadStart(2,"0")} : ${title}</a>`
    pLink.appendChild(card)
    card.appendChild(divLinkCards)
}