const log = require('../../core/log');
module.exports = {
    match: "Server has entered the idle mode.",
    run(line) {
        return { name: 'idle' };
    }
}