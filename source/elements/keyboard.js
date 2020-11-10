import { Component, define } from '../import.js';

export class Keyboard extends Component {
    #keys = {};

    connectedCallback() {
        this.parentElement.addEventListener('keydown', event => {
            if (!event.repeat) {
                this.#keys[event.key] = true;
            }
        });

        this.parentElement.addEventListener('keyup', event => {
            if (!event.repeat) {
                this.#keys[event.key] = false;
            }
        });
    }

    getKey(key) {
        return this.#keys[key];
    }
}

define('quantum-keyboard', Keyboard);