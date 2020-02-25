/**
 * 函数节流
 */
function throttle(func, wait) {
  let timer;
  return function(...args) {
    let context = this;
    // 如果timeout不存在，则说明可以执行
    if (!timer) {
      timer = setTimeout(function() {
        // 保持原来的this
        func.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}
