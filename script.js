for (var c = 1; c <= 50; c++) {

    const divLinks = document.querySelector('.projectslink')
    const pLink = document.createElement('p')
    let num = ""
    if (c < 10) {
        num = `0${c}`
    } else { num = c }


    fetch(`https://j4marcos.github.io/50-projects-in-50-days/project${num}/index.html`)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');

            var pageTitle = doc.title
            // verificar se a página está pronta
            if (pageTitle === "Page not found · GitHub Pages") {
                // pular projetos que não estão prontos
                console.log(`Projeto ${num} não está pronto.`)
            } else {
                // inserir projeto no HTML
                pLink.innerHTML = `<div class='card'><h3><a href="project${num}/index.html" target="_blank" rel="next">project${num}</a></h3>${pageTitle}</div>`
                divLinks.appendChild(pLink)
            }

            if (true) {
                const cards = document.querySelectorAll('.card')
                const avisofinal = document.getElementById('msgFinal')
                avisofinal.innerHTML = `<div class='finalMsg' id='faltaProjetos'>ainda restam ${50 - cards.length} projetos a serem concluidos</div>`
            }
        })
        .catch(error => console.error(error))
}



const projects = document.querySelectorAll('.card');

for (let i = 0; i < projects.length; i++) {
    const expectedOrder = Number(i.toString().padStart(2, '0'))
  const projectName = projects[i].querySelector('a').getAttribute('href');
  if (projectName.includes(expectedOrder)) {
    location.reload(); // recarrega a página se as divs não estiverem na ordem esperada
    break;
  }
}