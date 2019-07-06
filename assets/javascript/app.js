// Variables questions user got correct
var quest1;
var quest2; 
var quest3; 
var quest4; 
var quest5; 
var quest6; 
var quest7; 
var quest8; 
var quest9; 
var quest10; 

var score = 0;


// Set the question functions for the quiz with the answers

function quiz() {

    quest1 = document.quiz.quest1.value;
    quest2 = document.quiz.quest2.value;
    quest3 = document.quiz.quest3.value;
    quest4 = document.quiz.quest4.value;
    quest5 = document.quiz.quest5.value;
    quest6 = document.quiz.quest6.value;
    quest7 = document.quiz.quest7.value;
    quest8 = document.quiz.quest8.value;
    quest9 = document.quiz.quest7.value;
    quest10 = document.quiz.quest8.value;

    console.log(quest1)

    // Setting [if] statments to confirm users response as correct or not
    if (quest1 == "Pink") {
        score++; //score = score +1 - so if user gets this correct adds one point to score=0
    }

    if (quest2 == "Ken") {
        score++;
    }

    if (quest3 == "Both") {
        score++;
    }

    if (quest4 == "Both") {
        score++;
    }

    if (quest5 == "House") {
        score++;
    }

    if (quest6 == "Puppy") {
        score++;
    }

    if (quest7 == "Sneakers") {
        score++;
    }

    if (quest8 == "Pajamas") {
        score++;
    }

    if (quest9 == "Yes") {
        score++;
    }

    if (quest10 == "Yes") {
        score++;
    }
}

// Score: Tell the user how many questions they got right out of the total
// alert("You got " + score + "correct";
// document.getElementById("number_correct").innerHTML = "You got " + score;

var timer= document.getElementById("timer").innerText;

// Make sure document is ready before timer begins
// Start and Stop buttons
$(document).ready(function () {
    
    $("#start").click(function () {
        setInterval(function(){
            timer = timer - 1
        console.log(timer)

        }, 1000);
        //if statment to make the timer stop at 0
    });

    $("#stop").click(function () {
        $("div").stop();
    });

});