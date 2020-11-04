import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

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
        handlers: {
            up: event => broker.publish('EnterUp', event),
            down: event => broker.publish('EnterDown', event)
        }
    }
];

keyboard.apply(schema);

document.body.style.visibility = 'visible';