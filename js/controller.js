//This accepts an array of questions
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;

//this gets the current question you currently
  Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
  }

  Quiz.prototype.isEnded = function () {
 
    return this.questions.length === this.questionIndex;

  }

  Quiz.prototype.guess = function (id, answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
      document.getElementById(id).style.backgroundColor = 'green'
    } else {
      let Answer = document.querySelector('.ans')
      Answer.innerHTML = `Answer: ${ this.getQuestionIndex().Answer()}`
    }
    this.questionIndex++;
  }
}