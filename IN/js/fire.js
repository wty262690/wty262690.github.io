let fire = (fire) => {
  let particles = [];
  let bgLayer;
  fire.maxwindowsize;
  let width = fire.windowHeight
  let height = fire.windowHeight
  fire.setup = () => {
    fire.firesetup();
  }
  fire.firesetup = () => {
    fire.frameRate(10); 
    let cnv = fire.createCanvas(fire.windowWidth, fire.windowHeight);
    cnv.elt.style.filter = 'blur(6px) contrast(5.5)';
    cnv.parent('sketch-fire');

    
    fire.maxwindowsize = fire.min(fire.windowWidth, fire.windowHeight)  
    bgLayer = fire.createGraphics(fire.windowWidth, fire.windowHeight);
    bgLayer.colorMode(fire.HSB, 360, 100, 100, 255);
    let radius = fire.maxwindowsize * 1.8;
    let h = 0;
    for (let r = radius; r > 0; --r) {
      let h = fire.map(r, radius, 0, 10, 55);
      let s = fire.map(r, radius, 0, 100, 0);
      let b = fire.map(r, radius, 0, 0, 100);

      bgLayer.noStroke();
      bgLayer.fill(h, s, b);
      bgLayer.ellipse(fire.windowWidth / 2, fire.windowHeight / 2, r, r);
      
    }
    for (let i = 0; i < 500; i++) {
      let p = new Particle(fire);
      particles.push(p);
    }
}


fire.draw = () => {
  fire.background(0);
  fire.image(bgLayer, 0, 0);
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1); // 移除
      particles.push(new Particle(fire)); // 新增
    }
  }

}
}

  class Particle {
  
    constructor(fire) {
      this.create(fire);
    }
    create(fire){
      this.fire = fire;
      this.x = fire.random( fire.windowWidth/2-2, fire.windowWidth/2+2);
      this.y = fire.random( fire.windowHeight/2-2, fire.windowHeight/2+2);
      let angle = fire.random(fire.TWO_PI);
      let speed = fire.random(1, 10);
      this.vx = fire.cos(angle) * speed;
      this.vy = fire.sin(angle) * speed;

      this.alpha = 5;
      this.dy = fire.random(1, 70);
      this.dx = fire.random(this.dy, 70);
      this.turn = false;
    }

    finished() {
      return this.fire.dist(this.x, this.y, this.fire.windowWidth/2, this.fire.windowHeight/2) >= this.fire.maxwindowsize/2;
    }

    update() {
      let distence = this.fire.dist(this.x, this.y, this.fire.windowWidth/2, this.fire.windowHeight/2)
      this.x += this.vx / (distence*(5/this.fire.maxwindowsize));
      this.y += this.vy / (distence*(5/this.fire.maxwindowsize));
      if (this.turn){
        this.alpha -= distence/(this.fire.maxwindowsize*5);
      }
      else {
        this.alpha += distence/(this.fire.maxwindowsize*2.4);
        if (this.alpha > 10){
          this.turn = true;
        }
      }
      this.dx += 1.5;
      this.dy += 1.5;
    }

    show() {
      this.fire.noStroke();
      this.fire.fill(0, 0, 0, this.alpha);
      this.fire.ellipse(this.x, this.y, this.dx, this.dy);
    }
  }

new p5(fire);