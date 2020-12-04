let truthReducer = (acc, curr) => acc && curr;

let createRegex = (input) => {
  let isRegex = input.constructor.name === "RegExp";
  return isRegex ? input : new RegExp(input);
};

let getExpectedKeyRegexes = (config, strict = false) => {
  let valueType = strict ? 'name' : 'regex';
  let columns = config.expectedColumns;
  return columns.map((column) => createRegex(column[valueType]));
};

let objHasKeys = (config, obj, strict) => {
  let expectedKeyRegexes = getExpectedKeyRegexes(config, strict);
  let objKeys = Object.keys(obj);
  let truthArr = expectedKeyRegexes.map((regex) => regex.test(objKeys));
  return truthArr.reduce(truthReducer);
};

let firstObjHasKeys = (config, arr, strict) => {
  let firstObj = arr[0];
  return objHasKeys(config, firstObj, strict);
};

let allObjsHaveKeys = (config, arr, strict) => {
  let truthArr = arr.map((obj) => objHasKeys(config, obj, strict));
  return truthArr.reduce(truthReducer);
};

module.exports = {
  objHas: objHasKeys,
  firstObjHas: firstObjHasKeys,
  allObjsHave: allObjsHaveKeys
};
