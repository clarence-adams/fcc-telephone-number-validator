function telephoneCheck(str) {
  // splits string into an array without whitespace
  let splitStr = str.split("")
  .filter(element => /\s/
  .test(element) ? false : true);

  // creates a variable that stores the length of the input with only numbers
  let numLength = splitStr.filter(element => /[0-9]/
  .test(element) ? true : false)
  .length;

  // checks string length
  if (numLength != 10 && numLength != 11) {
    return false;
  }

  // checks if any characters other than a digit, parenthesis or hyphen exists in input
  for (let i = 0; i < splitStr.length; i++) {
    if (/[\(\)\-0-9]/.test(splitStr[i]) == false) {
      return false;
    }
  }

  // filters whitespace from the string to be tested by regexp's
  str = splitStr.join("");

  // tests filtered string against regexp's
  if (/^[0-9]/.test(str) == true) {
    if (numLength == 11) {
      if (/^1/.test(str) == false) {
        return false;
      } else if (/^1\(/.test(str) == true && /^1\([0-9]{3}\)/.test(str) == false) {
        return false;
      } else if (/^1[0-9]{3}\)/.test(str) == true) {
        return false;
      }
    } else if (numLength == 10) {
      if (/^[0-9]{3}\)/.test(str) == true) {
        return false;
      }
    }
  } else if (/^\(/.test(str) == true) {
    if (/^\([0-9]{3}\)[0-9]{7}$/.test(str) == false 
    && /^\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/.test(str) == false) {
      return false;
    }
  } else if (/^[^0-9\(]/.test(str) == true) {
    return false;
  }
  
  return true;
}

console.log(telephoneCheck("1 555-555-5555"));