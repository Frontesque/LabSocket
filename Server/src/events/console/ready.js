const log = require('../../handlers/log');
module.exports = {
    match: "Waiting for players...",
    run(line) {
        log("Server ready")
    }
}