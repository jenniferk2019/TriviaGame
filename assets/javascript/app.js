// Setting up variables to store html tags for reference (tutor advised to use const so the value can't be re-assigned)
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const currentQuestion = document.getElementById("question")
const quizQuestions = [
    {
        // Setting up variables for questions using Javascript YouTube video by Mike Dane Tutorial #24

        questions: "What is Barbie's signature color?",
        answers: {
            a: "Orange",
            b: "Pink",
            c: "Green"
        },
        correctAnswer: "b"
    },
    {
        questions: "Who is Barbie's best friend?",
        answers: {
            a: "Ken",
            b: "Voltron",
            c: "Hulk"
        },
        correctAnswer: "a"
    },
    {
        questions: "Does Barbie like to dance?",
        answers: {
            a: "Maybe",
            b: "No",
            c: "Yes"
        },
        correctAnswer: "c"
    },
    {
        questions: "Where does Barbie live?",
        answers: {
            a: "Malibu",
            b: "New York",
            c: "Both"
        },
        correctAnswer: "c"
    },
    {
        questions: "What would Barbie wear to the gym?",
        answers: {
            a: "Sneakers",
            b: "Nothing",
            c: "Heels"
        },
        correctAnswer: "a"
    },
    {
        questions: "Does Barbie live in a Dreamhouse?",
        answers: {
            a: "No",
            b: "Yes",
            c: "Maybe"
        },
        correctAnswer: "b"
    },
    {
        questions: "What kind of job does Barbie have?",
        answers: {
            a: "Scientist",
            b: "Model",
            c: "Both"
        },
        correctAnswer: "c"
    },
    {
        questions: "What would Barbie wear to a ball?",
        answers: {
            a: "Gown",
            b: "Nothing",
            c: "Jeans"
        },
        correctAnswer: "a"
    }
];

//work on coding the radio button function for the quiz
var incorrect = 0;
var correct = 0;

function startQuiz () {
    //begin button that's seen in the beginning but then hides during the quiz
    $("#startButton").html("<button id='startButton'>Start<button>")
    $("#startButton").on("click", function () {
console.log("click working")
    });

}

///Now code the function to make the quiz questions appear************START HERE

startQuiz()

//submit button code function
//work on coding the function to tell user their score and update the score (you got __/10 right stuff)

//timer
var time = 30