/*jshint esversion 8 */

let ip = require('ip');

module.exports = (config) => {
//if in directory mode, parse all csv, xls, and xlsx files in the specified
//directory and return an array of IP addresss
  if (config.mode === 'directory') {
    let dirPath =   config.modeParams;
  }
//if in file mode, parse the specified file and return an array of IP addresses
  if (config.mode === 'file') {
    let fileName =  config.modeParams;
//if in range mode, parse the user input and return an array of IP addresses
  }
  if (config.mode === 'range') {
    let userRange = config.modeParams;
  }
}
