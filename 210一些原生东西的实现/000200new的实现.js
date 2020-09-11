function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  // 如果构造函数有返回其他对象值，则构造出的是返回的这个对象
  return result instanceof Object ? result : obj;
}