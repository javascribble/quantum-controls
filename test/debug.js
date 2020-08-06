import '/node_modules/@javascribble/quantum/source/main.js';
import { Keyboard } from '/source/main.js';

const keyboard = new Keyboard();
keyboard.subscribe();
keyboard.keys.set(' ', {
    up: console.log,
    down: console.log
});

document.body.style.visibility = 'visible';