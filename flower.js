var tra=0;

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(245, 183, 177);
  frameRate(500);
  angleMode(DEGREES);

}


function draw() {
  flower(width/2,height/2);
  flower(width/5,height/5.2);
  flower(width/1.25,height/5.2);
  flower(width/5,height/1.2);
  flower(width/1.25,height/1.2);

  if(frameCount>150){
    tra = tra + 1;
    buttonbox();
  }


}

var x1, y1;
function flower(x1, y1){
  //blanco
      push();
      var radius=(80)
      stroke(255)
      strokeWeight(3)
      translate(x1,y1);
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
  var radius = (150);
  translate(x1,y1);
  //stroke(lerpColor(color('#0afff5'), color('#1b1464'), frameCount/600));
  stroke(lerpColor(color(52, 152, 219), color(125, 60, 152), frameCount/250));
  rotate(frameCount*4);
  strokeWeight(1);
  line(1,0,1,-radius*sin(frameCount*6,),radius*cos(frameCount*2,));
  if (frameCount == 300)
  noLoop();
  pop();

//circulo
  push();
  noFill()
  translate(x1,y1);
  rotate(frameCount*5);
  strokeWeight(2)
  stroke(lerpColor(color('#0afff5'), color('#a31264'), frameCount/120));
  ellipse(0,0,50,20);
  if (frameCount == 300);
  pop();
}

function buttonbox(){
  translate(width/2, height/2);
  stroke(125, 60, 152, tra);
  strokeWeight(5);
  rectMode(CENTER);
  fill(255, tra);
  rect(0, -100, 720, 500, 20);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
