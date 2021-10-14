import '/node_modules/@javascribble/quantum/bundles/main-window.js';
import '/bundles/main.js';

const { devices, inputs, state } = document.querySelector('quantum-controls');
const { gamepad, keyboard, mouse, touch } = devices;

const actions = {
    ACTION1: 'ACTION1'
};

inputs[keyboard.UP] = actions.ACTION1;
inputs[mouse.PRIMARY] = actions.ACTION1;

const animation = quantum.animate(time => {
    if (state[actions.ACTION1]) {
        console.log('key or button pressed');
    }
});

animation.start();

document.body.style.visibility = 'visible';