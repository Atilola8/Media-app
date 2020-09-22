var x = 50;
var y = 200;
var xspeed = 5;
var yspeed = 5;
radius = 40;

function draw() {
  createCanvas(800, 600);
  background(175, 175, 255);
  fill("blue");
  circle(x, y, 40);
  x = x + xspeed;
  y = y + yspeed;

  if (y + radius > 600 || y - radius < 0) {
    yspeed *= -1;
  }

  if (x + radius > 800 || x - radius < 0) {
    xspeed *= -1;
  }
}
