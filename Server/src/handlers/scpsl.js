//---   Imports   ---//
const spawn = require('child_process').spawn;
const log = require('./log');
const config = require('../config');

//---   Global Variables   ---//
let hook;

//---   Processing Function   ---//
function processGame() {
    
}

//---   Core Functions   ---//
function start() {
    log(`Starting SCP Secret Laboratory...`)
    this.hook = spawn(config.game.launch_file, config.game.launch_args);
    this.hook.stdout.pipe(process.stdout);
}

//---   Exports   ---//
module.exports = {
    start
};