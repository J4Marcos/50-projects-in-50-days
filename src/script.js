const divLinkCards = document.querySelector('.projectslink')
const projectslinks = []
const lista = new Map
let ordem = 0

for (let num = 1; num < 50 || num == 50; num++) {
    projectslinks.push(`https://j4marcos.github.io/50ProjectsIn50Days/project${String(num).padStart(2, '0')}/index.html`)
}


projectslinks.forEach((link, num) => {
const pegarSite = new Promise((sucesso, falha) => {
    const site = fetch(link)
    sucesso(site)
    falha(site)
}) .then(site => site.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var pageTitle = doc.title
            fila(num, inserirCard(String(num + 1), link, pageTitle))
        })
        .catch(error => console.log(error))

})



function fila(ordem, func) {
lista.set(ordem,func)
if (lista.has(ordem)){
    lista.get(ordem)
    ordem++
    lista.delete(ordem)
}


}


function inserirCard(num, link, title) {
    const card = document.createElement("div")
    card.classList.add("card")
    const pLink = document.createElement('h3')
    pLink.innerHTML = `<a href="${link}" target="_blank" rel="next">${num.padStart(2,"0")} : ${title}</a>`
    divLinkCards.appendChild(card)
    card.appendChild(pLink)

}
