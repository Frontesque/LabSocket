module.exports = {
    match: "authenticated from endpoint",
    run(line) {
        if (line.includes('preauthenticated')) return false;
        const context = {
            id: line.split('Player ID assigned: ')[1].split('.')[0].trim(),
            uuid: line.split('authenticated')[0].trim(),
            endpoint: line.split('endpoint')[1].split('. ')[0].trim()
        }
        return { name: 'player_join', context: context };
    }
}