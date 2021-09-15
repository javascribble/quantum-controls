import { touch } from '../constants/touch.js';

export const addTouch = input => {
    const { controls, devices, events, state } = input;

    devices.touch = touch;

    events.touchstart = event => { };
    events.touchend = event => { };
    events.touchmove = event => { };
    events.touchcancel = event => { };
};