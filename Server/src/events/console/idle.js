const log = require('../../handlers/log');
module.exports = (line) => {
    if (line.includes("Server has entered the idle mode.")) log("Server idling")
}