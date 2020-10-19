// constantly changing the x- and y-coordinates of the ball and  to animate it, so it would be better to store those in variables. These var are also meant to keep track on the codes
var xBallChange = 5;
var yBallChange = 5;
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xPaddle = 380;
var yPaddle = 300;
var paddleWidth = 20;
var paddleHeight = 100;

//creates the background canvas we are working on and it can only work once.
function setup() {
  createCanvas(800, 600);
}
function collideRect(CircleX,CircleY,RectX,RectY,rectW, rectH) {
  if(CircleX + 50 > RectX && CircleX + 50 < RectX + rectW) {

    if(CircleY + 50 > RectY && CircleY+ 50 < RectY + rectH) {
      return true;
          
    }

}
return false; 
}
//where the whole codes runs and is allowed to keep running.
function draw() {
  background(175, 175, 255);
  //adding color to the ball
  fill("red");

  noStroke();
  //introducing the ball
  ellipse(xBall, yBall, 50, 50);
  //to move the ball
  xBall += xBallChange;
  yBall += yBallChange;
  //This code below checks to see if the ball’s x-coordinate is between 0 and windowWidth, and if the ball’s y-coordinate is between 0 and windowHeight. P5 javascript
  if (xBall < 50 / 2 || xBall > 800 - 0.5 * 50) {
    xBallChange *= -1;
  }
  if (yBall < 50 / 2 || yBall > 600 - 50) {
    yBallChange *= -1;
  }
  
  fill(0, 255, 255);
  noStroke();
  rect(760, yPaddle, 20, 100);
  //making the paddle move up and down
  if (keyIsDown(UP_ARROW)) {
    yPaddle -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yPaddle += 10;
  }
if (collideRect(xBall,yBall,xPaddle,yPaddle,20,100)){
  yBallChange *= -1;
}

}

