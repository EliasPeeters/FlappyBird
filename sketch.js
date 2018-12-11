var bird;
var pipes = [];
var score = 0;
var font;
var fontSize = 40;
var windowHeight =  window.innerHeight;
var windowWidth =  window.innerWidth;


function setup() {
  createCanvas(windowWidth-100, 500);
  bird = new Bird();
  pipes.push(new Pipe());
  strokeWeight(0);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255, 239, 189);
  //text('Test', 10, 50);

  text(Math.ceil(score/9), width/2, 50);

  for (var i = 0; i < pipes.length; i++) {
  	pipes[i].show();
  	pipes[i].update();
    if (pipes[i].hits(bird)) {
  	  score = 0;
  	}  
    if (pipes[i].scored(bird)) {
      score += 1; 
    }

  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
  	pipes.push(new Pipe());  	
  }


}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

function mousePressed() {
  bird.up();  
}