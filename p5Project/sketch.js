let img;
let segments = [];
let numSegments = 50;
let drawSegments = true;

let pixelColor;

function preload() {
  img = loadImage("assets/Mona_Lisa.jpg");
}

function setup() {
  createCanvas(img.width, img.height);

  let segWidth = img.width/numSegments;
  let segHeight = img.height/numSegments;

  for (let yPos = 0; yPos < img.height; yPos += segHeight) {
    for (let xPos = 0; xPos < img.width; xPos += segWidth){
      let fillColor = img.get(xPos + segWidth/2, yPos + segHeight/2);
      let segment = new ImageSegment(xPos, yPos, segWidth, segHeight, fillColor);
      segments.push(segment);
    }
  }
  pixelColor = color(0);
}

function draw() {
  if (drawSegments) {
    for (const segment of segments) {
      segment.draw();
  }
} else {
  image(img, 0, 0);
}
  stroke(255);
  fill(pixelColor);
  circle(mouseX, mouseY, 40);
}

function mouseMoved() {
  pixelColor = img.get(mouseX, mouseY);
}

function keyPressed() {
  if (key == " ") {
    drawSegments = !drawSegments;
  }
}

class ImageSegment{
  constructor(xPos, yPos, width, height, fillColor) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
  }

  draw() {
    fill(this.fillColor);
    stroke(0);
    rect(this.xPos, this.yPos, this.width, this.height);
  }
}
