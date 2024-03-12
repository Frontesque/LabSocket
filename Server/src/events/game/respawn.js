module.exports = {
    match: "RespawnManager has successfully spawned",
    run(line) {
        return { name: 'respawn', context: line };
    }
    // RespawnManager has successfully spawned 1 players as NineTailedFox!
}