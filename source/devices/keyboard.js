import { keyboard } from '../constants/keyboard.js';

export const addKeyboard = element => {
    const { devices, events, inputs, state } = element;

    devices.keyboard = keyboard;

    events.keydown = event => {
        const { repeat, key } = event;
        if (!repeat) {
            const input = inputs[key];
            if (input) {
                state[input] = true;
            }
        }
    };

    events.keyup = event => {
        const { repeat, key } = event;
        if (!repeat) {
            const input = inputs[key];
            if (input) {
                state[input] = false;
            }
        }
    };
};