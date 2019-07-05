// // Variables
// // Set the questions for the quiz with the answers
// // Question 1
// var myQuestions = [
// {
//     prompt: "What is Barbie's signature color?",

//     answers: {
//         a: "Orange",
//         b: "Pink",
//         c: "Green",
//     },

//     correctAnswer: "b"
// },
// // Question 2
// {
//     prompt: "Who is Barbie's boyfriend?",

//     answers: {
//         a: "Ken",
//         b: "Voltron",
//         c: "GIJoe",
//     },

//     correctAnswer: "a"
// },
// // Question 3
// {
//     prompt: "What job does Barbie have?",

//     answers: {
//         a: "Fashion Model",
//         b: "President",
//         c: "Both",
//     },

//     correctAnswer: "c"
// },
// // Question 4
// {
//     prompt: "Where does Barbie live?",

//     answers: {
//         a: "Malibu",
//         b: "New York",
//         c: "Both",
//     },

//     correctAnswer: "c"
// },

// ];

// // Variable
// // Questions user got correct
// var score = 0; 

// // Loop through array
// // Get user response
// // Confirm users response as correct or not
// // Alert user their answer is correct or not
// for (var i=0; i < myQuestions.length; i++) {
//     var response = window.prompt(myQuestions[i].prompt)
// // If response is equal to current question then all is good
//     if (response == myQuestions [i].answer) {
// // Give an extra score when correct
// score++;
// alert ("Correct!");
//     } else {
//         alert ("Wrong!");
//     }
// }
// // Score: Tell the user how many questions they got right out of the total
// alert ("You got " + score + "/" + myQuestions.length);