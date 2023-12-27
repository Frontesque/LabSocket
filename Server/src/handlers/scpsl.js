//---   Imports   ---//
const spawn = require('child_process').spawn;
const log = require('./log');
const config = require('../config');

//---   Global Variables   ---//
let hook;

//---   Functions   ---//
function start() {
    log(`Starting SCP Secret Laboratory: "${config.game.start_command}"`)
    this.hook = spawn(config.game.start_command);
    this.hook.stdout.pipe(process.stdout);
}

//---   Exports   ---//
module.exports = {
    start
};