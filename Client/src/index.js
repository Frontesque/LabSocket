const { WebSocket } = require('ws');
const ws = new WebSocket('ws://localhost:6777');
ws.on('error', console.error);
ws.on('open', _ => ws.send(JSON.stringify({ type: "connect", content: "New Connection" })));
ws.on('message', data => {
    const message = JSON.parse(data.toString());
    
    //---   Core Plugin Content   ---//
    if (message.type !== 'event') return;
    if (message.data.event !== 'player_join') return;
    ws.send(JSON.stringify({ type: 'run', content: `pbc ${message.data.context.id}. 10 Welcome to the server!` }));

});