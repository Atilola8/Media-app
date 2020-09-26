let positionY = [10, 0, 0, 0, 0];
let colors = ["#fca652", "#ac4b1c"];
py = 0;

function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(colors[0]);
  positionY.push();
  for (var i = 0; i < positionY.length; i++) {
    fill(colors[1]);
    py += 1;
    if (positionY[i] % 10) {
      circle(positionX[i], py, 25);
      positioY[i] = positionY[i] - 5;
    }
    if (py >= 600) {
      py = 0;
    }
    console.log(positionY[i]);
  }
}
