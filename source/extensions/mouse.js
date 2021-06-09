import { mouse } from '../constants/mouse.js';
import { Input } from '../elements/input.js';

const { events, devices } = Input;

events.mousedown = event => {
    const { target } = event;
    const control = target.controls[event.button];
    if (control) {
        target[control] = true;
    }
};

events.mouseup = event => {
    const { target } = event;
    const control = target.controls[event.button];
    if (control) {
        target[control] = false;
    }
};

events.mousemove = event => {
    const { target } = event;
    const control = target.controls[mouse.MOVE];
    if (control) {
        target[control] = event;
    }
};

events.mousewheel = event => {
};

devices.mouse = mouse;