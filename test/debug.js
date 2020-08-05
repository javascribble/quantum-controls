import '/node_modules/@javascribble/quantum/source/main.js';
import { createKeyboardBrokerAdapter } from '/source/main.js';

const keyboard = document.querySelector('quantum-keyboard');

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

const adapter = createKeyboardBrokerAdapter(keyboard, configuration);
adapter.connect(broker);

document.body.style.visibility = 'visible';