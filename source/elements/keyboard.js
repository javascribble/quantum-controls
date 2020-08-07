export class Keyboard extends quantum.Component {
    schemata = new Map();
    keys = new Map();

    connectedCallback() {
        this.parentElement.addEventListener('keydown', event => this.keys.get(event.key)?.down?.(event));
        this.parentElement.addEventListener('keyup', event => this.keys.get(event.key)?.up?.(event));
    }

    activate(schema) {
        for (const { name, handlers } of this.schemata.get(schema)) {
            if (this.keys.has(name)) {
                Object.assign(this.keys.get(name), handlers);
            } else {
                this.keys.set(name, handlers);
            }
        }
    }

    configure(options, state) {
        const { broker } = state;
        const { schemata, defaultSchemata } = options;
        for (const schema of schemata) {
            this.schemata.set(schema.name, schema.keys.map(key => ({
                name: key.name,
                handlers: Object.fromEntries(Object.entries(key.handlers).map(entry => [entry[0], event => broker.publish(entry[1], event)]))
            })));
        }

        defaultSchemata?.forEach(index => this.activate(schemata[index].name));

        broker.subscribe('activate', this.activate.bind(this));
    }
}

quantum.define('quantum-keyboard', Keyboard);