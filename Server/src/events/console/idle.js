const log = require('../../handlers/log');
module.exports = {
    match: "Server has entered the idle mode.",
    run(line) {
        log("Server idling")
    }
}