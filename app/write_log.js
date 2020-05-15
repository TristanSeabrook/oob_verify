let fs = require('fs');

let getLogLocation = require('./get_log_location');

module.exports = (logContent, config) => {
  let logLocation = getLogLocation(config);
  fs.appendFile(logLocation, logContent, (error) => {
    if (error) {console.log(`Log Error: ${error}`);}
  });
};
