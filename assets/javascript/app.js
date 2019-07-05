// Variables
// Set the questions for the quiz with the answers

function () {

    var quest1 = document.quiz.quest1.value;
    var quest2 = document.quiz.quest2.value;
    var quest3 = document.quiz.quest3.value;
    var quest4 = document.quiz.quest4.value;
    
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
}

// Score: Tell the user how many questions they got right out of the total
// alert("You got " + score + "/" + myQuestions.length);