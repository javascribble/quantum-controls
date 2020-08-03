import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const keyboard = document.querySelector('quantum-keyboard');

keyboard.keys.set(' ', {
    up: console.log,
    down: console.log
});

const forwardDelegate = console.log;
const forwardSchema = [
    {
        key: 'Enter',
        handlers: {
            up: 'EnterUp',
            down: 'EnterDown'
        }
    }
];

const schema = keyboard.createForwardSchema(forwardSchema, forwardDelegate);

keyboard.schemata.set('test', schema);
keyboard.applySchema('test');

document.body.style.visibility = 'visible';