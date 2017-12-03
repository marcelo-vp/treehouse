// Building the quiz constructor
function Quiz (questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

// Building quiz prototype methods
Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.guess = function (answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.hasEnded = function () {
    return this.currentQuestionIndex >= this.questions.length;
};