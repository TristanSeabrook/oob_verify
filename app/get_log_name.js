let getDatetime = require('./datetime');

module.exports = (config) => {
  let projNum = config.projNum;
  let datetime = getDatetime();
  let logExt =  config.logExt;

  return `${projNum}_${datetime}.${logExt}`;
};
