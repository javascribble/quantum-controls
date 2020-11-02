import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const keyboard = document.querySelector('quantum-keyboard');

keyboard.keys.set(' ', {
    up: console.log,
    down: console.log
});

const broker = new quantum.EventBroker();
broker.subscribe('EnterUp', console.log);
broker.subscribe('EnterDown', console.log);

const schema = [
    {
        key: 'Enter',
        events: {
            up: 'EnterUp',
            down: 'EnterDown'
        }
    }
];

keyboard.delegate(broker, schema);

document.body.style.visibility = 'visible';