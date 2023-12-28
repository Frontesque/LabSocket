const log = require('../../core/log');
module.exports = {
    match: "Waiting for players...",
    run(line) {
        return { name: 'ready' };
    }
}