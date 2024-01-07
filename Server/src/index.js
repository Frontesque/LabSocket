//---   Imports   ---//
require('colors');

//---   Startup   ---//
const package = require('../package.json');
require('./core/log')(['Starting LabHook Version', package.version]);

//---   Start Lab Link   ---//
require('./core/localadmin').start();
require('./core/roundlogs').start();