var wigglyLetters=[];
var letter, size, rand, speed, xposition, yposition; //set up character for the var
var size=32;
var speed=1;

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
textSize(32);
textFont("Times");


}


function draw() {
background(0);
fill(255);
noStroke();
for(var i=0; i<wigglyLetters.length; i++){
  wigglyLetters[i].giggle();
  wigglyLetters[i].display();
 }
}

function mousePressed(){
  rand= int(random(65,100)); //65 is a captial number match of letter "A" in keyboard
  letter= char(rand);
  //text(letter, mouseX, mouseY);
  
  //new wiggle class : positionx, positiony, size, letter, speed
  wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
class Wiggle {
  constructor(x,y,size,letter,speed){
    this.x=x;
    this.y=y;
    this.textSize=size;
    this.speed=speed;
    this.letter=letter;
}
  //action wiggle as lowercase w
  giggle(){
    this.x+=random(-4, 4);
    this.y+=random(-4, 4);
    this.textSize+=random(-20, 20);
  
}
  display(){
    textSize(this.textSize);
    text(this.letter, this.x, this.y);

  }
}
  
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
