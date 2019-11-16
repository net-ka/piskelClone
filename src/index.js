import './screens/styles.css';
import './screens/landing/landingstyles.css';

import appPic from './screens/landing/images/app-screenshot.png';
import fishPic from './screens/landing/images/fish.gif';
import catPic from './screens/landing/images/cat.gif';
import humansPic from './screens/landing/images/humans.gif';

const screenshot = document.getElementById('screen-img');
screenshot.src = appPic;

const fish = document.getElementById('fish-img');
fish.src = fishPic;

const cat = document.getElementById('cat-img');
cat.src = catPic;

const humans = document.getElementById('humans-img');
humans.src = humansPic;
