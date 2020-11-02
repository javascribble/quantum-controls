export class Keyboard extends quantum.Component {
    keys = new Map();

    connectedCallback() {
        this.parentElement.addEventListener('keydown', event => {
            if (!event.repeat) {
                this.keys.get(event.key)?.down?.(event);
            }
        });

        this.parentElement.addEventListener('keyup', event => {
            if (!event.repeat) {
                this.keys.get(event.key)?.up?.(event);
            }
        });
    }
}

quantum.define('quantum-keyboard', Keyboard);