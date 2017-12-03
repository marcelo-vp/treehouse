// Creating quesitons
var questions = [
    new Question ('Where do you work at?',['CervejAqui','Magazine Luiza'],'Magazine Luiza'),
    new Question ('Which is your favorite sport?',['Tennis','Swimming'],'Swimming')
];

// Creating quiz
var quiz = new Quiz (questions);

// Displaying quiz
QuizUI.displayNext();