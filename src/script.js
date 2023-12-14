
 const divLinkCards = document.querySelector('.projectslink')
 const projectslinks = []
 
 for (let num = 1 ; num <= 50 ; num ++) {
    projectslinks.push(`https://j4marcos.github.io/50-projects-in-50-days/project${num.padStart(2,'0')}/index.html`)
 }

const pegarSite = new Promise()

projectslinks.forEach((link, num) => { 
    pegarSite((sucesso, falha) => {
    const site = require(link)  
    sucesso(site)
    falha(site)
})
.then(site => site.text())
.then(data => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, 'text/html');

    var pageTitle = doc.title
    inserirCard(num, link, pageTitle)
})
.catch(error => console.error(error))

})




function inserirCard(num, title, pLink) {
    const card = document.createElement("div.card")
    const pLink = document.createElement('h3')
    pLink.innerHTML = `<a href="project${num.padStart(2,"0")}/index.html" target="_blank" rel="next">${numpadStart(2,"0")} : ${title}</a>`
    pLink.appendChild(card)
    card.appendChild(divLinkCards)
}