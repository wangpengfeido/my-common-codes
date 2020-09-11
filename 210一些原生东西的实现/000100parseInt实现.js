// 需要注意的地方：
// str参数会先执行toString()，所以parseInt(021,8)，执行的结果是15，因为021.toString()是17

/**
 * parseInt实现
 * @param str
 * @param radix 参数str的进制
 * @return {number}
 * @private
 */
function _parseInt(str, radix) {
  // 基数列表
  const baseNumList = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    g: 16,
    h: 17,
    i: 18,
    j: 19,
    k: 20,
    l: 21,
    m: 22,
    n: 23,
    o: 24,
    p: 25,
    q: 26,
    r: 27,
    s: 28,
    t: 29,
    u: 30,
    v: 31,
    w: 32,
    x: 33,
    y: 34,
    z: 35,
  };

  // 如果类型不是 string 或 number 类型返回NaN
  if (typeof str !== "string" && typeof str !== "number") {
    return NaN;
  }

  str = str.toString().trim().toLowerCase();

  // 设置radix
  if (typeof radix !== "string" && typeof radix !== "number") {
    // 根据字符串格式获取进制
    const hexReg = /^0[xX]/;
    radix = hexReg.test(str) ? 16 : 10;
  } else {
    // 递归
    radix = _parseInt(radix);
  }
  if (radix < 2 || radix > 36 || Number.isNaN(radix)) {
    return NaN;
  }

  // 正则匹配出整数部分
  const intRegStr = `^${radix === 16 ? "(?:0[xX])?" : ""}0*([${Object.keys(
    baseNumList
  )
    .splice(0, radix)
    .join("")}]*)[\w\W]*`;
  const intPartInStr = str.match(new RegExp(intRegStr))[1];
  if (!intPartInStr) {
    return NaN;
  }
  // 逐位计算
  let result = 0;
  for (let i = 0, len = intPartInStr.length; i < len; i++) {
    let figure = intPartInStr[len - i - 1];
    result += baseNumList[figure] * Math.pow(radix, i);
  }
  return result;
}
