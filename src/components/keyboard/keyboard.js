export default class Keyboard {
  constructor() {
    this.visibility();
    this.hide();
    this.defaultValues();
    this.eventListeners();
  }

  visibility() {
    const keyboardCall = document.getElementById('keyboard-tool');
    const keyboardPanel = document.getElementById('hotkeys-container');
    keyboardCall.addEventListener('click', () => {
      keyboardPanel.classList.remove('hidden');
    });
  }

  hide() {
    const keyboardClose = document.getElementById('hotkeys-close');
    const keyboardPanel = document.getElementById('hotkeys-container');
    keyboardClose.addEventListener('click', () => {
      keyboardPanel.classList.add('hidden');
    });
  }

  eventListeners() {
    const hotkeyInput = document.querySelectorAll('.hotkey-input');
    const bufferValue = [];
    hotkeyInput.forEach((item) => {
      bufferValue.push(item.value);
    });

    const hotkeyList = document.querySelector('.hotkeys-list');

    hotkeyList.addEventListener('input', () => {
      let newValue;
      hotkeyInput.forEach((item) => {
        if (window.event.target === item) {
          newValue = window.event.target.value;
        }
      });

      let j = 0;
      Array.from(hotkeyInput).reduce((accum, current) => {
        if (current.value === newValue || current.value === newValue.toUpperCase()) {
          j += 1;
        }
      });

      if (j > 1) {
        window.event.target.value = '';
        window.event.target.placeholder = 'NO!';
      }

      this.defaultKeys();
    });
  }

  defaultValues() {
    document.getElementById('hotkey-pen').value = 'Q';
    document.getElementById('hotkey-easer').value = 'W';
    document.getElementById('hotkey-pipette').value = 'E';
    document.getElementById('hotkey-stroke').value = 'R';
    document.getElementById('hotkey-mirror').value = 'T';
    document.getElementById('hotkey-rectangle').value = 'Y';
    document.getElementById('hotkey-circle').value = 'U';
    document.getElementById('hotkey-move').value = 'I';
    document.getElementById('hotkey-lighten').value = 'O';
    document.getElementById('hotkey-darken').value = 'P';
    document.getElementById('hotkey-bucket-px').value = 'A';
    document.getElementById('hotkey-bucket').value = 'S';
    document.getElementById('hotkey-ditchering').value = 'D';
    document.getElementById('hotkey-clear').value = 'F';

    this.defaultKeys();
  }

  defaultKeys() {
    const hotkeyPen = document.getElementById('hotkey-pen').value;
    const hotkeyEaser = document.getElementById('hotkey-easer').value;
    const hotkeyPipette = document.getElementById('hotkey-pipette').value;
    const hotkeyStroke = document.getElementById('hotkey-stroke').value;
    const hotkeyMirror = document.getElementById('hotkey-mirror').value;
    const hotkeyRectangle = document.getElementById('hotkey-rectangle').value;
    const hotkeyCircle = document.getElementById('hotkey-circle').value;
    const hotkeyMove = document.getElementById('hotkey-move').value;
    const hotkeyLighten = document.getElementById('hotkey-lighten').value;
    const hotkeyDarken = document.getElementById('hotkey-darken').value;
    const hotkeyBucketPx = document.getElementById('hotkey-bucket-px').value;
    const hotkeyBucket = document.getElementById('hotkey-bucket').value;
    const hotkeyDitchering = document.getElementById('hotkey-ditchering').value;
    const hotkeyClear = document.getElementById('hotkey-clear').value;

    function keyboardcontrols(e) {
      const tool = document.querySelectorAll('.tool');
      tool.forEach((item) => {
        if (item.classList.contains('chosen')) {
          item.classList.remove('chosen');
        }
      });

      if (e.key === hotkeyPen || e.key === hotkeyPen.toLowerCase()) {
        document.getElementById('penTool').classList.add('chosen');
      }
      if (e.key === hotkeyEaser || e.key === hotkeyEaser.toLowerCase()) {
        document.getElementById('eraserTool').classList.add('chosen');
      }
      if (e.key === hotkeyPipette || e.key === hotkeyPipette.toLowerCase()) {
        document.getElementById('pipetteTool').classList.add('chosen');
      }
      if (e.key === hotkeyStroke || e.key === hotkeyStroke.toLowerCase()) {
        document.getElementById('strokeTool').classList.add('chosen');
      }
      if (e.key === hotkeyMirror || e.key === hotkeyMirror.toLowerCase()) {
        document.getElementById('mirrorTool').classList.add('chosen');
      }
      if (e.key === hotkeyRectangle || e.key === hotkeyRectangle.toLowerCase()) {
        document.getElementById('rectTool').classList.add('chosen');
      }
      if (e.key === hotkeyCircle || e.key === hotkeyCircle.toLowerCase()) {
        document.getElementById('circleTool').classList.add('chosen');
      }
      if (e.key === hotkeyMove || e.key === hotkeyMove.toLowerCase()) {
        document.getElementById('moveTool').classList.add('chosen');
      }
      if (e.key === hotkeyLighten || e.key === hotkeyLighten.toLowerCase()) {
        document.getElementById('lightenTool').classList.add('chosen');
      }
      if (e.key === hotkeyDarken || e.key === hotkeyDarken.toLowerCase()) {
        document.getElementById('delightenTool').classList.add('chosen');
      }
      if (e.key === hotkeyBucketPx || e.key === hotkeyBucketPx.toLowerCase()) {
        document.getElementById('paintPxTool').classList.add('chosen');
      }
      if (e.key === hotkeyBucket || e.key === hotkeyBucket.toLowerCase()) {
        document.getElementById('bucketTool').classList.add('chosen');
      }
      if (e.key === hotkeyDitchering || e.key === hotkeyDitchering.toLowerCase()) {
        document.getElementById('dithTool').classList.add('chosen');
      }
      if (e.key === hotkeyClear || e.key === hotkeyClear.toLowerCase()) {
        document.getElementById('brushTool').classList.add('chosen');
      }
    }
    document.addEventListener('keydown', keyboardcontrols);
  }
}
