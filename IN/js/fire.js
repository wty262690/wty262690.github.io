let fire = (fire) => {
  let particles = [];
  let bgLayer;
  fire.maxwindowsize;
  fire.setup = () => {
    fire.firesetup();
  }
  fire.firesetup = () => {
    let cnv = fire.createCanvas(fire.windowWidth, fire.windowHeight);
    cnv.elt.style.filter = 'blur(6px) contrast(5.5)';
    cnv.parent('sketch-fire');

    
    fire.maxwindowsize = fire.min(fire.windowWidth, fire.windowHeight)  
    bgLayer = fire.createGraphics(fire.windowWidth, fire.windowHeight);
    bgLayer.colorMode(fire.HSB, 360, 100, 100, 255);
    let radius = fire.maxwindowsize * 2;
    let h = 0;
    for (let r = radius; r > 0; --r) {
      let h = fire.map(r, radius, 0, 10, 55);
      let s = fire.map(r, radius, 0, 100, 0);
      let b = fire.map(r, radius, 0, 0, 100);

      bgLayer.noStroke();
      bgLayer.fill(h, s, b);
      bgLayer.ellipse(fire.windowWidth / 2, fire.windowHeight / 2, r, r);
      
    }
}


fire.draw = () => {
  fire.background(0);
  fire.image(bgLayer, 0, 0);

  for (let i = 0; i < 5; i++) {
    let p = new Particle(fire);
    particles.push(p);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

  fire.detectEdges = () =>{
    img.loadPixels();
    edgeImg.loadPixels();

    for (let x = 1; x < img.width - 1; x++) {
      for (let y = 1; y < img.height - 1; y++) {
        let i = (x + y * img.width) * 4;

        // Simple Sobel-like horizontal and vertical differences
        let left = img.pixels[((x - 1) + y * img.width) * 4];
        let right = img.pixels[((x + 1) + y * img.width) * 4];
        let top = img.pixels[(x + (y - 1) * img.width) * 4];
        let bottom = img.pixels[(x + (y + 1) * img.width) * 4];

        let dx = abs(right - left);
        let dy = abs(bottom - top);

        let edge = dx + dy;

        edgeImg.pixels[i] = edge;     // R
        edgeImg.pixels[i + 1] = edge; // G
        edgeImg.pixels[i + 2] = edge; // B
        edgeImg.pixels[i + 3] = 255;  // A
      }
    }

    edgeImg.updatePixels();
  }
}


  class Particle {
  
    constructor(fire) {
      this.fire = fire;
      this.x = fire.random( fire.windowWidth/2-5, fire.windowWidth/2+5);
      this.y = fire.random( fire.windowHeight/2-5, fire.windowHeight/2+5);
      let angle = fire.random(fire.TWO_PI);
      let speed = fire.random(1, 4);
      this.vx = fire.cos(angle) * speed;
      this.vy = fire.sin(angle) * speed;

      this.alpha = 10;
      this.dy = fire.random(1, 70);
      this.dx = fire.random(this.dy, 70);
      this.turn = false;
    }

    finished() {
      return this.alpha < 0;
    }

    update() {
      let distence = this.fire.dist(this.x, this.y, this.fire.windowWidth/2, this.fire.windowHeight/2)
      this.x += this.vx / (distence*(2/this.fire.windowWidth));
      this.y += this.vy / (distence*(2/this.fire.windowHeight));
      //this.vx /= 1.02;
      //this.vy /= 1.02;
      if (this.turn){
        this.alpha -= distence/(this.fire.maxwindowsize*2);
      }
      else {
        this.alpha += distence/(this.fire.maxwindowsize*2);
        if (this.alpha > 255){
          this.turn = true;
        }
      }
      this.dx += 0.5;
      this.dy += 0.5;
    }

    show() {
      this.fire.noStroke();
      this.fire.fill(0, 0, 0, this.alpha);
      //fill(random(200,230), random(50, 150), 10, this.alpha);
      this.fire.ellipse(this.x, this.y, this.dx, this.dy);
    }
  }

new p5(fire);