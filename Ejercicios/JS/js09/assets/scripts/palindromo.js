const isPalindrome = (word) => {
  word = word.toLowerCase().split(" ").join("");
  return word === word.split("").reverse().join("")
}

module.exports = { isPalindrome };
