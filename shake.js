var img;
var value = 0;
var sca = 0;
var rain = [];
var a = 0.1;
var accelation = 0.005;

function preload(){
   img = loadImage('1.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  setShakeThreshold(10);
}

function draw() {
  value += -1;
  background(245+sca, 183+sca, 177+sca);
  image(img, width/2, height/5, img.width/3, img.height/3);

  fill('#305f72');
  textSize(60);
  textAlign(CENTER);
  noStroke();
  textFont('ZCOOL KuaiLe');
  var t1 = '那就摇一摇给她送礼物吧！';
  text(t1,windowWidth/2,height/11);

  if(value>1){
   var newrains={
     x:random(180,850),
     y:random(200,230),
     size:random(20,35),
     alp:random(100,255)
   };
   rain.push(newrains);
  }

  for(j=0; j<rain.length; j++){
    var obj=rain[j];
    rains(obj.x,obj.y,obj.size,obj.alp);
    obj.y=obj.y+random(4,8);
  }

  translate(windowWidth/2, height);
  branch(200);

}

function rains(x,y,size,alp){

    fill(random(100,255), random(100,255), random(100,255));
    noStroke();
    ellipse(x,y,size);

}

function deviceShaken() {
  value = value + 10;
  sca = sca+0.1;
  if (sca > 100) {
    sca = 100;
  }

  a = a + accelation;
  if(a > 1){
    a = 1;
  }

}

function branch(len){
  stroke(236, 112, 99);
  strokeWeight(3);
	line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 4){
    push();
    rotate(a);
    branch(len*0.7);
    pop();
    push();
    rotate(-a);
    branch(len*0.7);
    pop();
  }
  //line(0, 0, 0, -len*0.7);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
