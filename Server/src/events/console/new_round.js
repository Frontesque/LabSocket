module.exports = {
    match: "New round has been started.",
    run(line) {
        return { name: 'round_start' };
    }
}