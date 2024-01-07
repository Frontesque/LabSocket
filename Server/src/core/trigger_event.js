const log = require('./log');
const sendToClients = require('./websocket').sendToClients;

module.exports = (event) => {
    if (event === false) return;
    log(['Event:', event.name.blue, "-", JSON.stringify(event.context) || "No context."]);
    sendToClients('event', {
        event: event.name,
        context: event.context
    });
}