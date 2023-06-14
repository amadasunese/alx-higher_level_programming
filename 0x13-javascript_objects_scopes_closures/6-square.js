#!/usr/bin/node
module.exports = class Square extends require('./5-quare.js') {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }

    const row = c.repeat(this.size);
    for (let i = 0; i < this.size; i++) {
      console.log(row);
    }
  }
};
