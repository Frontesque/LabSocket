const events = [
    require('./console/idle.js'),
    require('./console/ready.js'),
]

function removeTime(line) {
    line = line.split("]");
    line.shift();
    return line.join().trim();
}

module.exports = (data) => {
    const line = data.toString().trim();
    console.log("[SCPSL]".green, removeTime(line));

    for (const i in events) {
        if (line.includes(events[i].match)) {
            events[i].run(line);
        }
    }
}