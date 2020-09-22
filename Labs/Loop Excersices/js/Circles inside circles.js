var D = 300;
function setup() {
  createCanvas(800, 600);
  background(0, 100, 100);
  for (let i = 0; i < 60; i++) {
    stroke(3);
    circle(400, 300, D);
    D -= 5;
  }
}
function draw() {}
