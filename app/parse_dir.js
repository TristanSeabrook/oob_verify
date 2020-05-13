let getPrimeNum = require('./get_prime_num');
let parseXlsx = require('./parse_xlsx');
let fs = require('graceful-fs');

//parse all csv, xls, and xlsx files and return an array of PRIME objects
module.exports = (config) => {
//if dirPath is specified, use it, otherwise use the default path in config
let dirPath = config.modeParams;
let extRegex = config.extRegex;
//create an array of all csv, xls, and xlsx files in a specified directory
let dirContents = fs.readdirSync(dirPath);
let spreadsheets = dirContents.filter((filename) => filename.match(extRegex) !== null);
  //parse each file and return an object containging its PRIME number and an
  //array of IPs
  let primeObj = (filename) => {
    return {
      primeNum: getPrimeNum(filename, config),
      ipArr: parseXlsx(`${dirPath}/${filename}`).map((host) => host.IP)
    };
  };

return spreadsheets.map((spreadsheet) => primeObj(spreadsheet));
};
