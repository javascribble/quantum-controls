import { keyboard } from '../constants/keyboard.js';
import { Input } from '../elements/input.js';

const { events, devices } = Input;

events.keydown = event => {
    const { target, repeat, key } = event;
    if (!repeat) {
        const control = target.controls[key];
        if (control) {
            target[control] = true;
        }
    }
};

events.keyup = event => {
    const { target, repeat, key } = event;
    if (!repeat) {
        const control = target.controls[key];
        if (control) {
            target[control] = false;
        }
    }
};

devices.keyboard = keyboard;