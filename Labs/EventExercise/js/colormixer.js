var dvSpeak = document.querySelector("#speak");
var btnOne = document.querySelector("#btnOne");
var btnTwo = document.querySelector("#btnTwo");
var btnThree = document.querySelector("#btnThree");
var btnFour = document.querySelector("#btnFour");
var btnFive = document.querySelector("#btnFive");
var btnSix = document.querySelector("#btnSix");
var btnSeven = document.querySelector("#btnSeven");
var btnEight = document.querySelector("#btnEight");
var btnNine = document.querySelector("#btnNine");
var colorDiv = document.querySelector("#colorDiv");
var redVal = 0;
var blueVal = 0;
var greenVal = 0;


//add event listeners
btnOne.addEventListener("click", dealWithAClick1);
btnTwo.addEventListener("click", dealWithAClick2);
btnThree.addEventListener("click", dealWithAClick3);
btnFour.addEventListener("click", dealWithAClick4);
btnFive.addEventListener("click", dealWithAClick5);
btnSix.addEventListener("click", dealWithAClick6);
btnSeven.addEventListener("click", dealWithAClick7);
btnEight.addEventListener("click", dealWithAClick8);
btnNine.addEventListener("click", dealWithAClick9);

//i would actually call this function colorChange
function dealWithAClick1(event) {
  redVal = redVal + 1;
  colorChange();
}

function dealWithAClick2(event) {
  blueVal = blueVal + 1;
  colorChange();
}

function dealWithAClick3(event) {
  greenVal = greenVal + 1;
  colorChange();
}

function dealWithAClick4(event) {
  redVal = redVal + 5;
  colorChange();
}

function dealWithAClick5(event) {
  blueVal = blueVal + 5;
  colorChange();
}

function dealWithAClick6(event) {
  greenVal = greenVal + 5;
  colorChange();
}

function dealWithAClick7(event) {
  redVal = redVal + 10;
  colorChange();
}

function dealWithAClick8(event) {
  blueVal = blueVal + 10;
  colorChange();
}

function dealWithAClick9(event) {
  greenVal = greenVal + 10;
  colorChange();
}



function colorChange(){
  document.getElementById('rgbCode').textContent = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
  colorDiv.style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")"
}

