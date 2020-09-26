let positions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ArrayY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(50);
  positions.push(mouseX);
  positions.shift();
  ArrayY.push(mouseY);
  ArrayY.shift();
  for (var i = 0; i < positions.length; i++) {
    circle(positions[i], ArrayY[i], 20);
  }
}
