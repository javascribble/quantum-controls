import { Input } from '../elements/input.js';

const mousedown = event => { };
const mousemove = event => { };
const mouseup = event => { };
const mousewheel = event => { };

Input.events.set('mousedown', mousedown);
Input.events.set('mousemove', mousemove);
Input.events.set('mouseup', mouseup);
Input.events.set('mousewheel', mousewheel);

Input.prototype.getMouse = function (mouse) {
};