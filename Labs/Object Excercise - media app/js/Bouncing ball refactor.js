function setup() {
  createCanvas(800, 600);
  //noStroke()
}

let Circle = {
  x: 50,
  y: 200,
  velocityX: 5,
  velocityY: 5,
  color: "#150485",
  update: function () {
    fill(this.color);
    circle(this.x, this.y, 40);
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.x >= 800 || this.x <= 0) {
      this.velocityX *= -1;
    } else if (this.y >= 600 || this.y <= 0) {
      this.velocityY *= -1;
    }
  },
};

function draw() {
  background(175, 175, 255);
  Circle.update();
}
