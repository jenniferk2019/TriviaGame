// Variables
// Set the question functions for the quiz with the answers

function quiz() {

    var quest1 = document.quiz.quest1.value;
    var quest2 = document.quiz.quest2.value;
    var quest3 = document.quiz.quest3.value;
    var quest4 = document.quiz.quest4.value;
    var quest5 = document.quiz.quest5.value;
    var quest6 = document.quiz.quest6.value;
    var quest7 = document.quiz.quest7.value;
    var quest8 = document.quiz.quest8.value;
    var quest9 = document.quiz.quest7.value;
    var quest10 = document.quiz.quest8.value;

    // Questions user got correct
    var score = 0;

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
document.getElementById("number_correct").innerHTML = "You got " + score);

// Start and Stop buttons
$(document).ready(function(){
    $("#start").click(function(){
      //How to link timer to begin button?
    });

    $("#stop").click(function(){
      $("div").stop();
    });

// Stowatch timer variable and function to count down
var counter = 0;
var timeleft = 10;

        setInterval(function() {
            $('.Timer').text((10 - timeleft) / 1000 + " Seconds");
        }, 1000);

  });