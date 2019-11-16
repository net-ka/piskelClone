import wasteBin from '../components/frames-list/images/waste-bin.png';
import copyImg from '../components/frames-list/images/copy.png';
import rotateColor from './images/rotate-col.png';

import penPic from './images/pen.png';
import eraserPic from './images/eraser.png';
import pipettePic from './images/pipette.png';
import strokePic from './images/stroke.png';
import mirrorPic from './images/mirror.png';
import rectPic from './images/rect.png';
import circlePic from './images/circle.png';
import handPic from './images/hand.png';
import paintPxPic from './images/paint-px.png';
import lightenPic from './images/lighten.png';
import delightenPic from './images/delighten.png';
import reflectPic from './images/reflect.png';
import rotatePic from './images/rotate.png';
import bucketPic from './images/bucket.png';
import brushPic from './images/brush.png';
import dithPic from './images/grid.png';

import keyboardPic from './images/keyboard.png';

import Pen from '../components/pen/index';
import Eraser from '../components/eraser/index';
import Stroke from '../components/stroke/index';
import Pipette from '../components/pipette/index';
import Mirror from '../components/mirror/index';
import Rect from '../components/rect/index';
import Circle from '../components/circle/index';
import Move from '../components/move/index';
import PaintPx from '../components/paintPx/index';
import Lighten from '../components/lighten/index';
import Delighten from '../components/delighten/index';
import Reflect from '../components/reflect/index';
import Rotate from '../components/rotate/index';
import Bucket from '../components/bucket/index';
import Brush from '../components/brush/index';
import Dith from '../components/dithering/index';
import Keyboard from '../components/keyboard/index';
import { FramesAdd } from '../components/frames-list/index';
import SaveGif from '../components/gif/gif';

const mainCanvas = document.getElementById('main-canvas');

mainCanvas.width = 64;
mainCanvas.height = 64;

const allFrames = document.querySelectorAll('.frame');
allFrames.forEach((item, i) => {
  allFrames[i].width = 64;
  allFrames[i].height = 64;
});

const keyboardTool = document.getElementById('keyboard-tool');
keyboardTool.src = keyboardPic;

document.getElementById('pen').src = penPic;
document.getElementById('eraser').src = eraserPic;
document.getElementById('pipette').src = pipettePic;
document.getElementById('stroke').src = strokePic;
document.getElementById('mirror').src = mirrorPic;
document.getElementById('rect').src = rectPic;
document.getElementById('circle').src = circlePic;
document.getElementById('move').src = handPic;
document.getElementById('lighten').src = lightenPic;
document.getElementById('delighten').src = delightenPic;
document.getElementById('paintPx').src = paintPxPic;
document.getElementById('bucket').src = bucketPic;
document.getElementById('dith').src = dithPic;
document.getElementById('brush').src = brushPic;

document.getElementById('reflect').src = reflectPic;
document.getElementById('rotate').src = rotatePic;

export default class ToolsSelect {
  constructor() {
    this.addFirstFrame();
    this.toolSelect();
    this.addOtherFrames();
    this.speedValue();
  }

