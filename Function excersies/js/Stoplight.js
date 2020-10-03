let colors = ["#ec0101", "#fddb3a", "#81b214"];

function setup() {
  createCanvas(800, 600);
  background(0, 50, 50);

  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    circle(60, 120 * i + 60, 60);
  }
}
