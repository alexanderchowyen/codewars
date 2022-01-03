function solution(num) {
  if (num === null) {
    return [];
  }
  var i = num.sort(function (a, b) {
    return a - b;
  });
  return i;
}
