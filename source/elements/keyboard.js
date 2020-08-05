export class Keyboard extends quantum.Component {
    schemata = new Map();
    keys = new Map();

    connectedCallback() {
        this.subscribe();
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    subscribe() {
        this.parentElement.addEventListener('keydown', this.keyDown.bind(this));
        this.parentElement.addEventListener('keyup', this.keyUp.bind(this));
    }

    unsubscribe() {
        this.parentElement.removeEventListener('keydown', this.keyDown.bind(this));
        this.parentElement.removeEventListener('keyup', this.keyUp.bind(this));
    }

    keyDown(event) {
        this.keys.get(event.key)?.down?.(event);
    }

    keyUp(event) {
        this.keys.get(event.key)?.up?.(event);
    }

    activate(schema) {
        const { keys } = this.schemata.get(schema);
        for (const { name, handlers } of keys) {
            if (this.keys.has(name)) {
                Object.assign(this.keys.get(name), handlers);
            } else {
                this.keys.set(name, handlers);
            }
        }
    }

    reset() {
        this.schemata.clear();
        this.keys.clear();
    }
}

quantum.define('quantum-keyboard', Keyboard);