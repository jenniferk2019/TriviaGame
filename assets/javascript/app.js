//submit the quiz function:

function submitQuiz() {

    //getting an answer for each question score
    function answerScore(quizQuest) {
        var radioButton = document.getElementsByName(quizQuest);

        for (var i = 0, length = radioButton.length; i < length; i++) {
            if (radioButton[i].checked) {
                var answerValue = Number(radioButton[i].value);
            }
        }
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    //calculate the score with the answerScore function
    var totalScore = (answerScore("q1") + answerScore("q2") + answerScore("q3") + answerScore("q4") + answerScore("q5") + answerScore("q6") + + answerScore("q7") + answerScore("q8"));
    console.log("totalScore: " + totalScore);

    //calculate the 'possible score' integer function:
    var questCount = document.getElementsByClassName("question");

    var questCounter = 0;

    for (var i = 0; i < questCount[i].length; i < length; i++) {
        var userChoice = questCount[i].value;
        console.log(userChoice);;
    }

    //the "total-score"
    var totalScore = "Your Score: " + numScore;

    // if 8 / 8,
    if (numScore === questCounter) {
        showScore = showScore
    };

    //html 'userScore' id
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function () {

    $('#submitButton').click(function () {
        $(this).addClass('hide');
    });
});