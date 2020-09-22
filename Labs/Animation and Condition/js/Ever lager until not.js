let velX = 2;
let posX = 250;
let posY = 250;
let size = 20;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 300, 300);
  circle(posX, posY, size);
  size += velX;

  if (size >= 200) {
    size = 1;
  }
}
