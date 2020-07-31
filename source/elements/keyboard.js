export class Keyboard extends quantum.Component {
    keys = new Map();

    constructor() {
        super();

        // const keyPress = (event) => {
        //     if (this.keys.has(event.key)) {
        //         this.keys.get(event.key).press?.(event);
        //     }
        // };

        const keyDown = (event) => {
            if (this.keys.has(event.key)) {
                this.keys.get(event.key).down?.(event);
            }
        };

        const keyUp = (event) => {
            if (this.keys.has(event.key)) {
                this.keys.get(event.key).up?.(event);
            }
        };

        //document.addEventListener('keypress', keyPress);
        document.addEventListener('keydown', keyDown);
        document.addEventListener('keyup', keyUp);
    }
}

quantum.define('quantum-keyboard', Keyboard);