

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
 background(133, 193, 233);
 push();
 frameRate(10);
 var a = random(0,height);
 var a1 = random(0,height);
 stroke(random(255), random(255), random(100), random(200, 255));
 line(random(0,300), a, random(width-650,width), a);
 line(random(0,300), a1, random(width-650,width), a1);
 pop();

 robot();
 y1 = y1-25;
 if(y1<-350){
   y1 = -350;
 }

 if(frameCount>40){
   fontbox();
   tra = tra + 30;
   button();
   tra2 = tra2 + 10;
 }

 y2 = y2-30;
 if(y2<-360){
   y2 = -360;
 }

 x1 = x1 + s1;
 if(x1>130 || x1<-130){
   s1 = s1*-1;
 }
 x3 = x3 + s2;
 if(x3>115 || x3<-115){
   s2 = s2*-1;
 }
 x2 = x2 + s3;
 if(x2>100 || x2<-100){
   s3 = s3*-1;
 }

 mouseClicked();

}

var x1 = 0, x2 = 0, y1 = 400, y2 = 900, x3 = 0, s1 = 14, s2 = 14, s3 = 14;
function robot(){
  push();

  strokeWeight(16);
	stroke(0);
	fill(204);

  translate(width/2, height);

	rectMode(CENTER);
	//wheel
	noStroke()
	fill(0, 70);
	ellipse(x1, y1+65, 450, 60);
	stroke(236, 112, 99);
	fill(255);
	ellipse(x1, y1-30, 170);
	fill(241, 148, 138);
	stroke(241, 148, 138);
	ellipse(x1, y1-30, 80);
	stroke(240, 128, 128);
	fill(255);

  rect(x1, y1-110, 290, 160, 0, 0, 50, 50);
	//spring
	line(x2-width/7, y1-390, x2+width/7, y1-390) ;
	line(x3-width/7, y1-320, x3+width/7, y1-320);
	line(x1-width/7, y1-250, x1+width/7, y1-250);
  //shoulders
  stroke(241, 148, 138);
  noFill()
  bezier(x2-width/7-75, y1-390, x2-width/7-75, y1-390,
  x2-width/7-200, y1-580, x2-width/6-130, y2-850);
  bezier(x2+width/7+75, y1-390, x2+width/7+75, y1-390,
  x2+width/7+200, y1-580, x2+width/6+130, y2-850);
  fill(255);
  ellipse(x2-width/6-130, y2-850, 70, 70);
  ellipse(x2+width/6+130, y2-850, 70, 70);
  rect(x2-width/7-75, y1-390, 70, 70, 40, 0, 0, 40);
  rect(x2+width/7+75, y1-390, 70, 70, 0, 40, 40, 0);
  //eyes stroke
	noFill();
	strokeWeight(30);
	stroke(250, 219, 216);
  triangle(x2-width/19, y1-690, x2-width/18.5, y1-650, x2-width/18-40, y1-690);
  triangle(x2+width/19, y1-690, x2+width/18.5, y1-650, x2+width/18+40, y1-690);
  ellipse(x2-width/8, y1-630, 140, 120);
  ellipse(x2+width/8, y1-630, 140, 120);
  //eyes
  noStroke();
  fill(256, 256, 256);
  triangle(x2-width/19, y1-690, x2-width/18.5, y1-640, x2-width/18-80, y1-690);
  triangle(x2+width/19, y1-690, x2+width/18.5, y1-640, x2+width/18+80, y1-690);
  ellipse(x2-width/8, y1-630, 140, 120);
  ellipse(x2+width/8, y1-630, 140, 120);
  //moving eyes
	fill(30, 30, 30);
	ellipse(x2-110, y1-620, 70);
	ellipse(x2+110, y1-620, 70);
	fill(256, 256, 256);
	ellipse(x2-100, y1-625, 25);
	ellipse(x2+100, y1-625, 25);
  //neck
  fill(250, 219, 216);
	rect(x2, y1-490, 120, 60, 10);
	fill(245, 183, 177);
	rect(x2, y1-550, 70, 120, 10);
  pop();

}

var tra = 0, tra2 = 0;
var t1 = 'HAPPY BIRTHDAY';
var t2 = 'To: 钰晶';
var y3 = -480;

function fontbox(){
  push();
  translate(width/2, height/2);
  strokeWeight(8);
  rectMode(CENTER);
  stroke(random(100,231), 76, 60, tra);
  fill(37, 62, 204, tra);
  rect(x2, y3, 720, 280, 50);

  textAlign(CENTER);
  textSize(110);
  fill(random(200), random(200), random(200),tra);
  stroke(random(231), random(200), random(200), tra);
  textFont('VT323');
  text(t1, x2, y3+30);
  textSize(45);
  fill(52, 152, 219, tra);
  noStroke();
  textFont('ZCOOL KuaiLe');
  text(t2, x1, y3+910);
  pop();
}

 var y4 = -100
 function button(){
   push();
   translate(width/2, height);
   strokeWeight(4);
   rectMode(CENTER);
   stroke(245, 183, 177, tra2);
   fill(240, tra2);
   rect(0, y4, 250, 100, 30);
   fill(180, tra2);
   textSize(75);
   textAlign(CENTER);
   textFont('VT323');
   text('NEXT', 0, y4+20);
   pop();

 }

 function mouseClicked(){
   if(mouseX>-125 && mouseX<125 && mouseY>height-150 && mouseY<height-100){
     window.location.href = "flower.html";
   }
 }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

