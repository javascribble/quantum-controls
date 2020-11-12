import { Input } from '../elements/input.js';

Input.prototype.adapt = function (options) {
    return {
        getButton: this.getKey.bind(this)
    }
};