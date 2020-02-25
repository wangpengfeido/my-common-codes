/**
 * Inside-Out洗牌算法
 * 从前向后扫描，扫描到i下标，取[0,i]随机数j，将i/j元素互换（插牌）
 * 好处是不用知道数组的长度，或者数组可以是动态长度
 * 时间复杂度 O(n)
 */
function insideOutShuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(insideOutShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));