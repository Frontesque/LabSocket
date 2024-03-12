//---   Imports   ---//
const spawn = require('child_process').spawn;
const log = require('./log');
const config = require('../config');

//---   Global Variables   ---//
let hook;

//---   Core Functions   ---//
function send(data) {
    hook.stdin.write(data);
    hook.stdin.end();
}

function start() {
    log(`Starting SCP Secret Laboratory...`);
    hook = spawn(config.game.launch_file, config.game.launch_args, { cwd: config.game.working_directory });
    hook.stdout.on('data', data => require('../events/console_handler.js')(data));
    hook.stdin.setEncoding('utf-8');
}

//---   Exports   ---//
module.exports = {
    start,
    send
};