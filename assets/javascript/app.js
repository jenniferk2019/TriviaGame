// Timer object pulled from activity ten
var timer = {

  time: 15,

  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    timer.time--; 
    $("#timer").text(timer.time + " seconds")
  }

};

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
var intervalId;


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

// Start and Stop buttons
// start: function() {
//     if (!clockRunning) {
//         interv
//     }
// }

// Score: Tell the user how many questions they got right out of the total
// alert("You got " + score + "correct";
// document.getElementById("number_correct").innerHTML = "You got " + score);
// document.getElementById("number_correct").innerHTML = "You got " + score;

// var timer= document.getElementById("timer").innerText;

// Make sure document is ready before timer begins
// Start and Stop buttons
// $(document).ready(function(){
//     $("#start").click(function(){
      //How to link timer to begin button?
//     });
// $(document).ready(function () {

//     $("#start").click(function () {
//         setInterval(function(){
//             timer = timer - 1
//         console.log(timer)

//     $("#stop").click(function(){
//       $("div").stop();
//         }, 1000);
        //if statment to make the timer stop at 0
    // });

// Stowatch timer variable and function to count down
// var counter = 0;
// var timeleft = 10;

//         setInterval(function() {
//             $('.Timer').text((10 - timeleft) / 1000 + " Seconds");
//         }, 1000);
//     $("#stop").click(function () {
//         $("div").stop();
//     });





// $(document).ready(function () {

//     $("#start").click(function () {
//         setInterval(function () {
//             timer = timer - 1
//         }, 1000);
        
//     });


//     $("#stop").click(function () {
//         if (timer) {
//             timer = 0;
//         ;
//         }
//     });


// Score: Tell the user how many questions they got right out of the total
// alert("You got " + score + "correct";
// document.getElementById("number_correct").innerHTML = "You got " + score;

//update the value inside the timer
//take in the value of those radio buttons 
//data tags for questions
//once timer works use same syntax to let user know how many they got correct