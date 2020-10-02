let assert = require('assert');

let returnRegexMatchInArr = ();

let config.expectedColumns = [
    {name:  'hostname', regex:  /host/i,},
    {name:  'ip',       regex:  /ip/i,},
    {name:  'netmask',  regex:  /sub|mask/i,},
    {name:  'gateway',  regex:  /gate|gw/i}
  ];

let columnNames = [ 'Hostname', 'IP Address', 'Subnet Mask', 'Gateway' ];

let getNetmaskMatch = config.expectedColumns.netmask.getRegexMatchFromArrIfFound(columnNames);

describe('returnRegexMatchIfFound', function() {
  it('Returns "netmask" when fed array containing "Subnet Mask".', function() {
    assert.strictEqual('netmask', getNetmaskMatch(columnNames));
  });
});



// config.hostArr = hostArr;
//
// let test = new RegExp('test');
//
// console.log(test.test('test'));

// ping(config);






// let config = require('./config');
// let ping = require('./app/ping');
// let fs = require('graceful-fs');
// let getIpRange = require('./app/parse_ip_range');
// let hostArr = getIpRange({modeParams:'100.118.124.1-254'});
// let format = require('./app/format');
// let logPath = 'logs/test-log.txt';
// let getLogLocation = require('./app/get_log_location');
// let writeLog = require('./app/write_log');
// let datetime = require('./app/datetime');




// config.logName = datetime();
//
// let logLocation = getLogLocation(config);
// let totalHosts = hostArr.length;
//
// let promiseArr = hostArr.map(
//   (host) => {
//     return ping.promise.probe(host)
//       .then((pingResult) => pingResult );
//   }
// );
//
// Promise.all(promiseArr).then((resolvedValues) =>
//   {
//   writeLog(resolvedValues, config);
//   let hostsAlive = resolvedValues.filter((value) => value.alive).length;
//   let logMessage =
//     `${hostsAlive} of ${totalHosts} hosts alive.\nSee ${logLocation} for full details.`;
//   console.log(logMessage);
//   }
// );





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
