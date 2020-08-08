
// timer count down
let startingTimer = 1;
let time = startingTimer * 60;

let timerEl = document.getElementById("timer");

let timer = setInterval(countDown, 1000);

function countDown() {


    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (time === 0) {
        clearInterval(timer)
    }

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
};

// create questions

let startQuestions = [
    { question: "What color is a warning sign?", answer: 4 },
    { question: "The most common type of parking on city streets is?", answer: 4 },
    { question: "When driving at night in a heavy fog, you must use:", answer: 1 },
    { question: "If you encounter a school bus stopped directly in front of a school to pick up or drop off children, you should", answer: 3 },
    { question: "If some of your guests want to drive home after drinking excessively, you should:", answer: 2 }
];
// create answers

let answers = [
    { "1": "Red and Black", "2": "Black and White", "3": "Orange and Black", "4": "Yellow and Black" },
    { "1": "Angle parking", "2": "Perpendicular parking", "3": "Parking lots", "4": "Parallel parking" },
    { "1": "Low beam headlights", "2": "High beam headlights", "3": "Parking lights", "4": "Hazard lights" },
    { "1": "Honk your horn to alert the children you are passsing.", "2": "Stop immediately", "3": "Pass at a speed of no more than 10 mph.", "4": "Pass at your usual speed." },
    { "1": "Offer them coffee before they leave", "2": "Invite them to stay overnight.", "3": "Tell them to wait have an hour before they drive.", "4": "Tell them to drink alot of water" },

];

console.log(
    answers[0][4],
    answers[0][4],
    answers[0][1],
    answers[0][3],
    answers[0][2],
)
// user score starts at 0
let userScore = 0;


$("#question").text(startQuestions[0].question);
$(".answer1").text(answers[0][1]);
$(".answer2").text(answers[0][2]);
$(".answer3").text(answers[0][3]);
$(".answer4").text(answers[0][4]);


let index = 0;

function renderQuestion() {
    if (index < startQuestions.length) {
        $("#question").text(startQuestions[index].question);
        $(".answer1").text(answers[index][1]);
        $(".answer2").text(answers[index][2]);
        $(".answer3").text(answers[index][3]);
        $(".answer4").text(answers[index][4]);
    } else if (time === 0) {
        $(".questionContainer").hide();
        $("#score").text(userScore)
    }
    else {
        $(".scoreEl").show();
        $(".playAgain").show();
        $(".questionContainer").hide();
        $("#score").text(userScore);
        clearInterval(timer)
    }
}


$(".answers").on("click", function () {
    var buttonStart = $(this).val();

    if (index < startQuestions.length) {
        if (
            parseInt(buttonStart) === parseInt(startQuestions[index].answer)
        ) {
            userScore++;
        } else {
            time -= 10
        }
        index++
        renderQuestion()
    }

});
// console.log(startQuestions[1].question, startQuestions[0].answer);


// take initials/ score and save to local storage 
// High score (local storage) and save initials
// conditions for keeping score


function saveScore() {
    const initials = $("#initials").val();
    scores = {
        user: initials,
        score: userScore
    }
    console.log("initials")

    localStorage.setItem("initials", JSON.stringify(scores));
 
};

$(".enterScore").on("click", saveScore)


