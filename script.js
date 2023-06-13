// complete the given function

function palindrome(str){
	 const alphanumericString = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  let left = 0;
  let right = alphanumericString.length - 1;

  while (left < right) {
    if (alphanumericString[left] !== alphanumericString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;

}
module.exports = palindrome
