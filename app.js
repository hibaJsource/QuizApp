function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("When was BTS debuted?", ["2010", "2016","2013", "2018"], "2013"),
    new Question("Who is called The Golden Maknae?", ["Jungkook", "RM", "Suga", "J-Hope"], "Jungkook"),
    new Question("What is the stage name of Kim Taehyung?", ["Jin", "V","Jimin", "Suga"], "V"),
    new Question("RM, J-Hope and Suga belong to....?", ["Dance Line", "Rappers Line", "Vocals Line", "Visuals Line"], "Rappers Line"),
    new Question("Who is the Leader of the group?", ["Jimin", "Jin", "V", "RM"], "RM")    

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();