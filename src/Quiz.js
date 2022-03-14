// Quiz part of website

const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const answerOne = document.getElementById("answer-one");
const answerTwo = document.getElementById("answer-two");
const answerThree = document.getElementById("answer-three");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")



let currentQuestion = 0;
let score = 0;

let questions = [
    {
        question: "How do you feel today?",
        answers: [
            {option: "Great / Happy / Energetic", answer: true},
            {option: "Okay / Normal", answer: true},
            {option: "Bad Day / Tired / Meh", answer: true},
        ]
    },
    {
        question: "Do you feel like cooking?",
        answers: [
            {option: "Yes! Let's go!", answer: true},
            {option: "50/50", answer: true},
            {option: "Not at all!", answer: true},
        ]
    },
    {
        question: "For how many people are you cooking?",
        answers: [
            {option: "Myself", answer: true},
            {option: "2-4 People", answer: true},
            {option: "More than 4 people", answer: true},
        ]
    }
]


restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);


function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    answerOne.innerHTML = questions[currentQuestion].answers[0].option;
    answerOne.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwo.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    answerThree.innerHTML = questions[currentQuestion].answers[2].option;
    answerThree.onclick = () => {
        if(questions[currentQuestion].answers[2].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    prevBtn.classList.add("hide");
}

beginQuiz();



function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    answerOne.classList.remove("hide");
    answerTwo.classList.remove("hide");
    answerThree.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}



function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    answerOne.innerHTML = questions[currentQuestion].answers[0].option;
    answerOne.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwo.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    answerThree.innerHTML = questions[currentQuestion].answers[2].option;
    answerThree.onclick = () => {
        if(questions[currentQuestion].answers[2].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    prevBtn.classList.remove("hide");
}




function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    answerOne.innerHTML = questions[currentQuestion].answers[0].option;
    answerOne.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwo.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    answerThree.innerHTML = questions[currentQuestion].answers[2].option;
    answerThree.onclick = () => {
        if(questions[currentQuestion].answers[2].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    nextBtn.classList.remove("hide");
}


function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    answerOne.classList.add("hide");
    answerTwo.classList.add("hide");
    answerThree.classList.add("hide");
    questionText.innerHTML ="Here are some options for you!"
}