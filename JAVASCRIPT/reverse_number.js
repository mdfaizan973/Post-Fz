function reverseNumber(num) {
  let reversed = 0;

  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}

// Example usage
let originalNumber = 12345;
let reversedNumber = reverseNumber(originalNumber);
console.log(`Original:- ${originalNumber}`);
console.log(`Reversed:- ${reversedNumber}`);
