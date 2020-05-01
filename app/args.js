/*jshint esversion 8 */

let yargs = require('yargs');

//parse any shell arguments passed to node
module.exports = () => {
  let args = yargs
  .option('directory', {
    alias:        'd',
    description:  'accept a directory as input',
    type:         'string'
  })
  .option('filename', {
    alias:        'f',
    description:  'accept a filename as input',
    type:         'string',
  })
  .option('range', {
    alias:        'r',
    description:  'accept a range of IP addresses',
    type:         'string'
  })
  .argv;
  return args;
}
