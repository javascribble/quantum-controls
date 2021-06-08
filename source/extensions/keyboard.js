import { Input } from '../elements/input.js';

const keydown = event => {
    const { target, repeat, key } = event;
    if (!repeat) {
        target[key] = true;
    }
};

const keyup = event => {
    const { target, repeat, key } = event;
    if (!repeat) {
        target[key] = false;
    }
};

Input.events.set('keydown', keydown);
Input.events.set('keyup', keyup);

Input.prototype.getKey = function (key) {
    return this[key];
};