#!/usr/bin/node

// Check if there are any arguments
if (process.argv.length <= 2) {
  console.log(0);
} else if (process.argv.length === 3) {
  console.log(0);
} else {
  // Convert arguments to integers
  const numbers = process.argv.slice(2).map(Number);

  // Find the second largest integer
  let largest = numbers[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] < largest) {
      secondLargest = numbers[i];
    }
  }

  // Print the second largest integer
  console.log(secondLargest);
}
