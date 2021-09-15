import { addGamepad } from '../devices/gamepad.js';
import { addKeyboard } from '../devices/keyboard.js';
import { addMouse } from '../devices/mouse.js';
import { addTouch } from '../devices/touch.js';
import input from '../templates/input.js';

export class Input extends Quantum {
    controls = {};
    devices = {};
    events = {};
    state = {};

    constructor() {
        super();

        this.setAttribute('tabindex', 0);

        addGamepad(this);
        addKeyboard(this);
        addMouse(this);
        addTouch(this);
    }

    connectedCallback() {
        const parent = this.parentElement;
        for (const [event, handler] of Object.entries(this.events)) {
            parent.addEventListener(event, handler, { passive: true });
        }
    }

    disconnectedCallback() {
        const parent = this.parentElement;
        for (const [event, handler] of Object.entries(this.events)) {
            parent.removeEventListener(event, handler, { passive: true });
        }
    }
}

Input.define('quantum-input', input);