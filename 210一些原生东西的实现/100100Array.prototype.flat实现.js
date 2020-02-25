/**
 * 数组拍平
 * @example [[1,2],[3,4]]._flat() 结果为 [1,2,3,4]
 */
Array.prototype._flat = function _flat(depth = 1) {
  function fn(arr, depth) {
    if (!Array.isArray(arr) || depth === 0) {
      return arr;
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result = result.concat(fn(arr[i], depth - 1));
    }
    return result;
  }

  return fn(this, depth);
};
