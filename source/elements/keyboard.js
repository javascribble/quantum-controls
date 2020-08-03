export class Keyboard extends quantum.Component {
    schemata = new Map();
    keys = new Map();

    constructor() {
        super();

        //document.addEventListener('keypress', event => this.keys.get(event.key)?.press?.(event));
        document.addEventListener('keydown', event => this.keys.get(event.key)?.down?.(event));
        document.addEventListener('keyup', event => this.keys.get(event.key)?.up?.(event));
    }

    createForwardSchema(options, delegate) {
        return options.map(option => {
            for (const [name, value] of Object.entries(option.handlers)) {
                option.handlers[name] = event => delegate(value, event);
            }

            return option;
        });
    }

    applySchema(name) {
        for (const schema of this.schemata.get(name)) {
            this.keys.set(schema.key, Object.assign(this.keys.get(schema.key) || {}, schema.handlers));
        }
    }
}

quantum.define('quantum-keyboard', Keyboard);