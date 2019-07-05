// Variables
// Set the questions for the quiz with the answers
// Question 1
var myQuestions = [
{
    prompt: "What is Barbie's signature color?",

    answers: {
        a: "Orange",
        b: "Pink",
        c: "Green",
        d: "None"
    },

    correctAnswer: "b"
},
// Question 2
{
    prompt: "What kind of car does Barbie like to drive?",

    answers: {
        a: "Convertible",
        b: "Van",
        c: "Bus",
        d: "Truck"
    },

    correctAnswer: "a"
},
// Question 3
{
    prompt: "Who is Barbie's boyfriend?",

    answers: {
        a: "Batman",
        b: "Ken",
        c: "G.I. Joe",
        d: "Voltron"
    },

    correctAnswer: "b"
},
// Question 4
{
    prompt: "What job does Barbie have?",

    answers: {
        a: "Fashion Model",
        b: "President",
        c: "Doctor",
        d: "All the above"
    },

    correctAnswer: "d"
},
// Question 5
{
    prompt: "Where does Barbie live?",

    answers: {
        a: "Malibu",
        b: "Space",
        c: "New York",
        d: "Everywhere"
    },

    correctAnswer: "d"
},

];

// Variable
// Questions user got correct
var score = 0; 

// Loop through array
// Get user response
// Confirm users response as correct or not
// Alert user their answer is correct or not
for (var i=0; i < myQuestions.length; i++) {
    var response = window.prompt(myQuestions[i].prompt)
// If response is equal to current question then all is good
    if (response == myQuestions [i].answer) {
// Give an extra score when correct
score++;
alert ("Correct!");
    } else {
        alert ("Wrong!");
    }
}
// Score: Tell the user how many questions they got right out of the total
alert ("You got " + score + "/" + myQuestions.length);