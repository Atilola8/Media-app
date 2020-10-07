var myCircle = {
  x: 50,
  y: 50,
  update: function () {
    circle(this.x, this.y, 50);
  },
};

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(175, 175, 255);
  fill("red");
  myCircle.update();

  if (keyIsDown(RIGHT_ARROW)) {
    myCircle.x += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    myCircle.x -= 2;
  }
  if (keyIsDown(UP_ARROW)) {
    myCircle.y -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myCircle.y += 2;
  }
}
