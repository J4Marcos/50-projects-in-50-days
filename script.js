




var fechou = false

for (var c = 1; c <= 50 && fechou == false; c++) {

    const div = document.querySelector('.projectslink')
    const pLink = document.createElement('p')
    let num = ""
    if (c < 10) {
        num = `0${c}`
    } else { num = c }

    // p chat gpt me mostrou como usar o fetch para acesar o um html externo!
    fetch(`https://j4marcos.github.io/50-projects-in-50-days/project${num}/index.html`)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');

            var pageTitle = doc.title

            // inserir no html 
           
            if (pageTitle === "Page not found · GitHub Pages"){

               

                const avisofinal = document.querySelector('#faltaProjetos')
                avisofinal.innerHTML = `ainda restam projetos serem concluidos`

               

            } else {
                pLink.innerHTML = `<h3><a href="project${num}/index.html" target="_blank" rel="next">project${num}</a></h3>${pageTitle}`

                div.appendChild(pLink)
            }
        })

        .catch(error => console.error(error))
}

