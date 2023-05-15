const quizData = [{
    question: "Qual linguagem é executada em um navegador da web?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
    },
    {
    question: "O que significa CSS?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    },
    {
    question: "O que significa HTML?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    },
    {
    question: "Em que ano o JavaScript foi lançado?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "nenhum dos anteriores",
    correct: "b",
    },
    {
    question: "O que significa a sigla SQL?",
    a: "Structured Query Language",
    b: "Standard Query Language",
    c: "Simple Query Language",
    d: "Stylish Query Language",
    correct: "a",
    },
    {
    question: "Qual é a linguagem de programação usada para desenvolver aplicativos para iOS?",
    a: "Swift",
    b: "Java",
    c: "C++",
    d: "Python",
    correct: "a",
    },
    {
    question: "O que é um 'loop' em programação?",
    a: "Uma maneira de criar caixas de diálogo em um programa",
    b: "Uma técnica para depuração de código",
    c: "Uma declaração usada para criar uma função",
    d: "Um comando usado para repetir um bloco de código",
    correct: "d",
    },
    {
    question: "Qual é o principal objetivo do Git?",
    a: "Escrever código mais rápido",
    b: "Depurar código",
    c: "Gerenciar versões de código",
    d: "Proteger código contra ataques de hackers",
    correct: "c",
    },
    {
    question: "Qual é a diferença entre uma variável global e uma variável local em programação?",
    a: "Uma variável global é declarada dentro de uma função, enquanto uma variável local é declarada fora de uma função",
    b: "Uma variável global pode ser acessada de qualquer lugar no código, enquanto uma variável local só pode ser acessada dentro de uma função",
    c: "Não há diferença, as duas palavras se referem à mesma coisa",
    d: "Uma variável global armazena valores constantes, enquanto uma variável local armazena valores variáveis",
    correct: "b",
    },
    {
    question: "O que é uma API?",
    a: "Um aplicativo que permite que você edite fotos",
    b: "Um serviço que permite que você armazene arquivos na nuvem",
    c: "Um conjunto de padrões e protocolos para acessar um aplicativo da web",
    d: "Uma linguagem de programação popular para análise de dados",
    correct: "c",
    },
    ]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
    if(answerEl.checked) {
        answer = answerEl.id
    }
    })

    return answer
}

submit.addEventListener('click',  () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
           
            quiz.innerHTML = `
            <h2>Você respondeu ${score}/${quizData.length} questões corretas  ${darEmoji(score)}</h2>

            <button onclick='location.reload()'>reload</button>
            `
        }
    }
    
})

function darEmoji(nota) {

    let emoji; // variável para armazenar o emoji

    if (nota === 10) {
      emoji = "😎"; // emoji com óculos escuros para nota 10
    } else if (nota >= 9) {
      emoji = "😃"; // emoji feliz para nota acima de 9
    } else if (nota >= 7) {
      emoji = "🙂"; // emoji neutro para nota entre 7 e 8
    } else if (nota >= 5) {
      emoji = "😐"; // emoji desapontado para nota entre 5 e 6
    } else if (nota > 0) {
      emoji = "😢"; // emoji chorando para nota abaixo de 5
    } else {
      emoji = "💀"; // emoji de caveira para nota 0
    }

return emoji
}