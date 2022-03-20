function solution(n) {
  return parseInt((answer = n.toString(3).split("").reverse().join("")), 3);
}

console.log(solution(45));
