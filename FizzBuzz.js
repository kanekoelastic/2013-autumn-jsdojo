var FizzBuzz = function(level){
  this.level = parseInt(level);
}

FizzBuzz.prototype = {
  init: function(){
  },
  getQuestion: function(){
    var levelLowMax  = 50,
        levelMidMax  = 100,
        levelHighMax = 1000,
        levelOniMax  = 2000,
        rangeMax;

    if (this.level === 1) {
      return Math.floor( Math.random() * levelLowMax );
    } else if (this.level === 2) {
      return Math.floor( Math.random() * levelMidMax );
    } else if (this.level === 3) {
      return Math.floor( Math.random() * levelHighMax );
    } else {
      // ランダム数値の問題を作成
      var rndVal = Math.floor( Math.random() * levelOniMax );

      // 鬼モードはランダム関数で生成した値が5で割り切れる場合に、数値の中に英字を混ぜる
      var rnd = Math.floor(Math.random() * 100);
      if (rnd % 5 === 0) {

        // ランダム数値に英字を含めるため、文字列に変換
        rndVal = rndVal.toString();
        console.log('rndVal:' + rndVal);

        // ランダムな英字を生成
        var rndAlf = 'qOolQ'.charAt(Math.floor(Math.random() * 5));
        console.log('rndAlf:' + rndAlf);

        // ランダム数値から置換対象文字を取得
        var replaceBefore = rndVal.charAt(Math.floor( Math.random() * (rndVal.length - 1) ));
        console.log('replaceBefore:' + replaceBefore);

        // ランダム数値の置換対象文字をランダム英字に変更
        rndVal = rndVal.replace(replaceBefore, rndAlf);
        console.log('rndVal:' + rndVal);
      }

      return rndVal;
    }

  },
  judge: function(quiz, answer){
    quiz    = parseInt(quiz);
    answer  = answer.toLowerCase();
    if (quiz % 15 === 0) {
      return (answer === 'fizzbuzz');
    } else if (quiz % 3 === 0) {
      return (answer === 'fizz');
    } else if (quiz % 5 === 0) {
      return (answer === 'buzz');
    } else {
      return (answer === 'etc');
    }
  }
}
