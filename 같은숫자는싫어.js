function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] = "a";
    }
  }
  answer = arr.filter((abc) => abc !== "a");

  return answer;
}
