export class Input extends Quantum {
    controls = {};

    static events = {};
    static devices = {};

    connectedCallback() {
        for (const [event, handler] of Object.entries(Input.events)) {
            this.addEventListener(event, handler, { passive: true });
        }
    }

    disconnectedCallback() {
        for (const [event, handler] of Object.entries(Input.events)) {
            this.removeEventListener(event, handler, { passive: true });
        }
    }
}