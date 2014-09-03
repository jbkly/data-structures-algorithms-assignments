// Store a set of words in an array and display the contents
// both forward and backward.

var wordArray = ['Eighteen', 'cynical', 'Siberian', 'Satanists'];

var forward = wordArray.join(' ');
var backwardWords = wordArray.reverse().join(' ');
var backwardChars = forward.split('').reverse().join('');

console.log(forward);
console.log(backwardWords);
console.log(backwardChars);
