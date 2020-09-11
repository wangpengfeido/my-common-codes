/**
 * 函数防抖
 */
function debounce(func, wait) {
  let timer;
  return function (...args) {
    // 清除掉上一次的timeout，重新开始计时
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 保持调用 this
      func.apply(this, args);
    }, wait);
  };
}
