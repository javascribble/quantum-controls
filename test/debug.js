import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const keyboard = document.querySelector('quantum-keyboard');

keyboard.keys.set(' ', {
    up: console.log,
    down: console.log
});

const options = {
    defaultSchemata: [0],
    schemata: [
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
    ]
};

const broker = new quantum.EventBroker();
broker.subscribe('EnterUp', console.log);
broker.subscribe('EnterDown', console.log);

keyboard.configure(options, { broker });

document.body.style.visibility = 'visible';