function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  // 当构造函数返回非对象值时，不作处理
  return ret instanceof Object ? ret : obj;
}