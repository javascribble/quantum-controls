import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const input = document.querySelector('quantum-input');

animate(time => {
    console.log(input.getButton(' '));
    return true;
});

document.body.style.visibility = 'visible';