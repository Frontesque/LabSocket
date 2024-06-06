const { exec } = require("child_process");
const config = require('../config');

module.exports = async () => {
  if (config.runAsService == false) return; // Stop execution if not planned to run as service
  exec(`systemd-notify --ready --pid=${process.pid}`);
}