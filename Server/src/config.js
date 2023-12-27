const fs = require('fs');
let config = fs.readFileSync('config.json').toString();
config = JSON.parse(config);
module.exports = config;