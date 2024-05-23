function setup() {
    createCanvas(400, 400);
    background("purple")
  }
  
  function draw() {
    stroke("orange");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  