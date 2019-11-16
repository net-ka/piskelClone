import { FramesColor } from '../frames-list/index';

export default class PaintPx {
  constructor(e, mainCanvas) {
    this.mainCanvas = mainCanvas;
    this.e = e;
    this.PaintPxSelect();
  }

  PaintPxSelect() {
    const ctx = this.mainCanvas.getContext('2d');
    const primaryColorInput = document.getElementById('primary-color');
    const hex = primaryColorInput.value;

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const canvasWidth = this.mainCanvas.width;
    const realCanvasSize = getComputedStyle(this.mainCanvas).width.slice(0, -2);
    const pixelWidth = realCanvasSize / canvasWidth;
    const x = Math.floor(this.e.offsetX / pixelWidth);
    const y = Math.floor(this.e.offsetY / pixelWidth);

    const pixel = ctx.getImageData(0, 0, canvasWidth, canvasWidth);
    const { data } = pixel;

    const pixelTarget = ctx.getImageData(x, y, 1, 1);
    const dataTarget = pixelTarget.data;
    const rgbTarget = `rgb(${dataTarget[0]}, ${dataTarget[1]
    }, ${dataTarget[2]})`;

    data.forEach((item, i) => {
      if (i % 4 === 0) {
        const rgb = `rgb(${data[i]}, ${data[i + 1]
        }, ${data[i + 2]})`;
        if (rgb === rgbTarget) {
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
        }
      }
    });

    ctx.putImageData(pixel, 0, 0);

    this.mainCanvas.addEventListener('mousemove', () => {
      const canvas = document.querySelectorAll('.frame');
      canvas.forEach((item) => {
        if (item.classList.contains('selected-frame')) {
          new FramesColor(this.mainCanvas, item);
        }
      });
    });
  }
}
