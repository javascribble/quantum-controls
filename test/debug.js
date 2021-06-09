import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/gamepad.js';
import '/source/extensions/keyboard.js';
import '/source/extensions/mouse.js';
import '/source/extensions/touch.js';
import '/source/main.js';

const input = document.querySelector('quantum-input');

const { gamepad, keyboard, mouse, touch } = input.constructor.devices;

const controls = {
    ACTION: 'ACTION',
    POINTER: 'POINTER'
};

input.controls[keyboard.UP] = controls.ACTION;
input.controls[mouse.PRIMARY] = controls.ACTION;
input.controls[mouse.MOVE] = controls.POINTER;

const animation = quantum.animate(time => {
    if (input[controls.ACTION]) {
        console.log('button pressed');
    }

    const pointer = input[controls.POINTER];
    if (pointer) {
        console.log(pointer);
    }
});

animation.start();

document.body.style.visibility = 'visible';