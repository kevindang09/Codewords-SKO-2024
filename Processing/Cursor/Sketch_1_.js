function setup() {
createCanvas(windowWidth, windowHeight);
background(0,0,0);
frameRate(60);
}


function draw() {
  
  //circle(200,200,100);
  background(0,0,0,15)
  //noStroke();
  fill(mouseX, mouseX-255,mouseX-510);
  circle(mouseX, mouseY, 75); //refresh background with transforms circle
  
  //circle(0.3*width, 0.2*height,200);
  //ellipse(0.75*width, 400, 100, 200);
  //fill (mouseX/4, 255-mouseY, mouseX/4,);
  
  //stroke(255);
  //fill(mouseX,mouseX-255, mouseX-500);
  //circle(mouseX, mouseY, 75);
  
  strokeWeight(10);
  stroke(0);
  //line(0, 0, mouseX, mouseY);
  //line(pmouseX, pmouseY, mouseX, mouseY);
}
