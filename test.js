let config = require('./config');
let ping = require('ping');
let fs = require('graceful-fs');
let getIpRange = require('./app/parse_ip_range');
let hostArr = getIpRange({modeParams:'192.168.1.1-192.168.1.254'});
let format = require('./app/format');

let writeLog = (resultObj) => {
  fs.appendFile('logs/test-log.txt', resultObj, (error) => {
    if (error) {console.log(`Log Error: ${error}`);}
  });
};

let resultArr = [];

let totalHosts = hostArr.length;
let scannedHosts = 0;

hostArr.forEach(function(host) {
  ping.promise.probe(host)
    .then(function(result) {
      writeLog(format.pingResult(result));
      scannedHosts++;
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`${scannedHosts} of ${totalHosts} hosts pinged.`);
    });
});


// Promise.all([
//
//     hostArr.forEach(function(host){
//       ping.sys.probe(host, function(isAlive){
//         let msg = isAlive ? 'host ' + host + ' is alive\n' : 'host ' + host + ' is dead\n';
//         return msg;
//       });
//     });
//
// ]).then(
//
// );
//
// let testFunc = async (hostArr) => {
//   const arr = await hostArr.forEach(function(host){
//     ping.sys.probe(host, function(isAlive){
//       let msg = isAlive ? 'host ' + host + ' is alive\n' : 'host ' + host + ' is dead\n';
//       return msg;
//     });
//   });
//   fs.appendFile('logs/test-log.txt', arr, (error) => {
//     if (error) {console.log(`Log Error: ${error}`);}
//   });
// };
//
// testFunc(hostArr);


// structure for dir mode
// [
//   {
//     prime: 123456,
//     ipArr: [
//       192.168.1.100,
//       192.168.1.101
//     ]
//   }
//   {
//     prime: 234567,
//     ipArr: [
//       192.168.1.102,
//       192.168.1.103
//     ]
//   }
// ]
