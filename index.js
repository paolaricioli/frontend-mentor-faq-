function showAnswer(question, answer) {
   var x = document.getElementById(answer);
   var y = document.getElementById(question);

   var answers = document.getElementsByClassName("answer");
   var questions = document.getElementsByClassName("question");


   if (x.style.display !== "block") {
      for (var i = 0; i < answers.length; i++) {
         answers[i].style.display = "none";
         questions[i].style.fontWeight = "400";
      }
      x.style.display = "block";
      y.style.fontWeight = "700";
   } else {
      x.style.display = "none";
      y.style.fontWeight = "400";
   }

}
