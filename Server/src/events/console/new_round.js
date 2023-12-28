const log = require('../../core/log');
module.exports = {
    match: "New round has been started.",
    run(line) {
        return { name: 'round_start' };
    }
}