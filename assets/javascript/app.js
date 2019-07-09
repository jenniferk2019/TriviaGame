//submit the quiz function and check the answers:
function check() {
    var q1 = document.quizform.q1.value;
    var q2 = document.quizform.q2.value;
    var q3 = document.quizform.q3.value;
    var q4 = document.quizform.q4.value;
    var q5 = document.quizform.q5.value;
    var q6 = document.quizform.q6.value;
    var q7 = document.quizform.q7.value;
    var q8 = document.quizform.q8.value;

    var count = 0;
    //adding a point to the user's score when answering each question correctly:
    if (q1 == "b") {
        count++;
    }
    if (q2 == "a") {
        count++;
    }
    if (q3 == "c") {
        count++;
    }
    if (q4 == "c") {
        count++;
    }
    if (q5 == "b") {
        count++;
    }
    if (q6 == "a") {
        count++;
    }
    if (q7 == "c") {
        count++;
    }
    if (q8 == "c") {
        count++;
    }
    alert("you got " +count+" correct");
}