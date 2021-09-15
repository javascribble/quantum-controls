import { gamepad } from '../constants/gamepad.js';

const gamepads = navigator.getGamepads?.() || navigator.webkitGetGamepads();

export const addGamepad = input => {
    const { controls, devices, events, state } = input;

    devices.gamepad = gamepad;

    events.ongamepadconnected = event => gamepads.add(event.gamepad);
    events.ongamepaddisconnected = event => gamepads.delete(event.gamepad);
};