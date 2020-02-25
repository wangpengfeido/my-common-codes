/**
 * 传入一个数值数组，数组中每个数值代表取到该数值的概率，返回取到的数值的序号
 * @param {Array<number>} arr 一个数值数组，数值比代表概率比
 */
function probabilityArray(arr) {
  const sum = arr.reduce((accu, item) => {
    return accu + item;
  }, 0);
  const random = Math.random() * sum;
  for (let i = 0, accu = 0; i < arr.length; i++) {
    accu += arr[i];
    if (random < accu) {
      return i;
    }
  }
}

function test(arr) {
  result = Array.from({ length: arr.length }).fill(0);
  while (true) {
    result[probabilityArray(arr)]++;
    console.log(result);
  }
}
test([1, 2, 3]);