function getAverage(marks){
  let average = marks.reduce((a, b)=> a + b) / marks.length;
  return Math.floor(average)
  //TODO : calculate the downward rounded average of the marks array
}
//reduce
//math.floor
