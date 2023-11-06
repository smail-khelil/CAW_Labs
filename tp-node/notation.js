function mean(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// avg = mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(avg);

module.exports = {
  mean,
};
