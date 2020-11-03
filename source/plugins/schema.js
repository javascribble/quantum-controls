import { Keyboard } from '../elements/keyboard.js';

Keyboard.prototype.apply = function (schema) {
    for (const { key, handlers } of schema) {
        if (this.keys.has(key)) {
            Object.assign(this.keys.get(key), handlers);
        } else {
            this.keys.set(key, handlers);
        }
    }
};