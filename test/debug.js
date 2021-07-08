import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

import '/source/plugins/gamepad.js';
import '/source/plugins/keyboard.js';
import '/source/plugins/mouse.js';
import '/source/plugins/touch.js';

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