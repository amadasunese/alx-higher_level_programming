#!/usr/bin/node

// Importing the dictionary from 101-data.js
const { dict } = require('./101-data');

// Computing the new dictionary
const newDict = {};

// Iterating over the user IDs in the initial dictionary
for (const userId in dict) {
  const occurrences = dict[userId];

  // Checking if the occurrences value exists as a key in the new dictionary
  if (occurrences in newDict) {
    newDict[occurrences].push(userId);
  } else {
    newDict[occurrences] = [userId];
  }
}

console.log(newDict);
