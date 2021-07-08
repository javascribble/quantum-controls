import { gamepad } from '../constants/gamepad.js';

const { Input } = Quantum;

const gamepads = navigator.getGamepads?.() || navigator.webkitGetGamepads();

Input.plugins.add(input => {
    const { events, devices } = input;

    events.ongamepadconnected = event => gamepads.add(event.gamepad);
    events.ongamepaddisconnected = event => gamepads.delete(event.gamepad);

    devices.gamepad = gamepad;
});