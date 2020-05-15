let config = require('./config');
let ping = require('ping');
let fs = require('graceful-fs');
let getIpRange = require('./app/parse_ip_range');
let hostArr = getIpRange({modeParams:'192.168.1.1-192.168.1.254'});
let format = require('./app/format');
let logPath = 'logs/test-log.txt';
let getLogLocation = require('./app/get_log_location');
let writeLog = require('./app/write_log');
let datetime = require('./app/datetime');

config.logName = 'test_log';

let logLocation = getLogLocation(config);

let resultArr = [];

let totalHosts = hostArr.length;
let scannedHosts = 0;

let testWrapper = async () => {
  process.stdout.write('\n');
  await writeLog(`Ping started at ${datetime('- :')}.\n`, config);

  await hostArr.forEach(function(host) {
    ping.promise.probe(host)
      .then(function(result) {
        writeLog(format.pingResult(result), config);
        scannedHosts++;
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`${scannedHosts} of ${totalHosts} hosts pinged.`);
      });
  });

  process.stdout.write('\n');
  await writeLog(`Ping completed at ${datetime()}.\n`, config);
};

testWrapper();
