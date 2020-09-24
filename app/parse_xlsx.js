//import the xlsx parsing module
let XLSX = require('xlsx');

//given a spreadsheet's filename, return an object of its first sheet's contents
module.exports = (filename) => {
  try {
    let workbook = XLSX.readFile(filename);
    let firstWorksheetName = workbook.SheetNames[0];
    let firstWorksheet = workbook.Sheets[firstWorksheetName];
    return XLSX.utils.sheet_to_json(firstWorksheet);
  }
  catch(error) {
    console.log(`Error: ${error}`);
  }
};
