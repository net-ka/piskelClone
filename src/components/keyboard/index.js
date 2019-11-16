import Keyboard from './keyboard';

import penPic from '../../screens/images/pen.png';
import eraserPic from '../../screens/images/eraser.png';
import pipettePic from '../../screens/images/pipette.png';
import strokePic from '../../screens/images/stroke.png';
import mirrorPic from '../../screens/images/mirror.png';
import rectPic from '../../screens/images/rect.png';
import circlePic from '../../screens/images/circle.png';
import handPic from '../../screens/images/hand.png';
import paintPxPic from '../../screens/images/paint-px.png';
import lightenPic from '../../screens/images/lighten.png';
import delightenPic from '../../screens/images/delighten.png';
import bucketPic from '../../screens/images/bucket.png';
import brushPic from '../../screens/images/brush.png';
import dithPic from '../../screens/images/grid.png';

document.getElementById('hotkeys-img-pen').src = penPic;
document.getElementById('hotkeys-img-eraser').src = eraserPic;
document.getElementById('hotkeys-img-pipette').src = pipettePic;
document.getElementById('hotkeys-img-stroke').src = strokePic;
document.getElementById('hotkeys-img-mirror').src = mirrorPic;
document.getElementById('hotkeys-img-rectangle').src = rectPic;
document.getElementById('hotkeys-img-circle').src = circlePic;
document.getElementById('hotkeys-img-move').src = handPic;
document.getElementById('hotkeys-img-lighten').src = lightenPic;
document.getElementById('hotkeys-img-darken').src = delightenPic;
document.getElementById('hotkeys-img-bucket-px').src = paintPxPic;
document.getElementById('hotkeys-img-bucket').src = bucketPic;
document.getElementById('hotkeys-img-ditchering').src = dithPic;
document.getElementById('hotkeys-img-clear').src = brushPic;

export default Keyboard;
