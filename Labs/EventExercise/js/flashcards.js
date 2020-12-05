function showAns(answer){
  console.log(answer.getAttribute('data-answer'));
  let ans = answer.getAttribute('data-answer');
  var dvAnswer = document.getElementById("dvAnswer");
  dvAnswer.innerHTML = ans;

}


