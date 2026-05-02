var fgImage = null;
var bgImage = null;
var fgCanvas;
var bgCanvas;
var canvasCroma;

function loadForegroundImage() {
  var file = document.getElementById("fileInput");
  fgImage = new SimpleImage(file);
  fgCanvas = document.getElementById("canvasFront");
  fgImage.drawTo(fgCanvas);
}

function loadBackgroundImage() {
  var file = document.getElementById("fileBack");
  bgImage = new SimpleImage(file);
  bgCanvas = document.getElementById("canvasBack");
  bgImage.drawTo(bgCanvas);
}

function createComposite() {
  var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  var greenThreshold = 240;
  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {
      var bgPixel = bgImage.getPixel(x, y);
      output.setPixel(x, y, bgPixel);
    } else {
      output.setPixel(x, y, pixel);
    }
  }
  return output;
}

function doGreenScreen() {
  // Verifica se as imagens foram carregadas
  if (fgImage == null || !fgImage.complete()) {
    alert("Foreground image not loaded");
    return;
  }
  if (bgImage == null || !bgImage.complete()) {
    alert("Background image not loaded");
    return;
  }

  clearCanvas();

  var finalImage = createComposite();
  canvasCroma = document.getElementById("canvasCroma");
  finalImage.drawTo(canvasCroma);
}

function clearCanvas() {
  doClear(fgCanvas);
  doClear(bgCanvas);
  if (canvasCroma) {
    doClear(canvasCroma);
  }
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}
