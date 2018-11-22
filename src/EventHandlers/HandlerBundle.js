class HandlerBundle {
    constructor(app, socket) {
        this._app = app;
        this.socket = socket;
    }

    handler() {
        throw new Error('Method is not implemented');
    }
}

module.exports = HandlerBundle;