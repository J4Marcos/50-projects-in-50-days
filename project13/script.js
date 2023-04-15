const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ""
        }, 10)

        randomSelect()
    }

})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(e => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = e
        tagsEl.appendChild(tagEl)

    })

}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandowTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)

    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandowTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandowTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}