export class Input extends Quantum {
    static events = new Map();

    constructor() {
        super();

        this.setAttribute('tabindex', 0);
    }

    connectedCallback() {
        for (const [event, handler] of Input.events) {
            this.addEventListener(event, handler, { passive: true });
        }
    }

    disconnectedCallback() {
        for (const [event, handler] of Input.events) {
            this.removeEventListener(event, handler, { passive: true });
        }
    }
}