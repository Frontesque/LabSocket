//---   Imports   ---//
const config = require('../config');
const fs = require('fs');
const game_handler = require('../events/game_handler');
const log = require('./log');

//---   Global Variables   ---//
let lastLog = [];

//---   Core Functions   ---//
function start() {
    try {
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
    } catch {
        log("############################################".red);
        log("##   UNABLE TO INITIALIZE WATCHING LOGS   ##".red)
        log("############################################".red);
        log(["THIS EXECUTABLE DOES NOT HAVE ACCESS, OR THE DIRECTORY DOES NOT EXIST:".red, config.game.log_directory.yellow])
    }
}

//---   Exports   ---//
module.exports = { start };