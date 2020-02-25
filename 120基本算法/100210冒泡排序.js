/**
 * 冒泡排序
 * 依次比较两个相邻的元素，将前一个比后一个大的元素交换
 * 每进行一轮，最大的元素就被固定在这一轮的最后
 * 时间复杂度O(n^2)
 * 3 2 4 1
 * 2 3 4 1 （第一轮开始，交换2 3）
 * 2 3 1 4 （下一步3 4不需要交换，再下一步交换4 1，第一轮结束，4被固定）
 * 2 1 3 4 （第二轮开始，2 3不需要交换，下一步交换3 1，第二轮结束，3被固定）
 * 1 2 3 4 （第三轮开始，交换2 1，第三轮结束，2被固定）
 */

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};
