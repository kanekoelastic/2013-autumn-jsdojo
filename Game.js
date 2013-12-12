var Game = function(){
  this.score = new Score();
  this.fizzbuzz;
}

Game.prototype = {
  init: function(level){
    console.log('Game.init called : level = ' + level);
    this.fizzbuzz = new FizzBuzz(level);
  },
  setQuestion : function() {
    console.log("Game.setQuestion called");
    number = this.fizzbuzz.getQuestion();
    $("#number").html(number);
    $("#graph").timer();
  },
  answer : function(answer, number) {
    console.log('Game.answer called');
    result = this.fizzbuzz.judge(number, answer);
    score = this.score.answer(result);
    console.log(score);
    this.setScore(score);
    this.setQuestion();
  },
  setScore : function(score) {
    console.log('Game.setScore called : score = ' + score);
    $("#answer_num").html(score["answer_num"]);
    $("#success_num").html(score["success_num"]);
    $("#failed_num").html(score["failed_num"]);
    $("#max_success_continue_num").html(score["max_success_continue_num"]);
    console.log(score);
  },
  isTimeOver : function() {
    // htmlの中にパラメータをセット
  }
}
