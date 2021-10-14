import { mouse } from '../constants/mouse.js';

export const addMouse = element => {
    const { devices, events, inputs, state } = element;

    devices.mouse = mouse;

    events.mousedown = event => {
        const input = inputs[event.button];
        if (input) {
            state[input] = true;
        }
    };

    events.mouseup = event => {
        const input = inputs[event.button];
        if (input) {
            state[input] = false;
        }
    };

    events.mousemove = event => {
        const input = inputs[mouse.MOVE];
        if (input) {
            state[input] = event;
        }
    };

    events.mousewheel = event => {
    };
};