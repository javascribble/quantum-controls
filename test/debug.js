import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const keyboard = document.querySelector('quantum-keyboard');

keyboard.keys.set(' ', {
    up: console.log,
    down: console.log
});

const schemata = [
    {
        name: 'test',
        keys: [
            {
                name: 'Enter',
                handlers: {
                    up: 'EnterUp',
                    down: 'EnterDown'
                }
            }
        ]
    }
];

const schema = keyboard.loadSchemata(schemata, console.log);

keyboard.applySchema('test');

document.body.style.visibility = 'visible';