/**
 * Knuth-Durstenfeld洗牌算法
 * 从后向前扫描，扫描到i下标，取[0,i]随机数j，将i/j元素互换（换牌）
 * 时间复杂度 O(n)
 */
function knuthDurstenfeldShuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(knuthDurstenfeldShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
