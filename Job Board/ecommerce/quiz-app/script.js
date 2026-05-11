const quizData = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used for styling?",
        answers: [
            "HTML",
            "CSS",
            "Python"
        ],
        correct: 1
    },

    {
        question: "Which language is used for web interactivity?",
        answers: [
            "JavaScript",
            "C++",
            "Java"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");

function loadQuestion() {

    const current = quizData[currentQuestion];

    questionEl.innerText = current.question;

    answersEl.innerHTML = "";

    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.innerText = answer;

        button.classList.add("answer-btn");

        button.onclick = () => checkAnswer(index);

        answersEl.appendChild(button);
    });
}

function checkAnswer(index) {

    if (index === quizData[currentQuestion].correct) {
        score++;
    }
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    }

    else {
        questionEl.innerText = "Quiz Completed!";
        answersEl.innerHTML = "";
        scoreEl.innerText = "Your Score: " + score;
    }
}

loadQuestion();