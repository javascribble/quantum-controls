import { Keyboard } from '../elements/keyboard.js';
import { plugin } from '../import.js';

function apply(schema) {
    for (const { key, handlers } of schema) {
        if (this.keys.has(key)) {
            Object.assign(this.keys.get(key), handlers);
        } else {
            this.keys.set(key, handlers);
        }
    }
}

const prototype = {
    apply
};

const adapter = {
    applyKeySchema: apply
};

plugin(Keyboard, prototype, adapter);