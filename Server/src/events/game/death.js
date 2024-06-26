const player = require('../../core/player');
module.exports = {
    match: "has died.",
    run(line) {
        const data = {
            player: player(line.split(', playing as')[0].trim()),
            class: line.split(', playing as')[1].split(',')[0].trim(),
            reason: line.split('Specific death reason:')[1].split('.')[0].trim()
        };
        return { name: 'death', context: data };
    }
    // Front (front@northwood), playing as SCP-1507-049, has died. Specific death reason: Tesla.
}