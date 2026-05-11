let questions = [
    {
        q: "What is HTML?",
        options: ["Language", "Game", "Car", "Food"],
        answer: "Language"
    },
    {
        q: "What is CSS used for?",
        options: ["Styling", "Cooking", "Driving", "Painting"],
        answer: "Styling"
    }
];

let index = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].q;

    let buttons = document.getElementsByClassName("option");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = questions[index].options[i];
    }

    document.getElementById("result").innerText = "";
}

function checkAnswer(btn) {
    if (btn.innerText === questions[index].answer) {
        document.getElementById("result").innerText = "Correct 👍";
    } else {
        document.getElementById("result").innerText = "Wrong ❌";
    }
}

function nextQuestion() {
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerText = "Quiz Finished 🎉";
    }
}

loadQuestion();