//---   Imports   ---//
const { WebSocketServer } = require('ws');
const log = require('./log');
const config = require('../config');
const package = require('../../package.json');
const localadmin = require('./localadmin');

//---   Client Handler   ---//
let clients = new Array();

//---   Run Socket   ---//
function start() {
  const wss = new WebSocketServer({ port: config.labsocket.websocket_port });
  wss.on('connection', function connection(ws) {
    //---   Handle Clients In Global Pool   ---//
    clients.push(ws);
    ws.on('close', data => { clients.splice(clients.indexOf(ws), 1); });
    //---   Client Welcome Message   ---//
    ws.send(JSON.stringify({ type: "plugin_connect", data: `Connected to LabLink ${package.version}` }));
    //---   Error Handling   ---//
    ws.on('error', console.error);
    //---   Client Message Handling   ---//
    ws.on('message', data => {
      log(['[WebSocket]'.cyan, data]);
      const parsedData = JSON.parse(data.toString());
      if (parsedData.type === 'run') {
        localadmin.send(parsedData.content)
      };
    });
  });
}

//---   Send Event   ---//
function sendToClients(type, data) {
  for (const i in clients) {
    clients[i].send(JSON.stringify({ type: type, data: data }));
  }
}

module.exports = { start, sendToClients };
