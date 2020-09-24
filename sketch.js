function setup() {

  createCanvas(400, 400);
  background(600);
  angleMode(DEGREES);
  
}

function draw() {

  console.log("mouse x is:" + mouseX);
  console.log("mouse y is:" + mouseY);


  // clear the screen, to show the changes as animations
  clear()

  drawBackground();
  drawShapeOne();
  drawShapeThree();
  drawShapeFive();
  drawShapeSix();
  drawShapeFour();
  drawShapeTwo();
  drawShapeSeven();

}

function drawShapeOne() {
  strokeWeight(4);
  noStroke(600);

  fill(0, 162, 232)
  beginShape();
  triangle(
    190 - mouseX, 55 - mouseY, 
    126 - mouseX, 197 - mouseY, 
    46 - mouseX, 232 - mouseY);
  endShape(CLOSE);
}

function drawShapeTwo() {
  strokeWeight(4);
  noStroke(600);

  fill(45, 122, 247);
  beginShape();
  triangle(
    44-mouseX, 239-mouseY,
    125-mouseX, 203, 
    193-mouseX, 350-mouseY
  );
  endShape(CLOSE);

}

function drawShapeThree() {
  strokeWeight(4);
  noStroke(600);

  fill(175, 220, 240)
  beginShape();
  triangle(
    199-mouseX, 352, 
    235-mouseX, 279, 
    132-mouseX, 205
  );
  endShape(CLOSE);

}

function drawShapeFour() {
  strokeWeight(4);
  noStroke(600);

 fill(42, 78, 207)
  beginShape();
  triangle(
    234-mouseX, 270-mouseY, 
    131, 196-mouseY, 
    198, 48-mouseY);
  endShape(CLOSE);
}

function drawShapeFive() {
  strokeWeight(4);
  noStroke(600);

 fill(37, 112, 204)
  beginShape();
  triangle(
    204+mouseX, 52, 
    276+mouseX, 198, 
    240+mouseX, 271);
  endShape(CLOSE);

}

function drawShapeSix() {
  strokeWeight(4);
  noStroke(600);

  fill(22, 167, 224)
  beginShape();
  triangle(281 + mouseY, 197, 
           351 + mouseX, 231,
           212 + mouseX, 58);
  endShape(CLOSE);

}

function drawShapeSeven() {
  strokeWeight(4);
  noStroke(600);

  fill(0, 113, 158)
  beginShape();
  triangle(
    206+mouseX, 351+mouseY, 
    354+mouseX, 239+mouseY, 
    281+mouseX, 203+mouseY);
  endShape(CLOSE);

}

function drawBackground() {
  noStroke();
  fill(0, 0, 0, 67);
  beginShape();
  triangle(10, 9, 11, 28, 31, 31);
  triangle(32, 27, 54, 33, 54, 48);
  triangle(42, 38, 52, 56, 37, 56);
  triangle(31, 35, 13, 43, 31, 40);
  triangle(389, 335, 314, 324, 326, 276); 
  triangle(319, 257, 371, 309, 379, 238);
  triangle(382, 262, 470, 323, 405, 340);
  triangle(315, 262, 286, 325, 222, 271);
  triangle(271, 253, 347, 227, 309, 193);
  triangle(30, 68, 60, 75, 42, 60);
  triangle(63, 45, 54, 63, 81, 57);
  triangle(64, 67, 87, 87, 113, 62);
  triangle(67, 77, 96, 105, 64, 106);
  triangle(89, 92, 128, 67, 118, 108);
  triangle(89, 113, 136, 127, 99, 155);
  triangle();
  triangle();
  triangle();
  triangle();
  triangle();
  
  endShape();
  
}