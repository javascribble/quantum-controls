import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

const input = document.querySelector('quantum-input');

quantum.animate(time => {
    console.log(input.getButton(' '));
    return true;
});

document.body.style.visibility = 'visible';