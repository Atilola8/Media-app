var Rectangle = {
  hight: 100,
  width: 50,
  posX: 50,
  posY: 50,
  createrect: function () {
    rect(this.posX, this.posY, this.hight, this.width);
  },
};
function setup() {
  createCanvas(800, 600);
  background(175, 175, 255);
}
function draw() {
  Rectangle.createrect();
}
