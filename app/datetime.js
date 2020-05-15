//return the current date and time as a string in yyyy-mm-dd_hh-mm-ss form
module.exports = () => {
  let zeroPad = (timeObj) => {
    let timeStr = timeObj.toString();
    return timeStr.padStart(2, '0');
  };

  let date =    new Date();

  let year =    zeroPad(date.getFullYear());
  let month =   zeroPad(date.getMonth() + 1);
  let day =     zeroPad(date.getDate());
  let hour =    zeroPad(date.getHours());
  let minute =  zeroPad(date.getMinutes());
  let second =  zeroPad(date.getSeconds());

  return `${year}-${month}-${day}_${hour}-${minute}-${second}`;
};
