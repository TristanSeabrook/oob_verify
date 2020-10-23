let getDatetime = require('./datetime');

module.exports = (config) => {
  let projNum = config.projNum;
  let projStr = projNum ? projNum : config.altProjStr;
  let datetime = getDatetime();
  let logExt =  config.log.ext;

  return `${projStr}_${datetime}.${logExt}`;
};
