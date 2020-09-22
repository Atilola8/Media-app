let velX = 2;
let posX = 30;
let posY = 250;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 300, 300);
  circle(posX, posY, 30);
  posX += velX;

  if (posX >= 600) {
    posX = 2;
  }
}
