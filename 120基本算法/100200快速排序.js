/**
 * 快速排序
 * 选择一个基准元素。将比它小的元素放到左边，比它大的放到右边。再分别对左边和右边进行快速排序，直到只剩一个元素为止。
 * 时间复杂度O(nlogn)
 * 3 2 4 1
 * {2 1} 3 {4} （选择3为基准，2 1放到左边，4放到右边）
 * {1 {2}} 3 {4} （左边部分选择1为基准元素，2放到左边）
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = 0; // 选择基准元素
  let pivot = arr.splice(pivotIndex, 1)[0]; // 将基准元素从数组中移除
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
