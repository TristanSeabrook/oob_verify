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

//set the script mode
config.mode = ((args) => {
  if (args.d) { return 'directory' };
  if (args.f) { return 'filename' };
  if (args.r) { return 'range' };
  return 'directory';
})(args);
