function solution(sizes) {
  var answer = [];
  var a = [];
  var b = [];
  for (let i = 0; i < sizes.length; i++) {
    answer.push(sizes[i]);
    answer[i].sort((a, b) => b - a);
    a.push(answer[i][0]);
    b.push(answer[i][1]);
  }
  var garo = Math.max(...a);
  var sero = Math.max(...b);

  console.log(b);
  return (answer = garo * sero);
}
