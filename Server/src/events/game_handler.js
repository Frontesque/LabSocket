const tiggerEvent = require('../core/trigger_event.js');

const events = [
    require('./game/death.js'),
    require('./game/kill.js'),
    require('./game/teamkill.js'),
    require('./game/respawn.js')
]

function removeCategories(data) {
    data = data.split("|");
    data.shift();
    data.shift();
    data.shift();
    return data.toString().trim();
}

module.exports = (data) => {
    const line = removeCategories(data);
    console.log("[Game]".red, line);

    for (const i in events) {
        if (line.includes(events[i].match)) {
            const event = events[i].run(line);
            tiggerEvent(event);
        }
    }
}