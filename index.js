/*jshint esversion 8 */

//import settings from the config file
let config = require('./config');

//import node module dependencies
let fs =    require('graceful-fs');
let ping =  require('ping');
let yargs = require('yargs');

//import modules
let parseXLSX = require('./app/parse-xlsx');
let args =      require('./app/args')();

//set config parameters based on arguments received
//set the script mode and any passed arguments
((args) => {
  if (args.d) { config.mode = 'directory',  config.modeParams = args.d};
  if (args.f) { config.mode = 'filename',   config.modeParams = args.f};
  if (args.r) { config.mode = 'range',      config.modeParams = args.r};
  return 'directory';
})(args);
