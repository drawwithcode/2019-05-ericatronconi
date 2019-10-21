var backR = 212;
var backG = 242;
var backB = 249;

var mySong;

function preload() {
  mySong = loadSound("./assets/ambient.mp3");
}


function setup() {
  createCanvas(640, 480);

  angleMode(DEGREES);

}

function draw() {
  //background color
  //changes color depending on the position of the mouse
  background(backR, backG, backB);
  dayBack = color(212, 242, 249);
  nightBack = color(75, 75, 117);
  backgroundColor = lerpColor(dayBack, nightBack, mouseX/width);
  background(backgroundColor);

  var moonConstrainX = constrain(mouseX, 102, 540)

  //moon moves in the x direction as the position of the mouse changes
  noStroke();
   fill(256);
   ellipse(moonConstrainX, 80, 64, 64);

   fill(backR, backG, backB);
    fill(backgroundColor);
    ellipse(moonConstrainX*1.30 - 95, 80, 54, 54);

//moon fades as it changes position
//takes the color of the background
fill(backR, backG, backB);
fill(backgroundColor);
ellipse(moonConstrainX*1.30 - 95, 80, 54, 54);

//starting to draw the scene that canges color
//part 1: the landscape

//green triangle(x1,y1,x2,y2,x3,y3)
fill(129, 231, 122);
noStroke();
dayShape1 = color(129, 231, 122);
nightShape1 = color(72, 127, 68);
shapeColor1 = lerpColor(dayShape1, nightShape1, mouseX/width);
fill(shapeColor1);
triangle(269, 480, 640, 480, 640, 420);

//part 2: the road
fill(102);
noStroke();
beginShape();
vertex(0, 441);
vertex(0,480);
vertex(269, 480);
vertex(640, 420);
vertex(640, 340);
endShape();

//white stripes
stroke(255);
strokeWeight(1,4);
line(0, 449, 640, 347);
line(23, 480, 640, 381);
line(220, 480, 640, 412);

//part 3: the hills
//hill 1
fill(129, 231, 122);
noStroke();
dayShape2 = color(129, 231, 122);
nightShape2 = color(72, 127, 68);
shapeColor2 = lerpColor(dayShape2, nightShape2, mouseX/width);
fill(shapeColor2);
beginShape();
vertex(214, 407);
vertex(640, 338);
vertex(640, 291);
vertex(214, 277);
endShape();

//hill 2
fill(105, 183, 99);
noStroke();
dayShape3 = color(105, 183, 99);
nightShape3 = color(62, 104, 58);
shapeColor3 = lerpColor(dayShape3, nightShape3, mouseX/width);
fill(shapeColor3);
triangle(640, 291, 640, 208, 317, 281);

//part 4: the tree
//trunk
fill(193, 173, 154);
noStroke();
dayShape4 = color(193, 173, 154);
nightShape4 = color(109, 97, 87);
shapeColor4 = lerpColor(dayShape4, nightShape4, mouseX/width);
fill(shapeColor4);
rect(252, 267, 3.5, 95);

//crown
fill(168, 229, 163);
noStroke();
dayShape5 = color(168, 229, 163);
nightShape5 = color(89, 119, 86);
shapeColor5 = lerpColor(dayShape5, nightShape5, mouseX/width);
fill(shapeColor5);
ellipse(253, 190, 155);

//part 5: the house
//front
fill(255, 183, 195);
noStroke();
dayShape6 = color(255, 183, 195);
nightShape6 = color(178, 128, 139);
shapeColor6 = lerpColor(dayShape6, nightShape6, mouseX/width);
fill(shapeColor6);
beginShape();
vertex(17, 438);
vertex(214, 407);
vertex(214, 159);
vertex(115, 108);
vertex(17, 190);
endShape();

//side
fill(237, 159, 170);
noStroke();
dayShape7 = color(237, 159, 170);
nightShape7 = color(135, 92, 100);
shapeColor7 = lerpColor(dayShape7, nightShape7, mouseX/width);
fill(shapeColor7);
quad(0, 190, 17, 190, 17, 438, 0, 441);

//roof
fill(222, 214, 209);
noStroke();
dayShape8 = color(222, 214, 209);
nightShape8 = color(150, 146, 144);
shapeColor8 = lerpColor(dayShape8, nightShape8, mouseX/width);
fill(shapeColor8);
quad(0, 190, 17, 190, 115, 108, 0, 102);

//windows
fill(184, 224, 222);
noStroke();
dayShape9 = color(184, 224, 222);
nightShape9 = color(152, 183, 181);
shapeColor9 = lerpColor(dayShape9, nightShape9, mouseX/width);
fill(shapeColor9);
q1 = quad(52, 225, 105, 217, 105, 276, 52, 285);
q2 = quad(144, 210, 191, 203, 191, 263, 144, 270);

//door
fill(193, 173, 154);
noStroke();
dayShape10 = color(193, 173, 154);
nightShape10 = color(114, 102, 93);
shapeColor10 = lerpColor(dayShape10, nightShape10, mouseX/width);
fill(shapeColor10);
quad(96, 317, 165, 306, 165, 414, 96, 425);

//text
myText = "Click for sound";

fill(245);
noStroke();
textFont("Bad Script");
  text(myText, 340, 340);
  textSize(30);


}

//sound starts when mouse is clicked
function mousePressed() {
  if (!mySong.isPlaying()) {
   mySong.play();
 } else {
   mySong.pause();
 }
}
