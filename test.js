let parseXlsx = require('./app/parse_xlsx');
let testFile = 'tests/518792+IPs.xlsx';
let fileObj =  {mode: 'filename',     modeParams: testFile};

let hostsArr = parseXlsx(fileObj.modeParams);
let ipsOnly = hostsArr.map((host) => host.IP);

console.log(ipsOnly.length);
