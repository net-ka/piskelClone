import { FramesColor } from '../frames-list/index';

export default class Brush {
  constructor(mainCanvas) {
    this.mainCanvas = mainCanvas;
    this.brushSelect();
  }

  brushSelect() {
    this.mainCanvas.addEventListener('mousedown', () => this.brushDraw());
  }

  brushDraw() {
    const ctx = this.mainCanvas.getContext('2d');
    const canvasWidth = this.mainCanvas.width;
    const brushTool = document.getElementById('brushTool');

    if (brushTool.classList.contains('chosen')) {
      ctx.clearRect(0, 0, canvasWidth, canvasWidth);

      const canvas = document.querySelectorAll('.frame');
      canvas.forEach((item) => {
        if (item.classList.contains('selected-frame')) {
          const ctxFrame = item.getContext('2d');
          ctxFrame.clearRect(0, 0, item.width, item.height);
          new FramesColor(this.mainCanvas, item);
        }
      });
    } else {
      this.mainCanvas.removeEventListener('mousedown', () => this.brushDraw());
    }
  }
}
