const package = require('../../package.json');
const log = require('./log');

module.exports = () => {
    log(['Starting LabLink Version', package.version]);
}