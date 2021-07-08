import { touch } from '../constants/touch.js';

const { Input } = Quantum;

Input.plugins.add(input => {
    const { events, devices } = input;

    events.touchstart = event => { };
    events.touchend = event => { };
    events.touchmove = event => { };
    events.touchcancel = event => { };

    devices.touch = touch;
});