const io = require('socket.io')();

const EventHandler = require('./EventHandler.js');

class Server {
    constructor() {
        // WIP, clean up later
        this.EventHandler = new EventHandler(this, io);

        io.listen(2000);
    }
}

module.exports = Server;