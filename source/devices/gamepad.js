import { gamepad } from '../constants/gamepad.js';

const gamepads = navigator.getGamepads?.() || navigator.webkitGetGamepads();

export const addGamepad = input => {
    const { events, devices } = input;

    events.ongamepadconnected = event => gamepads.add(event.gamepad);
    events.ongamepaddisconnected = event => gamepads.delete(event.gamepad);

    devices.gamepad = gamepad;
};