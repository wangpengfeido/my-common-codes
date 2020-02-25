/**
 * 选择排序
 * 从第一个元素开始，查找之后（包括该元素）最小的元素，将最小的元素与该元素交换
 * 每查找一轮，进行到的地方就是最小的
 * 时间复杂度O(n^2)
 * 3 2 4 1
 * 1 2 4 3 (1 3 交换)
 * 1 2 4 3 (2是最小的，未交换)
 * 1 2 3 4 (3 4 交换)
 */

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

exports.selectionSort = array => {
  for (let i = 0, len = array.length; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
  return array;
};
