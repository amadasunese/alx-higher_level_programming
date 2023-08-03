#!/usr/bin/node
// script that gets the contents of a webpage and stores it in a file.

const request = require('request');
const fs = require('fs');

function saveWebPageToFile(url, filePath) {
  request(url, { encoding: 'utf-8' }, (err, res, body) => {
    if (err) {
      console.error('An error occurred while making the request:');
      console.error(err);
    } else if (res.statusCode !== 200) {
      console.error(`Error: Received status code ${res.statusCode}`);
    } else {
      fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (err) {
          console.error('An error occurred while saving the file:');
          console.error(err);
        } else {
          console.log(`Webpage content successfully saved to: ${filePath}`);
        }
      });
    }
  });
}

// Check if both URL and file path arguments are provided
if (process.argv.length < 4) {
  console.error('Usage: node script.js <url> <file_path>');
} else {
  const url = process.argv[2];
  const filePath = process.argv[3];
  saveWebPageToFile(url, filePath);
}
