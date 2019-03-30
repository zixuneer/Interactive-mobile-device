
function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(50);
  frameRate(500);
  angleMode(DEGREES);
}


function draw() {

  flower();
  rose();

}

function flower(){
  //blanco
      push();
      var radius=(100)
      stroke(255)
      strokeWeight(3)
      translate(width/2,height/2);
      rotate(frameCount*1)
      noFill()
      strokeWeight(1)
      stroke(500)
      line(0,0,1,-radius*sin(frameCount*1),radius*cos(frameCount*2));
      line(0,0,0,radius*sin(frameCount*1),-radius*cos(frameCount*2));
      line(0,0,-1,-radius*cos(frameCount*1),radius*sin(frameCount*2));
      line(0,0,-0,radius*cos(frameCount*1),-radius*sin(frameCount*2));
      if(frameCount==180)
      noLoop();
      pop();

//azul
  push();
  var radius = (300);
  translate(width/2,height/2);
  stroke(lerpColor(color('#0afff5'), color('#1b1464'), frameCount/600));
  rotate(frameCount*4);
  strokeWeight(1);
  line(1,0,1,-radius*sin(frameCount*6,),radius*cos(frameCount*2,));
  if (frameCount == 300)
  noLoop();
  pop();

//circulo
  push();
  noFill()
  translate(width/2,height/2);
  rotate(frameCount*5);
  strokeWeight(2)
  stroke(lerpColor(color('#0afff5'), color('#a31264'), frameCount/120));
  ellipse(0,0,50,20);
  if (frameCount == 300);
  pop();
}


function rose(){
    noFill();
    var angle1 = frameCount*2;
    var xciao = 200*cos(angle1);
    var yciao = 200*sin(angle1);

    push();
    translate(width/8, height/10);
    rotate(xciao);
    stroke(lerpColor(color('#f45942'), color('#2600ff'), frameCount/200));
    polygon(0, 0, frameCount/2,5);
    pop();

    push();
    translate(width/8, height/1.1);
    rotate(yciao);
    stroke(lerpColor(color('#f45942'), color('#2600ff'), frameCount/200));
    polygon(0, 0, frameCount/2, 6);
    pop();

    push();
    translate(width/1.15, height/1.1);
    rotate(xciao);
    stroke(lerpColor(color('#f45942'), color('#2600ff'), frameCount/200));
    polygon(0, 0, frameCount/2, 4);
    pop();

    push();
    translate(width/1.15, height/10);
    rotate(yciao);
    stroke(lerpColor(color('#f45942'), color('#2600ff'), frameCount/200));
    polygon(0, 0, frameCount/2, 3);
    pop();

    if (frameCount == 220) {
     noLoop();}
  }

  function polygon(x, y, radius, npoints) {
    var angle = 360/ npoints;
    beginShape();
    for (var a = 0; a < 360; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
