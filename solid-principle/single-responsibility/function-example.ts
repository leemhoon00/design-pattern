// 하나의 함수는 하나의 기능을 한다.
function add(a: number, b: number) {
  return a + b;
}
function printConsole(value: number) {
  console.log(value);
}

// 안 좋은 예시
function addPrint(a: number, b: number) {
  const result = a + b;
  console.log(result);
  return result;
}
