module.exports = {
    match: "RespawnManager has successfully spawned",
    run(line) {
        const data = {
            players: line.split('RespawnManager has successfully spawned')[1].split('players as')[0].trim(),
            class:   line.split('players as')[1].split('!')[0].trim()
        };
        return { name: 'respawn', context: data };
    }
    // RespawnManager has successfully spawned 1 players as NineTailedFox!
}