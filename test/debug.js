import '/node_modules/@javascribble/quantum/source/main.js';
import { Keyboard, keyboardBrokerAdapter } from '/source/main.js';

const keyboard = new Keyboard();
keyboard.subscribe();
keyboard.keys.set(' ', {
    up: console.log,
    down: console.log
});

const configuration = {
    defaultSchemata: [0],
    schemata: [
        {
            name: 'test',
            keys: [
                {
                    name: 'Enter',
                    handlers: [
                        {
                            name: 'up',
                            delegate: 'EnterUp',
                        },
                        {
                            name: 'down',
                            delegate: 'EnterDown'
                        }
                    ]
                }
            ]
        }
    ]
};

const broker = new quantum.EventBroker();
broker.subscribe('EnterUp', console.log);
broker.subscribe('EnterDown', console.log);

keyboardBrokerAdapter.adapt(keyboard, broker, configuration);

document.body.style.visibility = 'visible';