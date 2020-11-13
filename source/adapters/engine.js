import { keyboardControls } from '../constants/browser.js';
import { Input } from '../elements/input.js';

Input.prototype.adapt = function (api, options) {
    api.getButton = this.getButton.bind(this);
    api.getGesture = () => { };
    api.getPointer = () => { };
    api.getAxis = () => { };
};