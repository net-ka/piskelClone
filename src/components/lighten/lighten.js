import { FramesColor } from '../frames-list/index';

export default class Lighten {
  constructor(mainCanvas) {
    this.isMouseDown = false;
    this.mainCanvas = mainCanvas;
    this.lightenSelect();
  }

  lightenSelect() {
    const ctx = this.mainCanvas.getContext('2d');
    this.mainCanvas.addEventListener('mousedown', () => {
      this.isMouseDown = true;
    });

    this.mainCanvas.addEventListener('mousemove', e => this.lightenDraw(e, ctx));

    this.mainCanvas.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });
  }

  lightenDraw(e, ctx) {
    const lightenTool = document.getElementById('lightenTool');
    if (lightenTool.classList.contains('chosen')) {
      if (this.isMouseDown) {
        const canvasWidth = this.mainCanvas.width;
        const realCanvasSize = getComputedStyle(this.mainCanvas).width.slice(0, -2);
        const pixelWidth = realCanvasSize / canvasWidth;
        const x = Math.floor(e.offsetX / pixelWidth);
        const y = Math.floor(e.offsetY / pixelWidth);

        const chosenLine = document.querySelector('.chosen-line');
        const line = getComputedStyle(chosenLine).width.slice(0, -2);

        const pixel = ctx.getImageData(x - 1, y - 1, line / 7 + 1, line / 7 + 1);
        const { data } = pixel;

        const pixelModif = data.map((item, i) => {
          if (i % 4 === 0) {
            return item;
          }
          return item + 8;
        });

        const imgData = ctx.createImageData(line / 7 + 1, line / 7 + 1);
        for (let i = 0; i < imgData.data.length; i += 4) {
          imgData.data[i] = pixelModif[i + 0];
          imgData.data[i + 1] = pixelModif[i + 1];
          imgData.data[i + 2] = pixelModif[i + 2];
          imgData.data[i + 3] = 255;
        }

        ctx.putImageData(imgData, x - 1, y - 1);
      }
      const canvas = document.querySelectorAll('.frame');
      canvas.forEach((item) => {
        if (item.classList.contains('selected-frame')) {
          new FramesColor(this.mainCanvas, item);
        }
      });
    }

    this.mainCanvas.removeEventListener('mousemove', () => this.lightenDraw());
  }
}
