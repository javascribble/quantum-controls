export class Keyboard extends quantum.Component {
    schemata = new Map();
    keys = new Map();
    broker;

    #keyDown(event) {
        if (this.keys.has(event.key)) {
            const delegate = this.keys.get(event.key).down;
            if (typeof delegate === 'string') {
                this.broker.publish(delegate, event);
            } else {
                delegate(event);
            }
        }
    }

    #keyUp(event) {
        if (this.keys.has(event.key)) {
            const delegate = this.keys.get(event.key).up;
            if (typeof delegate === 'string') {
                this.broker.publish(delegate, event);
            } else {
                delegate(event);
            }
        }
    }

    connectedCallback() {
        this.parentElement.addEventListener('keydown', this.#keyDown.bind(this));
        this.parentElement.addEventListener('keyup', this.#keyUp.bind(this));
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

    integrate(broker) {
        broker.subscribe('activate', this.activate.bind(this));
        this.broker = broker;
    }

    configure(options) {
        const { schemata, defaultSchemata } = options;
        for (const schema of schemata) {
            this.schemata.set(schema.name, schema.keys);
        }

        defaultSchemata?.forEach(index => this.activate(schemata[index].name));
    }
}

quantum.define('quantum-keyboard', Keyboard);