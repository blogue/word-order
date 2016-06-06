$(document).ready(function(){
  var sentenceWords;

  $("#sentence").submit(function(event){
    event.preventDefault();

    var sentence = $("#userSentence").val().toLowerCase();
    sentenceWords = sentence.split(" ");
    console.log(sentenceWords);
    $('#output').append(sentence);

    var uniqueWords = [];

    sentenceWords.forEach(function(word){
      var index = uniqueWords.indexOf(word);
      if (index === -1) {
        uniqueWords.push(word);
        uniqueWords.push(1);
      } else {
        uniqueWords[index + 1] ++;
      }
      console.log(uniqueWords);
    });

    var wordList = [];
    var frequency = "";
    uniqueWords.forEach(function(word){
      if (typeof(word) === "string") {
        wordList.push(word);
      } else {
        frequency = word;
        wordList.push(frequency);
      }



      console.log(wordList);
    });
  });
});
