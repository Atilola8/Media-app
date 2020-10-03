function setup() {
  createCanvas(800, 600);
}
let x = 200;
let y = 200;

function movingCircle() {
  if (mouseX > x) {
    x += 3;
  } else if (mouseX < x) {
    x -= 3;
  } else if (mouseX == x) {
    x += 0;
  }
  if (mouseY > y) {
    y += 3;
  } else if (mouseY < y) {
    y -= 3;
  } else if (mouseY == y) {
    y += 0;
  }
  ellipse(x, y, 20);
}
function draw() {
  background("#f08a5d");
  fill("#000000");
  if (
    mouseX - x <= 7 &&
    mouseY - y <= 7 &&
    mouseX - x >= -7 &&
    mouseY - y >= -7
  ) {
    fill("#ec0101");
  } else {
    fill("#000000");
  }

  movingCircle();
}
