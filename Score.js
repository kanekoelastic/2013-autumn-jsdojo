var Score = function(){
    this.init();
}

Score.prototype = {
  init: function(){
    this.answer_num=0;
    this.success_answer = 0;
    this.failed_answer = 0;
    this.success_continue=0;
    this.max_success_continue=0;
  },
  failedAnswer: function(){
    if(this.max_success_continue < this.success_continue){
      this.max_success_continue=this.success_continue;
    }
    this.success_continue=0;
    this.failed_answer++;
  },
  successAnswer: function(){
    this.success_answer++;
    this.success_continue++;
  },
  answer: function(answer){
    //回答数
    this.answer_num++;
    if(answer==true){
      this.successAnswer();
    }else{
      this.failedAnswer();
    }
    return this.result();
  },
  result: function(){
    score_result={
         answer_num: this.answer_num,
         success_num: this.success_answer,
         failed_num: this.failed_answer,
         success_continue_num: this.success_continue,
         max_success_continue_num: this.max_success_continue
    }
    return score_result;
  }
}
