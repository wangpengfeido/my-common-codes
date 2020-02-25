
/**
 * 函数防抖
 */
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    // 清除掉上一次的timeout，重新开始计时
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // 保持原来的this
      func.apply(context, arguments)
    }, wait)
  }
}