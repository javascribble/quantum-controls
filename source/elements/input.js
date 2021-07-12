export class Input extends Quantum {
    events = {};
    devices = {};
    controls = {};

    constructor() {
        super();

        for (const plugin of Input.plugins) {
            plugin(this);
        }
    }

    static plugins = new Set();

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

Input.define('quantum-input');