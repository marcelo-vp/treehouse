// Building the question constructor
function Question (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Building the 'check answer' prototype method
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};