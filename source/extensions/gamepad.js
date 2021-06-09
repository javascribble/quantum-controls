import { gamepad } from '../constants/gamepad.js';
import { Input } from '../elements/input.js';

const { events, devices } = Input;

const gamepads = navigator.getGamepads?.() || navigator.webkitGetGamepads();

events.ongamepadconnected = event => gamepads.add(event.gamepad);
events.ongamepaddisconnected = event => gamepads.delete(event.gamepad);

devices.gamepad = gamepad;