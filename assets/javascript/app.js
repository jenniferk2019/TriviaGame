// Setting up the main functions of the quiz first
(function () {
    function buildQuiz() {
        // Variable to store the html output using const (tutor)
        const output = [];
        // Setting up each question now (used lambada function - stack to refer to "global/local scope") ...
        quizQuestions.forEach(
            (currentQuestion, questionNumber) => {
                // Save the user's answer choices for each one
                const answers = [];
                for (letter in currentQuestion.answers) {
                    // Radio button_jQuery function for html - MDN Wed Docs.mozailla.org & sitepoint.com
                    answers.push(
                        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter])
                }
      </label > `
      console.log(quizQuestions)
            );
        }

        output.push(
            `< div class="question" > ${ currentQuestion.question } </div >
                    <div class="answers"> ${answers.join("")} </div>`
        );
    });
// Merge the output with the html
quizContainer.innerHTML = output.join("");

function showResults() {
    // Getting the answers from the quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    // Keeping track of the user's answers
    var numCorrect = 0;
    // Then for each of the questions in the quiz ...
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name = question${ questionNumber }]: checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // If the answer is correct ...
        if (userAnswer === currentQuestion.correctAnswer) {
            // Then add to it the number of correct answers ...
            numCorrect++;
        }
    });

    // Finally, show the number of correct answers out of total listed in the quiz
    resultsContainer.innerHTML = `${ numCorrect } out of ${ quizQuestions.length } `;
}

// Setting up variables to store html tags for reference (tutor advised to use const so the value can't be re-assigned)
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
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

// Displaying the quiz first to user
buildQuiz();

// When submitting quiz display the results to the user
submitButton.addEventListener("click", showResults);
});