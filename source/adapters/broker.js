export const keyboardBrokerAdapter = {
    adapt: (keyboard, broker, configuration) => {
        const { schemata, defaultSchemata } = configuration;
        for (const { name, keys } of schemata) {
            keyboard.schemata.set(name, {
                name,
                keys: keys.map(({ name, handlers }) => ({
                    name,
                    handlers: Object.fromEntries(handlers.map(handler => [handler.name, event => broker.publish(handler.delegate, event)]))
                }))
            });
        }

        defaultSchemata?.forEach(index => keyboard.activate(schemata[index].name));
        broker.subscribe('activate', keyboard.activate.bind(keyboard));
    },
    preserve: (keyboard, broker, configuration) => {
        broker.unsubscribe('activate', keyboard.activate.bind(keyboard));
        keyboard.schemata.clear();
        keyboard.keys.clear();
    }
};