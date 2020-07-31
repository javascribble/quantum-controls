import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const keyboard = document.querySelector('quantum-keyboard');
keyboard.keys.set('Enter', {
    up: console.log,
    down: console.log
});

document.body.style.visibility = 'visible';