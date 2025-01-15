function setup() {
  createCanvas(500, 500);
  background(220);

  for (x = 0; x < 30; x++) {
    drawEllipse(random(0, width), random(0, height), random(30, 60));
  }
}

function drawEllipse(x, y, size) {
  fill(150, 230, 250, 150); 
  ellipse(x, y, size+20, size);
}
