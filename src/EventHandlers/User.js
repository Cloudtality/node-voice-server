const HandlerBundleBase = require('HandlerBundle.js');

class User extends HandlerBundleBase {
    handler() {
        return {
            move: this.onMoveReq
        }
    }

    onMoveReq(id) {

    }
}

module.export = User;