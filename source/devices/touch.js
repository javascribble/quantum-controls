import { touch } from '../constants/touch.js';

export const addTouch = element => {
    const { devices, events, inputs, state } = element;

    devices.touch = touch;

    events.touchstart = event => { };
    events.touchend = event => { };
    events.touchmove = event => { };
    events.touchcancel = event => { };
};