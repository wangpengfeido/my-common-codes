/**
 * 将json字符串深度转换为对象
 * 适用于JSON中包含JSON字符串的情况
 */
function jsonDeepParse(jsonStr) {
  function parseWithCatch(str) {
    let result;
    try {
      result = JSON.parse(str);
    } catch (e) {
      result = str;
    }
    return result;
  }

  function oneParse(str) {
    let result = parseWithCatch(str);
    if (typeof result !== 'object') {
      return result;
    }
    for (let key in result) {
      result[key] = oneParse(result[key]);
    }
    return result;
  }

  return oneParse(jsonStr);
}

console.log(jsonDeepParse('true'));
console.log(jsonDeepParse('{"innerJson":"{\\"a\\":1}"}'));
