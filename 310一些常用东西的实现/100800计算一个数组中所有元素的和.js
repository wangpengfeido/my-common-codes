/**
 * 计算一个数组中所有元素的和
 */
function arrSum(arr) {
  return arr.reduce((accu, item) => {
    return accu + item;
  }, 0);
}

console.log(arrSum([1, 2, 3]));
