let getProjNum = require('./get_proj_num');
let parseXlsx = require('./parse_xlsx');
let fs = require('graceful-fs');

//parse all csv, xls, and xlsx files and return an array of project objects
module.exports = (config) => {
let dirPath = config.modeParams;
let extRegex = config.extRegex;
//create an array of all csv, xls, and xlsx files in a specified directory
let dirContents = fs.readdirSync(dirPath);
let spreadsheets = dirContents.filter((filename) => filename.match(extRegex) !== null);
  //parse each file and return an object containging its project number and an
  //array of IPs
  let getProjObj = (filename) => {
    return {
      projNum: getProjNum(filename, config),
      ipArr: parseXlsx(`${dirPath}/${filename}`).map((host) => host.IP)
    };
  };

//return an array containing objects with project numbers and IP addresses
return spreadsheets.map((spreadsheet) => getProjObj(spreadsheet));
};
