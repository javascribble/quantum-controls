import { Keyboard } from '../elements/keyboard.js';

Keyboard.prototype.delegate = function (broker, schema) {
    for (const { key, events } of schema) {
        const handlers = Object.fromEntries(Object.entries(events).map(entry => [entry[0], event => broker.publish(entry[1], event)]));
        if (this.keys.has(key)) {
            Object.assign(this.keys.get(key), handlers);
        } else {
            this.keys.set(key, handlers);
        }
    }
};