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

//When the window loads the quiz display the timer
$("#timer").text("00:15");

function timedText() {
    setTimeout(myTimeout1, 15000) 
    setTimeout(myTimeout2, 14000) 
    setTimeout(myTimeout3, 13000)
    setTimeout(myTimeout4, 12000) 
    setTimeout(myTimeout5, 11000) 
    setTimeout(myTimeout6, 10000) 
    setTimeout(myTimeout7, 9000) 
    setTimeout(myTimeout8, 8000) 
    setTimeout(myTimeout9, 7000) 
    setTimeout(myTimeout10, 6000) 
    setTimeout(myTimeout11, 5000) 
    setTimeout(myTimeout12, 4000) 
    setTimeout(myTimeout13, 3000) 
    setTimeout(myTimeout14, 2000) 
    setTimeout(myTimeout15, 1000)
    setTimeout(myTimeout16, 0000)   
  }
  function myTimeout16() {
    document.getElementById("timer").innerHTML = "0 seconds";
  }
  function myTimeout15() {
    document.getElementById("demo").innerHTML = "1 seconds";
  }
  function myTimeout14() {
    document.getElementById("demo").innerHTML = "2 seconds";
  }
  function myTimeout13() {
    document.getElementById("demo").innerHTML = "3 seconds";
  }
  function myTimeout12() {
    document.getElementById("demo").innerHTML = "4 seconds";
  }

  function myTimeout11() {
    document.getElementById("demo").innerHTML = "5 seconds";
  }

  function myTimeout10() {
    document.getElementById("demo").innerHTML = "6 seconds";
  }

  function myTimeout9() {
    document.getElementById("demo").innerHTML = "7 seconds";
  }

  function myTimeout8() {
    document.getElementById("demo").innerHTML = "8 seconds";
  }

  function myTimeout7() {
    document.getElementById("demo").innerHTML = "9 seconds";
  }
  function myTimeout6() {
    document.getElementById("demo").innerHTML = "10 seconds";
  }

  function myTimeout5() {
    document.getElementById("demo").innerHTML = "11 seconds";
  }

  function myTimeout4() {
    document.getElementById("demo").innerHTML = "12 seconds";
  }

  function myTimeout3() {
    document.getElementById("demo").innerHTML = "13 seconds";
  }

  function myTimeout2() {
    document.getElementById("demo").innerHTML = "14 seconds";
  }

  function myTimeout1() {
    document.getElementById("demo").innerHTML = "15 seconds";
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