let config = require('./config');
let ping = require('ping');
let fs = require('graceful-fs');
let getIpRange = require('./app/parse_ip_range');
let hostArr = getIpRange({modeParams:'192.168.1.1-192.168.1.254'});

let testFunc = async (hostArr) => {
  await hostArr.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive\n' : 'host ' + host + ' is dead\n';

        fs.appendFile('logs/test-log.txt', msg, (error) => {
          if (error) {console.log(`Log Error: ${error}`);}
        });


    });
});
};

testFunc(hostArr);


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
