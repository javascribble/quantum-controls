import { Input } from '../elements/input.js';

const gamepads = navigator.getGamepads?.() || navigator.webkitGetGamepads();

const ongamepadconnected = event => gamepads.add(event.gamepad);
const ongamepaddisconnected = event => gamepads.delete(event.gamepad);

Input.events.set('ongamepadconnected', ongamepadconnected);
Input.events.set('ongamepaddisconnected', ongamepaddisconnected);

Input.prototype.getButton = function (button) {
};