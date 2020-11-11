import { Keyboard } from '../elements/keyboard.js';

Keyboard.prototype.adapt = async function (options) {
    return {
        getKey: this.getKey.bind(this)
    }
};