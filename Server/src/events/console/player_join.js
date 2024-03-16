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
// 76561198167038756@steam authenticated from endpoint 100.64.0.1:50386. Player ID assigned: 3. Auth token serial number: Jq8HzjJR-pYhoTQ5i.