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

const next = Keyboard.prototype.adapt;
Keyboard.prototype.adapt = function (api) {
    api.applyKeySchema = this.apply.bind(this);
    next?.call(this, api);
};