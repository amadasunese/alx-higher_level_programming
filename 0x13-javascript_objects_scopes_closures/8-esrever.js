#!/usr/bin/node
exports.esrever = function (list) {
  if (!Array.isArray(list)) {
    throw new Error('Input is not a valid list.');
  }

  const reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }

  return reversedList;
};
