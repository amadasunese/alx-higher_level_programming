#!/usr/bin/node
exports.converter = function (base) {
  if (isNaN(base) || base < 2 || base > 36) {
    throw new Error('Invalid base. Please provide a number between 2 and 36.');
  }

  return function (number) {
    if (isNaN(number) || !isFinite(number)) {
      throw new Error('Invalid number. Please provide a valid base 10 number.');
    }

    return number.toString(base);
  };
};
