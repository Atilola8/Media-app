let colors = ["#de4463", "#709fb0", "#d9ecf2"];

function setup() {
  createCanvas(800, 600);
  background(0, 100, 100);

  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(75 * i, 20, 75, 75);
  }
}
