import { touch } from '../constants/touch.js';
import { Input } from '../elements/input.js';

const { events, devices } = Input;

events.touchstart = event => { };
events.touchend = event => { };
events.touchmove = event => { };
events.touchcancel = event => { };

devices.touch = touch;