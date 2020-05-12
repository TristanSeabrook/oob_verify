/*jshint esversion 8 */

//take a filename as a string and return the first 6 consecutive digits
module.exports = (filenameString, config) => {
  let regex = config.primeRegex;
  if (filenameString.match(regex)) {
    return filenameString.match(regex)[0];
  }
//if the filename doesn't contain 6 consecutive digits, return the default
  else {
    return config.altPrimeStr;
  }
}
