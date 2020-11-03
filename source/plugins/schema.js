import { Keyboard } from '../elements/keyboard.js';

Keyboard.prototype.applyKeySchema = function (schema) {
    for (const { key, handlers } of schema) {
        if (this.keys.has(key)) {
            Object.assign(this.keys.get(key), handlers);
        } else {
            this.keys.set(key, handlers);
        }
    }
};