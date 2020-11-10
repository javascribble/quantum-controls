import { Keyboard } from '../elements/keyboard.js';

Keyboard.prototype.adapt = async function (api, options) {
    api.getKey = this.getKey.bind(this);
};