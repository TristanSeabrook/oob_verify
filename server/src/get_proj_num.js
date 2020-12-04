//take a filename as a string and return the first 6 consecutive digits
module.exports = (filenameStr, config) => {
  let regex = config.regex.proj;
  if (filenameStr.match(regex)) {
    return filenameStr.match(regex)[0];
  }
//if the filename doesn't contain 6 consecutive digits, return the default
  else {
    return config.altProjStr;
  }
};
