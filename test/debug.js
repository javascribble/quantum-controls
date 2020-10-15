import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const keyboard = document.querySelector('quantum-keyboard');

keyboard.keys.set(' ', {
    up: console.log,
    down: console.log
});

const options = {
    //defaultSchemata: [0],
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

const api = { options, broker };
keyboard.integrate(api);
api.activateKeyboardSchema('test');
//broker.publish('activateSchema', 'test');

document.body.style.visibility = 'visible';