import '/node_modules/@javascribble/quantum/bundles/main-window.js';
import '/bundles/main.js';

const { controls, devices, state } = document.querySelector('quantum-input');
const { gamepad, keyboard, mouse, touch } = devices;

const actions = {
    ACTION1: 'ACTION1'
};

controls[keyboard.UP] = actions.ACTION1;
controls[mouse.PRIMARY] = actions.ACTION1;

const animation = quantum.animate(time => {
    if (state[actions.ACTION1]) {
        console.log('key or button pressed');
    }
});

animation.start();

document.body.style.visibility = 'visible';