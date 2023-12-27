const events = [
    require('../events/console/idle.js')
]

module.exports = (data) => {
    const line = data.toString().trim();
    console.log("[SCPSL]".green, line);

    for (const i in events) {
        events[i](line);
    }
}