let getDatetime = require('./datetime');

module.exports = (config) => {
  let projNum = config.projNum;
  let projStr = projNum ? projNum : config.altProjStr;
  let datetime = getDatetime();

  return `${projStr}_${datetime}`;
};
