//submit the quiz function and check the answers:
$( document ).ready(function() {
    var count = 0;
    var counter = 0;
    var intervalId;
    
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
      

    function check() {
        timer.start();
        var q1 = document.quizform.q1.value;
        var q2 = document.quizform.q2.value;
        var q3 = document.quizform.q3.value;
        var q4 = document.quizform.q4.value;
        var q5 = document.quizform.q5.value;
        var q6 = document.quizform.q6.value;
        var q7 = document.quizform.q7.value;
        var q8 = document.quizform.q8.value;
    
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
        alert("you got " + count + " correct");
    }
    
    // Hide quiz until user hits start button to begin quiz:
        // Hide the form
        $("#form").hide();
        //show the form
        $(".start-button").click(function start() {
            $("#form").show();
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        });
    
        function decrement() {
            timer.time--;
            $("#clock").html(timer.time);
            if (timer.time === 0) {
                stop();
                alert("Times Up!");
            }
        }
    
    
        // $("#start").on("click", run);
        // $("#stop").on("click", stop);
    
        // function run() {
    
});