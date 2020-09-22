function draw() {
  createCanvas(400, 300);
  if (mouseX > 200) {
    fill("red");
  } else {
    fill("blue");
  }
  circle(mouseX, mouseY, 30);
}
