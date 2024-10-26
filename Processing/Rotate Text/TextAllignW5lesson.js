var SIZE
var xPos, yPos;
function preload(){
  pic=loadImage('data/Lotus.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
textAlign(CENTER);
SIZE=80
xPos=width/2;
yPos=height/2;
frameRate(10)
//angleMode(DEGREES);
}


function draw() {
  

background(0, 25);
//yPos=random(height);
//xPos=random(width);
fill(255, 0, 0);
textSize(SIZE);
text('HELLO WORLD',xPos, yPos); //random text popping up

//rotate a text in place
push(); 
translate(xPos,yPos); // random position
//translate(width/2,height/2); // position at the center
 //rotate(QUARTER_PI);
 noStroke();
 rotate(mouseX);
 
 // Style the square.
  if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255,0,0);
  }

 text('HELLO WORLD\nthis is the end...',-width/4,-height/4, width/2, height/2);
pop();

stroke(255,0,0);
strokeWeight(5);
line(mouseX,mouseY, pmouseX, pmouseY);

//image+filter
//pic.filter(BLUR, 3);
//image(pic, width/2, height/2); 
//image(pic, width/2-300, 0, 505, 479);
}


function mousePressed() {
  SIZE+=1;
  
  
}
