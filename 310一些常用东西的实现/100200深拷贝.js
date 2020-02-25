/**
 * 深拷贝
 */
export function cloneDeep(obj) {
  const visited = []; // 用于判断环状数据

  function doOnce(obj) {
    if (typeof obj === 'object') {
      // 如果是一个对象（包括数组）
      const visitedIndex = visited.indexOf(obj);
      if (visitedIndex >= 0) {
        return visited[visitedIndex];
      } else {
        const result = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
        for (let key in obj) {
          result[key] = doOnce(obj[key]);
        }
        return result;
      }
    } else if (typeof obj === 'function') {
      // 如果是一个函数
      return eval(`(${obj.toString()})`);
    } else {
      // 其他基本类型
      return obj;
    }
  }

  return doOnce(obj);
}
