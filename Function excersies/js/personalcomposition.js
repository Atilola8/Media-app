function setup() {
  createCanvas(800,600);  
  noStroke();
}

function draw() {
  backChange(mouseX);
  //all three of these for loops make random circles of either red, green, or blue
  for(i = 0; i < 200; i++){
    fill(0, 0, 255);
    circle(Math.random()*200+400,Math.random()*600,30);
  }
  for(i = 0; i < 200; i++){
    fill(0, 255, 0);
    circle(Math.random()*200+200,Math.random()*600,30);
  }
  for(i = 0; i < 200; i++){
    fill(255, 0, 0);
    circle(Math.random()*200,Math.random()*600,30);
  }
}
//this function changes the background color which reveals different shapes
function backChange(x){
  //reigon 1
  if (x < 200){
    background(255, 0, 0);
  }
  //reigon 2
  else if ((x > 199) && (x < 400)){
    background(0, 255, 0);
  }
  //reigon 3
  else{
    background(0, 0, 255)
  }
}