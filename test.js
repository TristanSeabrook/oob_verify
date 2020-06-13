let config = require('./config');
let ping = require('ping');
let fs = require('graceful-fs');
let getIpRange = require('./app/parse_ip_range');
let hostArr = getIpRange({modeParams:'100.118.124.1-254'});
let format = require('./app/format');
let logPath = 'logs/test-log.txt';
let getLogLocation = require('./app/get_log_location');
let writeLog = require('./app/write_log');
let datetime = require('./app/datetime');

config.logName = datetime();

let logLocation = getLogLocation(config);

let promiseArr = [];

let totalHosts = hostArr.length;
let scannedHosts = 0;
let aliveHosts = 0;

hostArr.forEach(function (host) {
    let promise = ping.promise.probe(host)
        .then(function (res) {
            return res;
        });
      promiseArr.push(promise);
});

Promise.all(promiseArr).then((values) =>  {console.log(values);});





// (async () => {
//   let resultsArr = [];
// for (let host of hostArr) {
//   let response = await ping.promise.probe(host);
//   resultsArr.push(response);
// }
// console.log(resultsArr);
// })();

// let testWrapper = async () => {
//
//   writeLog(`Ping started at ${datetime('- :')}.\n`, config);
//
//   Promise.all(hostArr.forEach(function(host) {
//     ping.promise.probe(host)
//       .then(function(result) {
//         writeLog(format.pingResult(result), config);
//         scannedHosts++;
//         if(result.alive) {aliveHosts++; console.log(`Hosts alive: ${alivHosts}`);}
//         //process.stdout.clearLine();
//       //  process.stdout.cursorTo(0);
//       //  process.stdout.write(`${scannedHosts} of ${totalHosts} hosts pinged.`);
//       });
//   })).then(
//     console.log(`${aliveHosts} of ${scannedHosts} responded.`)
//   );
//   process.stdout.write(`\n`);
//   writeLog(`${aliveHosts} of ${scannedHosts} responded.`, config);
// };
//
// testWrapper();
