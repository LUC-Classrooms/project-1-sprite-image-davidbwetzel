/**
 * Project 1 - Interactive Image
 * Name: David Wetzel
 * Comments: Getting Started
 * Date: Feb 9, 2024
 */

// Global Variables go here
var a = 0;
var x = 0, y = 0;


function setup(){
  // this function will run once
  createCanvas(500, 300); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background
  x = width/2;
  y = height/2;
  // add your image drawing code here
  push(); // create a layer
  translate(x, y);

  rotate(a);
  rectMode(CENTER);
  rect(0, 0, 50, 50, 5);
  rect(0, -45, 25, 25, 5);

  pop(); // dispose of the layer

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
    fill('red');
    a = a + .01;
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