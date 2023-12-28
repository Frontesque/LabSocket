//---   Imports   ---//
require('colors');

//---   Startup   ---//
const package = require('../package.json');
require('./core/log')(['Starting LabLink Version', package.version]);

//---   Start Lab Link   ---//
require('./core/localadmin').start();
require('./events/game_handler')();