  addFirstFrame() {
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('remove').src = wasteBin;
      document.getElementById('copy').src = copyImg;
      const selectedFrame = document.getElementById('frame');
      selectedFrame.classList.add('selected-frame');

      document.getElementById('rotate-color').src = rotateColor;
      this.colorRotate();

      ToolsSelect.lineWidth();
      new Reflect(mainCanvas);
      new Rotate(mainCanvas);

      new Keyboard();
      new SaveGif();
    });
  }

  speedValue() {
    const speed = document.getElementById('speedAnimation');
    function getSpeedValue() {
      const speedValue = speed.value;
      speed.title = `${speedValue}`;
    }
    document.addEventListener('DOMContentLoaded', getSpeedValue);
    speed.addEventListener('input', getSpeedValue);
  }

  colorRotate() {
    const rotateCol = document.getElementById('rotate-color');
    rotateCol.addEventListener('click', () => {
      const primaryColorInput = document.getElementById('primary-color');
      const seconryColorInput = document.getElementById('secondary-color');

      const bufferColor = seconryColorInput.value;
      seconryColorInput.value = primaryColorInput.value;
      primaryColorInput.value = bufferColor;
    });
  }

  addOtherFrames() {
    const newFrameBtn = document.getElementById('new-frame-button');
    newFrameBtn.addEventListener('click', () => {
      new FramesAdd(mainCanvas);
    }, { once: true });
  }

  static lineWidth() {
    const allLineWidth = document.querySelector('.line-width-wrapper');
    const lineWidths = document.querySelectorAll('.line-width');

    allLineWidth.addEventListener('click', () => {
      lineWidths.forEach((item) => {
        if (window.event.target === allLineWidth) {
          return;
        }
        if (item.classList.contains('chosen-line') && window.event.target === item) {
          return;
        }
        if (item.classList.contains('chosen-line')) {
          item.classList.remove('chosen-line');
        } else if (window.event.target === item) {
          item.classList.add('chosen-line');
        }
      });
    });
  }

  toolSelect() {
    this.showCoorditanes();
    const tools = document.getElementById('tools');
    const tool = document.querySelectorAll('.tool');
    const toolImg = document.querySelectorAll('.img-tool');

    tools.addEventListener('click', () => {
      toolImg.forEach((item, i) => {
        if (tool[i].classList.contains('chosen')) {
          tool[i].classList.remove('chosen');
        } else if (window.event.target === item) {
          tool[i].classList.add('chosen');
        }
      });
    });

    this.toolSelectCanvas();
    this.toolSelectEraser();
    this.toolSelectStroke();
    this.toolSelectPipette();
    this.toolSelectMirror();
    this.toolSelectRect();
    this.toolSelectCircle();
    this.toolSelectMove();
    this.toolSelectPaintPx();
    this.toolSelectLighten();
    this.toolSelectDelighten();
    this.toolSelectBucket();
    this.toolSelectBrush();
    this.toolSelectDith();
  }

  showCoorditanes() {
    mainCanvas.addEventListener('mousemove', (e) => {
      const canvasWidth = mainCanvas.width;
      const realCanvasSize = getComputedStyle(mainCanvas).width.slice(0, -2);
      const pixelWidth = realCanvasSize / canvasWidth;
      const penX = Math.floor(e.offsetX / pixelWidth);
      const penY = Math.floor(e.offsetY / pixelWidth);

      const coord = document.getElementById('coord');
      coord.innerHTML = ` ${penX}:${penY}`;
    });

    mainCanvas.addEventListener('mouseleave', () => {
      const coord = document.getElementById('coord');
      coord.innerHTML = ' ';
    });
  }

  toolSelectCanvas() {
    const penTool = document.getElementById('penTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (penTool.classList.contains('chosen')) {
        new Pen(mainCanvas);
      }
    });
  }

  toolSelectEraser() {
    const eraserTool = document.getElementById('eraserTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (eraserTool.classList.contains('chosen')) {
        new Eraser(mainCanvas);
      }
    });
  }

  toolSelectStroke() {
    const strokeTool = document.getElementById('strokeTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (strokeTool.classList.contains('chosen')) {
        new Stroke(mainCanvas);
      }
    });
  }

  toolSelectPipette() {
    const pipetteTool = document.getElementById('pipetteTool');
    mainCanvas.addEventListener('click', (e) => {
      if (pipetteTool.classList.contains('chosen')) {
        new Pipette(e, mainCanvas);
      }
    });
  }

  toolSelectMirror() {
    const mirrorTool = document.getElementById('mirrorTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (mirrorTool.classList.contains('chosen')) {
        new Mirror(mainCanvas);
      }
    });
  }

  toolSelectRect() {
    const rectTool = document.getElementById('rectTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (rectTool.classList.contains('chosen')) {
        new Rect(mainCanvas);
      }
    });
  }

  toolSelectCircle() {
    const circleTool = document.getElementById('circleTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (circleTool.classList.contains('chosen')) {
        new Circle(mainCanvas);
      }
    });
  }

  toolSelectMove() {
    const moveTool = document.getElementById('moveTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (moveTool.classList.contains('chosen')) {
        new Move(mainCanvas);
      }
    });
  }

  toolSelectPaintPx() {
    const paintPxTool = document.getElementById('paintPxTool');
    mainCanvas.addEventListener('click', (e) => {
      if (paintPxTool.classList.contains('chosen')) {
        new PaintPx(e, mainCanvas);
      }
    });
  }

  toolSelectLighten() {
    const lightenTool = document.getElementById('lightenTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (lightenTool.classList.contains('chosen')) {
        new Lighten(mainCanvas);
      }
    });
  }

  toolSelectDelighten() {
    const delightenTool = document.getElementById('delightenTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (delightenTool.classList.contains('chosen')) {
        new Delighten(mainCanvas);
      }
    });
  }

  toolSelectBucket() {
    const bucketTool = document.getElementById('bucketTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (bucketTool.classList.contains('chosen')) {
        new Bucket(mainCanvas);
      }
    });
  }

  toolSelectBrush() {
    const brushTool = document.getElementById('brushTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (brushTool.classList.contains('chosen')) {
        new Brush(mainCanvas);
      }
    });
  }

  toolSelectDith() {
    const dithTool = document.getElementById('dithTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (dithTool.classList.contains('chosen')) {
        new Dith(mainCanvas);
      }
    });
  }
}
