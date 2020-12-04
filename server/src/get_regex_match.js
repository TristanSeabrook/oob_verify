module.exports = (column, columnNamesArr) => {
    let regex = column.regex;
    let sourceColumnName = null;
    columnNamesArr.forEach((columnName) => {
      if (regex.test(columnName)) {
        sourceColumnName = columnName;
      }
    });
    return sourceColumnName;
};
