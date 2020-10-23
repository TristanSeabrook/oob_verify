//import requried app modules
let getRegexMatchInArr =  require('../app/get_regex_match');
let keys =                require('../app/key_check');

//given a spreadsheet's contents, return an object with standardized keys
module.exports = (config, xlsxContentsObjsArr) => {
//get an array of the source column names from the keys in the first object in
//the xlsx contents array
  let sourceColumnNames = Object.keys(xlsxContentsObjsArr[0]);
  let expectedColumns = config.expectedColumns;
//find the source column name and add it to each expectedColumn object
  expectedColumns.map((column) => {
    column.sourceName = getRegexMatchInArr(column, sourceColumnNames);
  });

//based on the expected columns, return an array containing standardized
//objects
  let standardizedHostsObjsArr = xlsxContentsObjsArr.map((hostObj) => {
    let firstRow = xlsxContentsObjsArr[0];
    let standardizedObj = {};
    expectedColumns.map((expectedColumn) => {
      let sourceKey = expectedColumn.sourceName;
      let valueInSourceCell = hostObj[sourceKey];
      let valueInFirstSourceCell = firstRow[sourceKey];
//if the value exists in the source cell, set it. otherwise, set the equivalent
// value from the first row
      let valueToSet = (valueInSourceCell) ? valueInSourceCell : valueInFirstSourceCell;
      standardizedObj[expectedColumn.name] = valueToSet;
    });
    return standardizedObj;
  });
//if the source file does not have all expected columns, return an error
  if (!keys.firstObjHas(config, xlsxContentsObjsArr, false)) {
    return 'Error: unable to find expected column headings in source spreadsheet.';
  }
  return standardizedHostsObjsArr;
};
