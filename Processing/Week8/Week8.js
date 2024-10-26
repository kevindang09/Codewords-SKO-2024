var song, mic, speed, volume; //declare variables

function preload(){
  song= loadSound("data/beat.mp3");
}

function setup() {
createCanvas(windowWidth, windowHeight);
background("blue");
getAudioContext().suspend();
mic = new p5.AudioIn();
mic.start();
}


function draw() {
  background(255,255,0);
  
  //circle grows big and small as mic records sounds
  volume= mic.getLevel();
  circleDiameter= map(volume,0.0,1.0,50,500)
  
circle(mouseX,mouseY,100); //circle follow mouse

//let circleDiameter= map(mouseX, 0, height, 1, 400); //circle grow small and large as mouse moves
circle(mouseX, mouseY, circleDiameter);
//circle grow large and small as mouse moves

 volume= map(mouseX,0,width,0.0,1.0); 
//(follow the mouse, min in, max in [limit of 1 point to the other], min out, max out [the other way])

//song.amp(0.5); //mapping volume between 0 and 1

let speed = map(mouseY,0,height,0.01,10); //soung change as mouse moves
song.amp(volume);
song.rate(speed); 

}


function mousePressed(){
  if (getAudioContext().state !== 'running'){ //mouse press then play song
    getAudioContext().resume();
    song.play();
    song.loop();
  }
}

function keyTyped(){
  if (key === " "){  //if key space then song stop
  song.stop();
}
else {   //if key other then song resume
  song.play();  
  }
}
