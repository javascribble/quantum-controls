import { mouse } from '../constants/mouse.js';

export const addMouse = input => {
    const { controls, devices, events, state } = input;

    devices.mouse = mouse;

    events.mousedown = event => {
        const control = controls[event.button];
        if (control) {
            state[control] = true;
        }
    };

    events.mouseup = event => {
        const control = controls[event.button];
        if (control) {
            state[control] = false;
        }
    };

    events.mousemove = event => {
        const control = controls[mouse.MOVE];
        if (control) {
            state[control] = event;
        }
    };

    events.mousewheel = event => {
    };
};