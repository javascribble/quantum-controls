import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

const keyboard = document.querySelector('quantum-keyboard');

quantum.animate(time => {
    console.log(keyboard.getKey(' '));
    return true;
});

document.body.style.visibility = 'visible';