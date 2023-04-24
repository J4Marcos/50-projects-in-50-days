// const fs = require('fs/promises')
// const path = require('path')

// var NDeProjects = 0

// fs.readdir(path.join('/', 'Users', 'cicer', 'OneDrive', 'Documentos', 'vs code', 'curso 50 projetos', '50-projects-in-50-days')).then(files => {
//     const projects = files.filter(file => file.includes('project') && file.length == 9)
//     console.log(projects)
//     NDeProjects = projects.length
// })



for (var c = 1; c <= 23; c++) {

    const div = document.getElementsByClassName('projectslink')[0]
    const pLink = document.createElement('p')
    let num = ""
    if (c < 10) {
        num = `0${c}`
    } else { num = c }

    pLink.innerHTML = `<h3><a href="project${num}/index.html" target="_blank" rel="next">project${num}</a></h3>+++`

    div.appendChild(pLink)

}

console.log() 