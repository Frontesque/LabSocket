const config = require('../config');
const launchFile = config.game.launch_file.split('./')[1].split('.exe')[0];
const tiggerEvent = require('../core/trigger_event.js');

const events = [
    require('./console/idle.js'),
    require('./console/ready.js'),
    require('./console/new_round.js'),
]

function removeTime(line) {
    line = line.split("]");
    line.shift(-1);
    return line.join().trim();
}

module.exports = (data) => {
    const line = removeTime(data.toString().trim());
    console.log(`[${launchFile}]`.green, line);

    for (const i in events) {
        if (line.includes(events[i].match)) {
            const event = events[i].run(line);
            tiggerEvent(event);
        }
    }
}