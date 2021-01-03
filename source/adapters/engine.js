import { Input } from '../elements/input.js';

Input.prototype.adapt = function (api, options) {
    api.getButton = this.getButton.bind(this);
    api.getPointer = this.getPointer.bind(this);
    api.getAxis = this.getAxis.bind(this);
};