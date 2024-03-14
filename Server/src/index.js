//---   Imports   ---//
require('colors');

//---   Startup   ---//
const package = require('../package.json');
require('./core/log')(['Starting LabSocket '.cyan, package.version.yellow]);

//---   Start Lab Link   ---//
require('./core/localadmin').start();
require('./core/roundlogs').start();
require('./core/websocket.js').start();