
$("#start").on("click", function(){
    game.start()

})

$(document).on("click", "#stop",function(){
    game.done()
})

var QuestionsArray =[{

    questions:"What is the % of water on earth?",
    answers:["51%", "61%", "71%","81%"],
    correctOne: "71%"
},
{
    questions:"How many seasons of game of thrones?",
    answers:["7", "8", "9","10"],
    correctOne: "8"
},
{
    questions:"How many jelly belly flavors are there?",
    answers:["50", "40", "30", "20"],
    correctOne: "50"
},
{   questions:"What year did steve jobs pass away?",
    answers:["2001", "2005", "2009", "2011"],
        correctOne: "2011"},
    
{    questions:"How many student in this class?",
     answers:["31", "32", "33", "34"],
     correctOne: "32"},

{   questions:"What color of the sun light appear to our eyes?",
    answers:["white", "clear", "rainbow", "yellow"],
    correctOne: "white"},


]


var timer;


var game = {
    correct: 0,
    incorrect: 0,
    time: 30,
    unanswered: 0,

    countdown: function(){
        game.time--;
        $("#time").html(game.time);
        if(game.time<=0){
            
            game.done();
        }
    },

    start: function (){

        timer = setInterval(game.countdown, 1000);
     
        $("#question").prepend('<h2 id="countdown">Time Remaining: <span id="time">30</span> Seconds</h2> <br>' )
        
    $("#start").remove();
   
    for(var i=0; i<QuestionsArray.length ; i++){
        $("#question").append("<h4><br>"+QuestionsArray[i].questions+"</h4>");
        for(var a=0; a<QuestionsArray[i].answers.length; a++){
          $("#question").append("<input type ='radio' name='question-" + i + "' value='" + QuestionsArray[i].answers[a] + "' /><span>" + QuestionsArray[i].answers[a] + "</span>");
        }

    }
       
    $("#question").append('<br> <br><br><button id="stop">Done</button>')
    },

    


    btn: function (){

   
        timer = setInterval(game.countdown, 1000);
        
        $("#question").prepend('<h2 id="countdown">Time Remaining: <span id="time">30</span> Seconds</h2> <br>' )
      
    $(btn).remove();
    
    for(var i=0; i<QuestionsArray.length ; i++){
        $("#question").append("<h2>"+QuestionsArray[i].questions+"</h2>");
        for(var a=0; a<QuestionsArray[i].answers.length; a++){
          $("#question").append("<input type ='radio' name='question-" + i + "' value='" + QuestionsArray[i].answers[a] + "' /><span>" + QuestionsArray[i].answers[a] + "</span>");
        }

    }
       
    $("#question").append('<br><br><button id="stop">Done</button>')
    },
    

  
    done: function(){
        clearInterval(timer);


        for (var i = 0; i < QuestionsArray.length; i++) {
            if (!$('input[name="question-' + i + '"]:checked').val()) {
                game.unanswered++;
            }
        }

        if ($('input[name="question-0"]:checked').val() === QuestionsArray[0].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    
        if ($('input[name="question-1"]:checked').val() === QuestionsArray[1].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
       
        if ($('input[name="question-2"]:checked').val() === QuestionsArray[2].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
       
        if ($('input[name="question-3"]:checked').val() === QuestionsArray[3].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        if ($('input[name="question-4"]:checked').val() === QuestionsArray[4].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        if ($('input[name="question-5"]:checked').val() === QuestionsArray[5].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }



        this.result();
    },


    result: function() {
        clearInterval(timer);
        $('#question h3').remove();
        $("#question").html("<h3 id='ll'>Here is your result :)<br></h2> <br>");

        $("#question").append("<h4 class='p'>Correct Answer: "+this.correct+"</h3>");
        $("#question").append("<h4 class='p'>Incorrect Answer: "+this.incorrect+"</h3>");
        $("#question").append("<h4 class='p'>Unanswered: "+game.unanswered+"</h3><br>");

          
    }
}