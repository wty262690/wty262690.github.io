let camera = (c) => {
  let capture;
  let edgeImg;
  let videoBuffer;

  c.setup = () => {
    c.maxwindowsize = c.min(c.windowWidth, c.windowHeight)  
    let cnv = c.createCanvas(c.windowWidth, c.windowHeight);
    cnv.parent('sketch-camera');

    
    capture = c.createCapture(c.VIDEO);
    capture.size(c.windowWidth, c.windowWidth/2*1.5);
    capture.hide();

    c.pixelDensity(1); 
    videoBuffer = c.createGraphics(capture.width, capture.height);
    edgeImg = c.createImage(capture.width, capture.height);
  };

  c.draw = () => {
    c.clear();

    videoBuffer.image(capture, 0, 0, c.width, c.height);
    videoBuffer.loadPixels();
    
    
    if (videoBuffer.pixels.length > 0) {

      let shrinked = c.createGraphics(edgeImg.width, edgeImg.height);
      shrinked.push();
      shrinked.translate(edgeImg.width / 2, edgeImg.height / 2);
      shrinked.scale(0.95);
      shrinked.imageMode(c.CENTER);
      shrinked.image(edgeImg, 0, 0);
      shrinked.pop();
      edgeImg = shrinked.get();


      c.detectEdges(videoBuffer);
      c.imageMode(c.CENTER);
      c.image(edgeImg, c.windowWidth/2,c.windowHeight/2);
    } else {
      c.fill(0);
      c.textSize(24);
      c.text("Waiting for webcam pixels...", 50, 50);
    }
  };
  let time = 4;
  c.detectEdges = (image) => {
    edgeImg.loadPixels();
    let imagewidth = image.width, imageheight = image.height;
    let maxi = (imagewidth-1+(imageheight-1)*imagewidth)*4;
    let range = 4;
    let maxDist = imageheight / 2;
    //time = c.max(4,(time+1)%10);
for (let x = 1; x < imagewidth - 1; x += 1) {
  for (let y = 1; y < imageheight - 1; y += 1) {

      let i = ((x + y * imagewidth) * time) % maxi;
      
      let left = image.pixels[((x - 1) + y * image.width) * 4];
      let right = image.pixels[((x + 1) + y * image.width) * 4];
      let top = image.pixels[(x + (y - 1) * image.width) * 4];
      let bottom = image.pixels[(x + (y + 1) * image.width) * 4];
      
      let edgex = c.abs(right - left);
      let edgey = c.abs(bottom - top);
      let edge = edgex + edgey;
      let r = image.pixels[i];
      let g = image.pixels[i + 1];
      let b = image.pixels[i + 2];

      // 熱感顏色對應
      let heatColor = c.color(
        Math.floor(c.map(r, 0, 255, range, 0)) / range * 255,
        Math.floor(c.map(r, 0, 255, range, 0)) / range * 255,
        Math.floor(c.map(b, 0, 255, 0, range)) / range * 255,
        255
      );

      // 🔥【新增】計算離中心距離來調整 alpha
      let dx = x - imagewidth / 2;
      let dy = y - imageheight / 2;
      let distToCenter = Math.sqrt(dx * dx + dy * dy);
      //let fade = c.map(distToCenter, 0, maxDist * 0.95, 1, 0); // 0.95 是半徑邊緣
      
      let normDist = distToCenter / maxDist; // 正規化距離 (0~1)
      let fade = Math.exp(-normDist * normDist * 5); // 高斯分布型淡入淡出
      //fade = c.constrain(fade, 0, 1);

      let addbright = (fade * 255 - edge);
      // 寫入 pixels，使用 fade 作為 alpha 模糊
      edgeImg.pixels[i] = (c.red(heatColor)/0.1 + addbright)*0.2 + edgeImg.pixels[i] * 0.8;
      edgeImg.pixels[i + 1] = (c.green(heatColor)/1  + addbright)*0.2 + edgeImg.pixels[i+1] * 0.8;
      edgeImg.pixels[i + 2] = (c.blue(heatColor)/1  + addbright)*0.2 + edgeImg.pixels[i+2] * 0.8;
      edgeImg.pixels[i + 3] = c.min(255 * fade, edgeImg.pixels[i+2], edgeImg.pixels[i+1], edgeImg.pixels[i])
    }
  }

    edgeImg.updatePixels();
  };
};

new p5(camera);


        /*let i = (x + y * image.width) * 4;
        let left = image.pixels[((x - 1) + y * image.width) * 4];
        let right = image.pixels[((x + 1) + y * image.width) * 4];
        let top = image.pixels[(x + (y - 1) * image.width) * 4];
        let bottom = image.pixels[(x + (y + 1) * image.width) * 4];
        
        let dx = c.abs(right - left);
        let dy = c.abs(bottom - top);
        let edge = dx + dy;
        edgeImg.pixels[i] = 255-edge;      // R
        edgeImg.pixels[i + 1] = 0;  // G
        edgeImg.pixels[i + 2] = 0;  // B
        edgeImg.pixels[i + 3] = edge;   // A (不透明)
        */