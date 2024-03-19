// @ Require the websocket NPM package
// We will be using the websocket NPM package to make using websockets super easy
const { WebSocket } = require('ws');

// @ Create websocket connection
// Connect to LabSocket on the local machine. LabSocket's default port is 6777
const ws = new WebSocket('ws://localhost:6777');

// @ Error handling
// If any errors occur with the LabSocket connection, it's best to handle them properly.
// This is more useful if the client is not running on a different machine from LabSocket 
ws.on('error', console.error);

// @ Open the websocket connection
// We tell the websocket package to connect to the webocket defined on line 7.
// After opening the websocket, we stringify the JSON, as only strings can be sent over JSON.
// We tell Labsocket that a new connection has been made by specifying "type" and "content".
ws.on('open', _ => ws.send(JSON.stringify({
    type: "connect", content: "New Connection"
})));

// @ Create message event
// We use the websocket npm package to listen for incoming data from labsocket, and pass it to a function
ws.on('message', data => {
    // @ Parse all incoming messages as JSON
    // Labsocket only communicates to its clients using JSON.
    // As mentioned previously, websockets can only send strings, so we must parse the incoming message
    const message = JSON.parse(data.toString());
    
    // @ Ignore non-event messages
    // This allows only messages related to game events to continue to the following lines
    if (message.type !== 'event') return;

    // @ Ignore events that are not 'player_join'
    // The following lines will only run when the `player_join` event is fired by LabSocket
    if (message.data.event !== 'player_join') return;
    
    // @ Log the context of the event
    // For every LabSocket event, the event data is provided in an object called 'context'
    console.log(message.data.context)

    // @ Run the `hello` command in LocalAdmin
    // Send json over the websocket, with the message type being 'run' and 'content', being the command you wish to execute.
    ws.send(JSON.stringify({ type: 'run', content: 'hello' }));

});