import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

const options = {

};

const input = document.querySelector('quantum-input');
const adapter = input.adapt(options);
quantum.animate(time => {
    console.log(adapter.getButton(' '));
    return true;
});

document.body.style.visibility = 'visible';