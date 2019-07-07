// Timer object pulled from activity 10
var clockRunning = false;
var timer = {

    time: 15,

    start: function () {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
            $("#timer").text(timer.time + " seconds")

        }
    },
    stop: function () {
        $("#submit").on("click", stop);
        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;


        //     $("#number_correct").click(function(){
        //       $("Congrats you got " + score + " correct").hide();
        //     });
        //     $("#show").click(function(){
        //       $("p").show();
        //     });
        //   });
    },

    count: function () {

        // DONE: increment time by 1.
        timer.time--;
        $("#timer").text(timer.time + " seconds")
        // If timer is equal to 0 need to display current results to user
        // Call end game
    }

};


// Setting up variables for questions using Javascript YouTube video by Mike Dane Tutorial #24
var questions = [
    {
        prompt: "What is Barbie's signature color?\n(a) Orange\n(b) Pink\n(c) Green",
        answer: "b"
    },
    {
        prompt: "Who is Barbie's boyfriend?\n(a) Ken\n(b) Voltron\n(c) Hulk",
        answer: "a"
    },
    {
        prompt: "What job does Barbie have?\n(a) Model\n(b) President\n(c) Both",
        answer: "c"
    },
    {
        prompt: "Where does Barbie live?\n(a) Malibu\n(b) New York\n(c) Both",
        answer: "c"
    },
    {
        prompt: "Barbie lives in a ____?\n(a) Condo\n(b) Dreamhouse\n(c) Shack",
        answer: "b"
    },
    {
        prompt: "What kind of pet does Barbie have?\n(a) Puppy\n(b) Fish\n(c) Parrot",
        answer: "a"
    },
    {
        prompt: "What would Barbie wear to exercise?\n(a) Heels\n(b) Sneakers\n(c) Both",
        answer: "b"
    },
    {
        prompt: "What would Barbie wear to a ball?\n(a) Jeans\n(b) Gown\n(c) Nothing",
        answer: "b"
    },
    {
        prompt: "Does Barbie like to dance?\n(a) No\n(b) Maybe\n(c) Yes",
        answer: "c"
    },
    {
        prompt: "Is Barbie famous?\n(a) Yes\n(b) No\n(c) Maybe",
        answer: "a"
    },
]

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
    console.log(score);
}

// Start and Stop buttons
// var timer= document.getElementById("timer").innerText;

$(document).ready(function () {

    $("#start").click(function () {
        timer.start();
    })

    $("#stop").click(function () {
        timer.stop();
        //if user clicks done call end game here as well - inside stop click function
    })


});



// Score: Tell the user how many questions they got right out of the total
// .text("You got " + score + "correct"; - .hide for form and .show for results 
//using jQuery make div to append results that will append to the html
//take in the value of those radio buttons 
//data tags for questions
//once timer works use same syntax to let user know how many they got correct