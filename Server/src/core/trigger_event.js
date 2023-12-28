const log = require('./log');

module.exports = (event) => {
    log(['Event:', event.name.blue]);
    console.log(event.context || "No context.");
}