let circleY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let counter = 0;

function setup() {
  createCanvas(800, 600);
  fill("#ac4b1c");
}
function draw() {
  //console.log(circleY);

  // refreshes the background color
  background("#fca652");

  //The code inside thus if statement runs every 10 frames
  if (counter == 9) {
    // adds a new element to the array with a value of 0
    circleY.push(0);
    // removes an element from the begining of the array
    circleY.shift();
    counter = 0;
  }

  counter++;
  // updates all the elements in the array (the y value of the circle) and draws the circle on every frame
  for (let i = 0; i < circleY.length; i++) {
    circleY[i] = circleY[i] + 5;
    circle(400, circleY[i], 10);
  }
}
