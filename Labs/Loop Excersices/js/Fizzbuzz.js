var x = 50;
function setup() {
  createCanvas(800, 600);
  background(0, 100, 100);
  for (let i = 0; i < 24; i++) {
    fill("black");
    //this is called the modulo.
    if (i % 3 == 0) {
      fill("purple");
    }
    circle(x, 25, 10);
    if (i % 5 == 0) {
      fill("green");
      square(x - 12, 15, 20);
    }
    if (i % 3 == 0 && i % 5 == 0) {
      fill("blue");
      square(x - 12, 15, 20);
    }

    x += 25;
  }
}
function draw() {}
