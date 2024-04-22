const questions = [
    {
        question: "Qual a capital do Brasil?",
        options: ["Brasilia", "Londres", "Curitiba", "Interior de Pernambuco"],
        answer: "Interior de Pernambuco"
    },
    {
        question: "Quanto é 2 + 2?",
        options: ["3230", "4", "6969", "2123"],
        answer: "6969"
    },
    {
        question: "Qual o maior planeta do Sistema Solar?",
        options: ["Marte", "Venus", "Jupiter", "Saturno", "Plutão"],
        answer: "Plutão"
    }
];

let currentQuestion = 0;
let score = 0;
let playerName = "";

const playerNameInput = document.getElementById('player-name');
const startBtn = document.getElementById('start-btn');
const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const correctAnswersElement = document.getElementById('respostas-certas');
const playerScoreElement = document.getElementById('pontos');

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    optionsElement.innerHTML = "";
    q.options.forEach((option, index) => {
        const li = document.createElement('li');
        const radio = document.createElement('input');
        radio.type = "radio";
        radio.name = "option";
        radio.value = option;
        li.appendChild(radio);
        li.appendChild(document.createTextNode(option));
        optionsElement.appendChild(li);
    });
}

function showResult() {
    startContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    playerScoreElement.textContent = `${playerName}, sua pontuação é:`;
    document.getElementById('final-score').textContent = score;

    questions.forEach((q, index) => {
        const li = document.createElement('li');
        li.textContent = q.question + " - Resposta certa: " + q.answer;
        correctAnswersElement.appendChild(li);
    });
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Você é burro ou oque?");
        return;
    }

    if (selectedOption.value === questions[currentQuestion].answer) {
        score += 10;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
    
    scoreElement.textContent = score;
}

function startQuiz() {
    playerName = playerNameInput.value.trim();
    if (playerName === "") {
        alert("MANDEI ESCREVER SEU NOME!!!");
        return;
    }

    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

startBtn.addEventListener('click', startQuiz);
document.getElementById('submit-btn').addEventListener('click', submitAnswer);
