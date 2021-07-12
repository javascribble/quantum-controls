import '/node_modules/@javascribble/quantum/bundles/main-window.js';
import '/bundles/main.js';
import '/bundles/main-plugins.js';

const input = document.querySelector('quantum-input');

const { gamepad, keyboard, mouse, touch } = input.devices;

const controls = {
    ACTION: 'ACTION'
};

input.controls[keyboard.UP] = controls.ACTION;
input.controls[mouse.PRIMARY] = controls.ACTION;

const animation = quantum.animate(time => {
    if (input[controls.ACTION]) {
        console.log('button pressed');
    }
});

animation.start();

document.body.style.visibility = 'visible';