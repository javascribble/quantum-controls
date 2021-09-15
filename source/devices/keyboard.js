import { keyboard } from '../constants/keyboard.js';

export const addKeyboard = input => {
    const { controls, devices, events, state } = input;

    devices.keyboard = keyboard;

    events.keydown = event => {
        const { repeat, key } = event;
        if (!repeat) {
            const control = controls[key];
            if (control) {
                state[control] = true;
            }
        }
    };

    events.keyup = event => {
        const { repeat, key } = event;
        if (!repeat) {
            const control = controls[key];
            if (control) {
                state[control] = false;
            }
        }
    };
};