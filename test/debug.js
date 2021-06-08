import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/gamepad.js';
import '/source/extensions/keyboard.js';
import '/source/extensions/mouse.js';
import '/source/extensions/touch.js';
import '/source/main.js';

const input = document.querySelector('quantum-input');

const animation = quantum.animate(time => {
    if (input.getKey('a')) {
        console.log('a key down');
    }
});

animation.start();

document.body.style.visibility = 'visible';