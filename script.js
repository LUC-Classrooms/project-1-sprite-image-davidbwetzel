/**
 * Project 1 - Interactive Image
 * Name: David Wetzel
 * Comments: Getting Started
 * Date: Feb 9, 2024
 */

// Global Variables go here
var a = 0; // rotation angle
var x = 0, y = 0; // sprite position


function setup(){
  // this function will run once
  createCanvas(400, 300); // create a 600x400 pixel drawing canvas
  x = width/2;
  y = height/2;
}

function draw(){
  // this function runs again and again (60x per second)
  background(255); //light gray background
  fill(200)
  noStroke();
  triangle(x - 45, y - 55, x - 25, y - 40, x - 45, y - 20);
  triangle(x + 45, y - 55, x + 25, y - 40, x + 45, y - 20);
  ellipse(x, y, 100); // head
  fill("yellow");
  ellipse(x - 20, y - 10, 10); // left eye
  ellipse(x + 20, y - 10, 10); // right eye
  fill("pink");
  triangle(x - 5, y, x + 5, y, x, y + 8); // nose
  stroke(255);
  strokeWeight(2);
  line(x - 10, y + 5, x - 30, y); // left top whisker
  //stroke("red");
  line(x + 10, y + 5, x + 30, y); // right top whisker
  //stroke("blue");
  line(x - 10, y + 5, x - 35, y + 5); // left middle whisker
  //stroke("green");
  line(x + 10, y + 5, x + 35, y + 5); // right middle whisker
  //stroke("pink");
  line(x - 10, y + 5, x - 30, y + 10); // left middle whisker
  //stroke("yellow");
  line(x + 10, y + 5, x + 30, y + 10); // right middle whisker
  noFill();
  stroke("purple")
  arc(x - 10, y + 12, 20, 20, 0, PI); // mouth left
  arc(x + 10, y + 12, 20, 20, 0, PI); // mouth right


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