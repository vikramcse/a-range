'use strict';

module.exports = function (start, end, step) {
  // When the end is null then start from 0 and end at the start it means we
  // have to create 'start' number of elements in the array
  if (end == null) {
    end = start || 0;
    start = 0;
  }

  // by default step size is 1 (of-course).
  step = step || 1;
  var N = Math.max(Math.ceil((end - start) / step), 0);

  // It is faster than creating an array with new Array(N).
  var arr = Array.apply(null, {length: N});

  for (var i = 0; i < N; i++) {
    arr[i] = start;
    start = start + step;
  }

  return arr;
};
