import * as keyboardUtilities from './utilities/keyboard.js';

window.quantum = Object.assign(window.quantum || {}, {
    ...keyboardUtilities
});

export * from './utilities/keyboard.js';
