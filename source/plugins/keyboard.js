import { keyboard } from '../constants/keyboard.js';

const { Input } = Quantum;

Input.plugins.add(input => {
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
});