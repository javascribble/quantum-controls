import { Input } from '../elements/input.js';

const touchstart = event => { };
const touchmove = event => { };
const touchend = event => { };
const touchcancel = event => { };

Input.events.set('touchstart', touchstart);
Input.events.set('touchmove', touchmove);
Input.events.set('touchend', touchend);
Input.events.set('touchcancel', touchcancel);

Input.prototype.getTouch = function (mouse) {
};