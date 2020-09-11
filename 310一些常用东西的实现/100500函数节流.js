/**
 * 函数节流
 */
function throttle(func, wait) {
  let timer;
  return function (...args) {
    // 如果timeout不存在，则说明可以执行
    if (!timer) {
      timer = setTimeout(() => {
        // 保持原来的this
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
