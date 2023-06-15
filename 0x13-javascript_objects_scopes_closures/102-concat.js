#!/usr/bin/node

const fs = require('fs');

function concatFiles(fileA, fileB, fileC) {
    const file1Content = fs.readFileSync(fileA, 'utf8');

    const file2Content = fs.readFileSync(fileB, 'utf8');

    const concatenatedContent = file1Content + file2Content;

    fs.writeFileSync(fileC, concatenatedContent);

    console.log('Files concatenated successfully!');
}

const fileA = process.argv[2];
const fileB = process.argv[3];
const fileC = process.argv[4];

concatFiles(fileA, fileB, fileC);
