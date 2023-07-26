#!/usr/bin/node
// reads and prints the content of a file.

const fs = require('fs');

function readFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
      console.error('An error occurred while reading the file:');
      console.error(err);
    } else {
      console.log(content);
    }
  });
}

// Check if a file path argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node script.js <file_path>');
} else {
  const filePath = process.argv[2];
  readFileContent(filePath);
}
