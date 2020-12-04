let fs = require('graceful-fs');

let getLogLocation = require('./get_log_location');

module.exports = (logContent, config) => {
  let logLocation = getLogLocation(config);
  fs.appendFileSync(logLocation, logContent, (error) => {
    if (error) {console.log(`Log Error: ${error}`);}
  });
};
