const player = require('../../core/player');
module.exports = {
    match: "has been teamkilled by",
    run(line) {
        const data = {
            reason: line.split("Specific death reason:")[1].trim(),
            victim: {
                player: player(line.split(',')[0].trim()),
                class: line.split(',')[1].split('playing as')[1].trim(),
            },
            killer: {
                player: player(line.split(',')[2].split('has been teamkilled by')[1].split('playing as')[0].trim()),
                class: line.split(',')[2].split('playing as:')[1].split('.')[0].trim()
            }
        };
        return { name: 'teamkill', context: data };
    }
    // Front (front@northwood), playing as Scientist, has been killed by Artificial_ (76561198167038756@steam) playing as: Class-D Personnel. Specific death reason: Shot by Artificial_ with GunFRMG0 to the 'Headshot' hitbox.
}