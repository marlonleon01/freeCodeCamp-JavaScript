function palindrome(str) {
    let regex = /[\W_]/g;

    let lowerCaseRegexStr = str.toLowerCase().replace(regex, "");
    
    let reverseStr = lowerCaseRegexStr.split("").reverse().join("");

    if (reverseStr === lowerCaseRegexStr) {
        return true;
    } else {
        return false;
    }
  }
  
  palindrome("eye");