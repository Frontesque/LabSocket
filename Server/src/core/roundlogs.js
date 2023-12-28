//---   Imports   ---//
const config = require('../config');
const fs = require('fs');
const game_handler = require('../events/game_handler');

//---   Global Variables   ---//
let lastLog = [];

//---   Core Functions   ---//
function start() {
    fs.watch(config.game.log_directory, {}, (type, file, etc) => {
        //---   Verify Correct Update Type   ---//
        if (type !== 'change') return;
        //---   Set Up Log   ---//
        const logFile = fs.readFileSync(config.game.log_directory+file).toString();
        let lines = logFile.split('\n');
        lines.pop();
        //---   Determine New Lines   ---//
        if (lastLog.length > lines.length) lastLog = []; // For round restarts
        for (var i = lastLog.length; i < lines.length; i++) {
            game_handler(lines[i]);
        }
        lastLog = lines;
    });
}

//---   Exports   ---//
module.exports = { start };