var value = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  // by defaults equals to 30
  setShakeThreshold(10);
  frameRate(12);
}

function draw() {
  background(value);
  fill(255-value);
  textSize(90);
  textAlign(CENTER);
  text(value,width/2,height/2+30)
}

function deviceShaken() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}

// var value = 0;
//
// function setup() {
//   createCanvas(windowWidth,windowHeight);
//   setMoveThreshold(5);
// }
//
// function draw() {
//   background('#73C86B');
//   fill(255-value);
//   textSize(90);
//   textAlign(CENTER);
//   text(value,width/2,height/2+30)
// }
//
// function deviceMoved() {
//   value++;
// }
