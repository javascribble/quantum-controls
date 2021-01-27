const { Component, template, define } = quantum;

export class Input extends Component {
    #gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads();
    #keys = {};

    connectedCallback() {
        const parent = this.parentElement;

        parent.addEventListener('keydown', event => {
            if (!event.repeat) {
                this.#keys[event.key] = true;
            }
        });

        parent.addEventListener('keyup', event => {
            if (!event.repeat) {
                this.#keys[event.key] = false;
            }
        });

        // parent.addEventListener('mousedown', event => { },);
        // parent.addEventListener('mousemove', event => { });
        // parent.addEventListener('mouseup', event => { });
        // parent.addEventListener('mousewheel', event => { }, { passive: true });

        // parent.addEventListener('touchstart', event => { }, { passive: true });
        // parent.addEventListener('touchmove', event => { }, { passive: true });
        // parent.addEventListener('touchend', event => { }, { passive: true });
        // parent.addEventListener('touchcancel', event => { });

        // parent.addEventListener('ongamepadconnected', event => this.#gamepads.add(event.gamepad));
        // parent.addEventListener('ongamepaddisconnected', event => this.#gamepads.delete(event.gamepad));
    }

    getButton(key) {
        return this.#keys[key];
    }

    getPointer() {

    }

    getAxis() {

    }

    adapt(api) {
        api.getButton = this.getButton.bind(this);
        api.getPointer = this.getPointer.bind(this);
        api.getAxis = this.getAxis.bind(this);
    }
}

define('quantum-input', Input);