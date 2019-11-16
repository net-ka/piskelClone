import Animation from '../animation/index';

export default class FramesColor {
  constructor(mainCanvas, canvas) {
    this.mainCanvas = mainCanvas;
    this.canvas = canvas;
    this.frameColor();
  }

  // adding a real image to a frame

  frameColor() {
    const ctx = this.canvas.getContext('2d');

    const img = new Image(64, 64);
    const mainCanvasImageURL = this.mainCanvas.toDataURL('image/png');
    img.src = mainCanvasImageURL;

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);

    const speed = document.getElementById('speedAnimation');
    const speedValue = speed.value;
    new Animation(speedValue);
  }
}
