import { keyboard } from '../constants/keyboard.js';

export const addKeyboard = input => {
    const { events, devices } = input;

    events.keydown = event => {
        const { repeat, key } = event;
        if (!repeat) {
            const control = input.controls[key];
            if (control) {
                input[control] = true;
            }
        }
    };

    events.keyup = event => {
        const { repeat, key } = event;
        if (!repeat) {
            const control = input.controls[key];
            if (control) {
                input[control] = false;
            }
        }
    };

    devices.keyboard = keyboard;
};