let keys = require('../app/key_check');
//given a spreadsheet's contents, return an object with standardized keys
module.exports = (config, xlsxContentsObjsArr) => {

  if (!keys.firstObjHas(config, xlsxContentsObjsArr)) {
    return 'Error: unable to find expected column headings in source spreadsheet.';
  }

};
