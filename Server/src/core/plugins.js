const config = require('../config');
const log = require('./log');
const sleep = require('./sleep');
const fs = require('fs');
const spawn = require('child_process').spawn;

function logPassthrough(plugin, data) {
    log(['[Plugin]'.yellow, `[${plugin.name}]`.gray, data]);
}

function getPlugins() {
    const dir = fs.readdirSync(config.labsocket.plugins, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    for (const i in dir) {
        const dirname = dir[i];
        try {
            //---   Get Plugin Data   ---//
            let plugin = fs.readFileSync(config.labsocket.plugins+'/'+dirname+'/manifest.json');
            plugin = plugin.toString();
            plugin = JSON.parse(plugin);
            log(["Plugin detected:".green, plugin.name.gray, plugin.version]);
            log(["Launching", plugin.name.gray, '...']);
            //---   Launch Plugin   ---//
            let pluginProcess = spawn(plugin.start.command, plugin.start.args, { cwd: config.labsocket.plugins+'/'+dirname });
            pluginProcess.stdout.on('data', data => logPassthrough(plugin, data));
        } catch (err) {
            log(["Plugin failed:".red, '@/'+dirname]);
        }
    }
}

async function start() {
    log('Looking for plugins...');
    getPlugins();
    log("Plugin warmup complete.")
    await sleep(2000);
}

module.exports = {
    start
}