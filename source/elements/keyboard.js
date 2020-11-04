import { Plugin, define } from '../import.js';

export class Keyboard extends Plugin {
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

    adapt(api) {
        super.adapt(api);
        api.keys = this.keys;
    }
}

define('quantum-keyboard', Keyboard);