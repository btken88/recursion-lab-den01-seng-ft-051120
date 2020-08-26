// Code your solution here

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    const newString = string.substring(1)
    printString(newString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return string.substring(string.length - 1) + reverseString(string.substring(0, string.length - 1))
  } else {
    return string
  }
}

function isPalindrome(string) {
  if (string[0] === string[string.length - 1]) {
    if (string.length < 2) {
      return true
    }
    else if (string.length > 0) {
      return isPalindrome(string.substring(1, string.length - 1))
    }
  } else {
    return false
  }
}