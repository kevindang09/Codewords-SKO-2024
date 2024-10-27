let p, r; //two graphics canvases

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = createGraphics(width, height); //this is the top layer
  r = createGraphics(width, height); // this is the text layer
  p.background(0);
  r.background(255);
  r.textAlign(CENTER, CENTER);
  p.fill(0);
  r.textSize(120);
  r.text("Hola", width/2, height/2);
}

function draw() {
  r.text("Hola", width/2, height/2);
  image(r, 0, 0); //draw the text background canvas
  image(p, 0, 0); //draw the spotlight canvas
  //p.background(0,100); //black background on top layer
  p.erase();
  p.circle(mouseX, mouseY, width*0.08); //animated black square
}
