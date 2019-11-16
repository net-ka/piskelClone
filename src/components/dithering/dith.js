import { FramesColor } from '../frames-list/index';

export default class Dith {
  constructor(mainCanvas) {
    this.isMouseDown = false;
    this.mainCanvas = mainCanvas;
    this.dithCanvas();
  }

  dithCanvas() {
    this.mainCanvas.addEventListener('mousedown', () => {
      this.isMouseDown = true;
    });

    this.mainCanvas.addEventListener('mousemove', e => this.dithDraw(e));

    this.mainCanvas.addEventListener('mouseup', () => {
      this.isMouseDown = false;
      const canvas = document.querySelectorAll('.frame');
      canvas.forEach((item) => {
        if (item.classList.contains('selected-frame')) {
          new FramesColor(this.mainCanvas, item);
        }
      });
    });
  }

  dithDraw(e) {
    const dithTool = document.getElementById('dithTool');
    const ctx = this.mainCanvas.getContext('2d');
    if (dithTool.classList.contains('chosen')) {
      const chosenLine = document.querySelector('.chosen-line');
      const line = getComputedStyle(chosenLine).width.slice(0, -2);

      const primaryColorInput = document.getElementById('primary-color');
      const primaryColor = primaryColorInput.value;

      const seconryColorInput = document.getElementById('secondary-color');
      const secondaryColor = seconryColorInput.value;

      ctx.lineWidth = line;

      if (this.isMouseDown) {
        const canvasWidth = this.mainCanvas.width;
        const realCanvasSize = getComputedStyle(this.mainCanvas).width.slice(0, -2);
        const pixelWidth = realCanvasSize / canvasWidth;
        const penX = Math.floor(e.offsetX / pixelWidth);
        const penY = Math.floor(e.offsetY / pixelWidth);

        const rectTarget = [];
        let k = 0;
        for (let i = 0; i < line / 7; i += 1) {
          rectTarget.push([i, k]);
          if (i === Math.round(line / 7 - 1) && k < line / 7 - 1) {
            i = -1;
            k += 1;
          }
        }

        rectTarget.forEach((item) => {
          if (((penX + item[0]) % 2 === 0 && (penY + item[1]) % 2 === 0)
            || ((penX + item[0]) % 2 !== 0 && (penY + item[1]) % 2 !== 0)) {
            ctx.fillStyle = primaryColor;
            ctx.fillRect(penX + item[0], penY + item[1], 1, 1);
          }
          if (((penX + item[0]) % 2 !== 0 && (penY + item[1]) % 2 === 0)
            || ((penX + item[0]) % 2 === 0 && (penY + item[1]) % 2 !== 0)) {
            ctx.fillStyle = secondaryColor;
            ctx.fillRect(penX + item[0], penY + item[1], 1, 1);
          }
        });
      }

      this.mainCanvas.removeEventListener('mousemove', () => this.dithDraw());
    }
  }
}
