#!/usr/bin/node
exports.esrever = function (list) {
  if (!Array.isArray(list)) {
    throw new Error('Input is not a valid list.');
  }

  return list.reverse();
};
