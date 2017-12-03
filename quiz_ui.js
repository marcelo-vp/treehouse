// Creating QuizUI
var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        }
        else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    populateIdWithHtml: function (id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    displayQuestion: function () {
        this.populateIdWithHtml('question', quiz.getCurrentQuestion().text);
    },
    displayChoices: function () {
        var choices = quiz.getCurrentQuestion().choices;
        for (var i=0; i<choices.length; i++) {
            this.populateIdWithHtml('choice' + i, choices[i]);
            this.guessHandler('guess' + i, choices[i]);
        }
    },
    displayScore: function () {
        var gameOverHtml = '<h1>Game over</h1>';
        gameOverHtml += '<h2> Your score is: ' + quiz.score + '</h2>';
        this.populateIdWithHtml('quiz',gameOverHtml);
    },
    displayProgress: function () {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHtml('progress', 'Question ' + currentQuestionNumber + ' of ' + quiz.questions.length);
    },
    guessHandler: function (id, guess) {
        var button = document.getElementById(id);
        button.onclick = function () {
            quiz.guess(guess);
            QuizUI.displayNext();
        };
    }
};