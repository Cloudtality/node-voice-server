const HandlerBundleBase = require('./EventHandlers/HandlerBundle.js');
const User = require('./EventHandlers/User.js');

class EventHandler {
    constructor(app, io) {
        this.sockets = [];

        io.on('connection', socket => {
            const bundles = EventHandler._factoryHandlerBundles(app, socket);

            for (let bundle in bundles) {
                if (!(bundle instanceof HandlerBundleBase)) {
                    throw new Error('Object is not a HandlerBundle');
                }

                let handler = bundles[bundle].handler();
                for (let event in handler) {
                    socket.on(event, handler[event]);
                }
            }

            this.sockets.push(socket)
        })
    }

    static _factoryHandlerBundles(app, socket) {
        return {
            user: new User(app, socket)
        }
    }
}

module.exports = EventHandler;
