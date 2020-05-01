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
