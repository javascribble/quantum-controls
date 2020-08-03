export class Keyboard extends quantum.Component {
    schemata = new Map();
    keys = new Map();

    constructor() {
        super();

        //document.addEventListener('keypress', event => this.keys.get(event.key)?.press?.(event));
        document.addEventListener('keydown', event => this.keys.get(event.key)?.down?.(event));
        document.addEventListener('keyup', event => this.keys.get(event.key)?.up?.(event));
    }

    loadSchemata(schemata, delegate) {
        for (const schema of schemata) {
            const keys = [];
            for (const key of schema.keys) {
                const handlers = {};
                for (const [name, value] of Object.entries(key.handlers)) {
                    handlers[name] = event => delegate(value, event);
                }

                keys.push({ name: key.name, handlers });
            }

            this.schemata.set(schema.name, keys);
        }
    }

    applySchema(schema) {
        for (const { name, handlers } of this.schemata.get(schema)) {
            if (this.keys.has(name)) {
                Object.assign(this.keys.get(name), handlers);
            } else {
                this.keys.set(name, handlers);
            }
        }
    }
}

quantum.define('quantum-keyboard', Keyboard);