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
  const wss = new WebSocketServer({ port: config.labhook.websocket_port });
  wss.on('connection', function connection(ws) {
    clients.push(ws);
    log("New Client");
    ws.send(JSON.stringify({ type: "Welcome", data: `Connected to LabLink ${package.version}` }));
    ws.on('error', console.error);
    ws.on('message', function message(data) {
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