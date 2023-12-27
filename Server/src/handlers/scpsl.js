//---   Imports   ---//
const spawn = require('child_process').spawn;
const log = require('./log');
const config = require('../config');
const console_events = require('./console_events');

//---   Global Variables   ---//
let hook;

//---   Core Functions   ---//
function send(data) {
    hook.stdin.write(data);
}

function start() {
    log(`Starting SCP Secret Laboratory...`)
    hook = spawn(config.game.launch_file, config.game.launch_args);
    hook.stdout.on('data', data => console_events(data));
    setTimeout(_ => {
        send('help')
    }, 20000);
}

//---   Exports   ---//
module.exports = {
    start
};