var tra1=0;
var tra2=0;

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

  if(frameCount>=180){
    tra1 = tra1 + 3;
    tra2 = tra2 + 1;
    buttonbox();
  }

  //console.log(frameCount);
  mouseClicked();

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
      //if(frameCount==500)
      //noLoop();
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
  //if (frameCount == 500)
  //noLoop();
  pop();

//circulo
  push();
  noFill()
  translate(x1,y1);
  rotate(frameCount*5);
  strokeWeight(2)
  stroke(lerpColor(color('#0afff5'), color('#a31264'), frameCount/120));
  ellipse(0,0,50,20);
  //if (frameCount == 180);
  pop();
}

function buttonbox(){
  translate(width/2, height/2);
  stroke(118, 68, 138, tra1);
  strokeWeight(7);
  rectMode(CENTER);
  fill(253, 237, 236, tra1);
  rect(0, -35, 670, 350, 20);

  stroke(125, 60, 152, tra2);
  strokeWeight(6);
  rectMode(CENTER);
  fill(250, 219, 216, tra2);
  rect(-200, 265, 270, 110, 20);
  rect(200, 265, 270, 110, 20);

  //text
  textSize(80);
  textAlign(CENTER);
  textFont('VT323');
  strokeWeight(8);
  text('YES', -200, 290);
  text('YES', 200, 290);

  var t1="钰晶是世界上最";
  var t2="可爱的小朋友吗";
  textSize(60);
  //fill(52, 152, 219, tra2);
  //noStroke();
  textFont('ZCOOL KuaiLe');
  text(t1, 0, -50);
  text(t2, 0, 30);
}

function mouseClicked(){

  if(mouseX>width/2-400 && mouseX<width/2-70 && mouseY>height/2+205 && mouseY<height/2+325){
    window.location.href = "shake.html";
  }

  if(mouseX>width/2+70 && mouseX<width/2+400 && mouseY>height/2+205 && mouseY<height/2+325){
    window.location.href = "shake.html";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
