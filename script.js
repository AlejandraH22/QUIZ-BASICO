const quizData = [
    {
        question: "Que idioma se ejecuta en un navegador?",
        a: "Java",
        b: "JavaScrip",
        c: "Python",
        d: "Ninguna de las anteriores",
        correct: "b",
    },
    {
        question: "¿Como se le llama a los números enteros en la programación?",
        a: "String",
        b: "Bool",
        c: "Char",
        d: "Int",
        correct: "d",
    },
    {
        question: "¿Quien creo Python?",
        a: "Alan Turing",
        b: "Guido Van Rossum",
        c: "Dennis Ritchie",
        d: "Fred  Cohen",
        correct: "b",
    },
    {
        question: "¿Qué significa HTML?",
        a: "Lenguaje de marcado de hipertexto",
        b: "Lenguaje de rebajas de hipertexto",
        c: "Lenguaje de máquina Hyperloop",
        d: "Helicópteros Terminales Lanchas Lamborginis",
        correct: "a",
    },
    {
        question: "¿Que signica CSS?",
        a: "Hojas de estilo centrales",
        b: "Hojas de estilo en cascada",
        c: "Hojas simples en cascada",
        d: "Coches Todoterrenos Veleros",
        correct: "b",
    },
    {
        question: "¿En qué año se lanzó JavaScript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Ninguna de las anteriores",
        correct: "b",
    },
    {
        question: "¿Qué año se lanzo Python?",
        a: "1994",
        b: "1985",
        c: "1989",
        d: "1996",
        correct: "c",
    },
    {
        question: "¿Que es la programación?",
        a: "Serie de órdenes dirigidas a un ordenador, para que lleve a cabo las acciones a realizar",
        b: "Proceso por el cual se limpia, codifica, traza y protege el código fuente de programas computacionales, en otras palabras, es indicarle a la computadora lo que tiene que hacer",
        c: "Ninguna de las anteriores",
        d: "a y b",
        correct: "d",
    },
    {
        question: "¿Como se le llama a la cadena tipo texto en la programación?",
        a: "String",
        b: "Bool",
        c: "Char",
        d: "Int",
        correct: "a",
    },
    {
        question: "¿Cúal es el modulo en asignación?",
        a: "a+=b",
        b: "a*=b",
        c: "a**=b",
        d: "a%=b",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

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

submitBtn.addEventListener('click', () => {
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
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})