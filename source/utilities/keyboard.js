export class Keyboard {
    schemata = new Map();
    keys = new Map();

    subscribe(element = document) {
        element.addEventListener('keydown', this.keyDown.bind(this));
        element.addEventListener('keyup', this.keyUp.bind(this));
    }

    unsubscribe(element = document) {
        element.removeEventListener('keydown', this.keyDown.bind(this));
        element.removeEventListener('keyup', this.keyUp.bind(this));
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
}