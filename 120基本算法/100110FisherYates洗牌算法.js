/**
 * Fisher-Yates 洗牌算法
 * 从原数组中抽出某个值，删除后，放到新数组（抽牌）
 * 时间复杂度 O(n^2)
 */
function fisherYatesShuffle(arr) {
  const res = [];
  while (arr.length) {
    const i = Math.floor(Math.random() * arr.length);
    const value = arr.splice(i, 1)[0];
    res.push(value);
  }
  return res;
}

console.log(fisherYatesShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
