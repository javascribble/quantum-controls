import { addGamepad } from '../devices/gamepad.js';
import { addKeyboard } from '../devices/keyboard.js';
import { addMouse } from '../devices/mouse.js';
import { addTouch } from '../devices/touch.js';

export class Input extends Quantum {
    events = {};
    devices = {};
    controls = {};

    constructor() {
        super();

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