let getRegexMatchInArr =  require('../app/get_regex_match');
let keys =                require('../app/key_check');
//given a spreadsheet's contents, return an object with standardized keys
module.exports = (config, xlsxContentsObjsArr) => {
//get an array of the source column names from the keys in the first object in
//the xlsx contents array
  let originalColumnNames = Object.keys(xlsxContentsObjsArr[0]);
  let expectedColumns = config.expectedColumns;
//find the source column name and add it to each expectedColumn object
  expectedColumns.map((column) => {
    column.sourceColumnName = getRegexMatchInArr(column, originalColumnNames);
  });

  //based on the expected columns, return an array containing standardized
  //objects
  let standardizedObjsArr = xlsxContentsObjsArr.map((hostObj) => {
    return expectedColumns.map((column) => {
      hostObj[column.name] = column.sourceColumnName;
    })
  });

  if (!keys.firstObjHas(config, xlsxContentsObjsArr)) {
    return 'Error: unable to find expected column headings in source spreadsheet.';
  }

};
