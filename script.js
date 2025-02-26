let questions = [
    {
        question:"#example {transform: (20deg);}" ,
        options: ["translate", "rotate", "scaleY", "scaleX"],
        answer: 1
    },
    {
        question: "What is a correct way to add a background color to an HTML document?",
        options: ["<body style='background-color:pink;'>", "<body style='background-color:pink;'/>","<body background-color='pink;'>"],
        answer: 0 
    },
    {
        question: "What is another HTML element used when defining image maps?",
        options: ["The <map> element","The <area> element","The <content> element",],
        answer: 1 
    },
   
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("option1").innerHTML = questions[currentQuestion].options[0];
document.getElementById("option2").innerHTML = questions[currentQuestion].options[1];
document.getElementById("option3").innerHTML = questions[currentQuestion].options[2];
document.getElementById("option4").innerHTML = questions[currentQuestion].options[3];

document.getElementById("option1").addEventListener("click", checkAnswer);
document.getElementById("option2").addEventListener("click", checkAnswer);
document.getElementById("option3").addEventListener("click", checkAnswer);
document.getElementById("option4").addEventListener("click", checkAnswer);

function checkAnswer() {
    let userAnswer = parseInt(this.id.substring(6)) - 1;
    if (userAnswer === questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect!";
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById("question").innerHTML = "The Qize is over!";
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";
        document.getElementById("option4").style.display = "none";
        document.getElementById("result").innerHTML = "Your score is " + score + "/" + questions.length;
    } else {
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        document.getElementById("option1").innerHTML = questions[currentQuestion].options[0];
        document.getElementById("option2").innerHTML = questions[currentQuestion].options[1];
        document.getElementById("option3").innerHTML = questions[currentQuestion].options[2];
        document.getElementById("option4").innerHTML = questions[currentQuestion].options[3];
    }
}



