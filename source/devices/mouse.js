import { mouse } from '../constants/mouse.js';

export const addMouse = input => {
    const { events, devices } = input;

    events.mousedown = event => {
        const control = input.controls[event.button];
        if (control) {
            input[control] = true;
        }
    };

    events.mouseup = event => {
        const control = input.controls[event.button];
        if (control) {
            input[control] = false;
        }
    };

    events.mousemove = event => {
        const control = input.controls[mouse.MOVE];
        if (control) {
            input[control] = event;
        }
    };

    events.mousewheel = event => {
    };

    devices.mouse = mouse;
};