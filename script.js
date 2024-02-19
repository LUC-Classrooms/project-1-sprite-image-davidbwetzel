/**
 * Project 1 - Interactive Image
 * Name: David Wetzel
 * Comments: Getting Started
 * Date: Feb 9, 2024
 */

// Global Variables go here
var a = 0; // rotation angle
var x = 0, y = 0; // sprite position
var xSpeed = 0, ySpeed = 0;


function setup(){
  // this function will run once
  createCanvas(300, 200); // create a 600x400 pixel drawing canvas
  x = width/2;
  y = height/2;
  xSpeed = random(-3, 3);
  ySpeed = random(-3, 3);
}

function draw(){
  // this function runs again and again (60x per second)
  background(155, 100, 150); //purple-ish background

  x += xSpeed;
  y += ySpeed;

  if(x > width || x < 0){
    xSpeed *= -1; 
  }

  if(y > height || y < 0){
    ySpeed = ySpeed - (ySpeed * 2); 
  }
  a += -0.02;

  text("Anyone can draw!", 20, 20);

  push();
  translate(x, y);
  rotate(a);
  /** Draw a Cat */
  fill(200)
  noStroke();
  triangle(0 - 45, 0 - 55, 0 - 25, 0 - 40, 0 - 45, 0 - 20);
  triangle(0 + 45, 0 - 55, 0 + 25, 0 - 40, 0 + 45, 0 - 20);
  ellipse(0, 0, 100); // head
  fill("yellow");
  ellipse(0 - 20, 0 - 10, 10); // left eye
  ellipse(0 + 20, 0 - 10, 10); // right eye
  fill("pink");
  triangle(0 - 5, 0, 0 + 5, 0, 0, 0 + 8); // nose
  stroke(255);
  strokeWeight(2);
  line(0 - 10, 0 + 5, 0 - 30, 0); // left top whisker
  //stroke("red");
  line(0 + 10, 0 + 5, 0 + 30, 0); // right top whisker
  //stroke("blue");
  line(0 - 10, 0 + 5, 0 - 35, 0 + 5); // left middle whisker
  //stroke("green");
  line(0 + 10, 0 + 5, 0 + 35, 0 + 5); // right middle whisker
  //stroke("pink");
  line(0 - 10, 0 + 5, 0 - 30, 0 + 10); // left middle whisker
  //stroke("yellow");
  line(0 + 10, 0 + 5, 0 + 30, 0 + 10); // right middle whisker
  noFill();
  stroke("purple")
  arc(0 - 10, 0 + 12, 20, 20, 0, PI); // mouth left
  arc(0 + 10, 0 + 12, 20, 20, 0, PI); // mouth right
  noStroke();
  fill(0);
  text("Cat", -10, 40);
  pop(); // dispose of the cat layer

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
    fill('red');
    a += .01;
  } else {
    // do something here if the mouse is NOT pressed
    fill('blue');
    //a = 0
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}