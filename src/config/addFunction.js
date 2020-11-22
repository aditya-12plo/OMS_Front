//return true if char is a number
export function isNumber (text) {
    if(text) {
      var reg = new RegExp('[0-9]+$');
      return reg.test(text);
    }
    return false;
  }
  
export function removeSpecial (text) {
    if (/^\W$/.test(text.key)) {
        text.preventDefault();
    }
  }