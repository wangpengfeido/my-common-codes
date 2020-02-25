/**
 * 提取字符串中的数字
 * 注：只提取第一次匹配的数字
 */
function getNumberFromStr(str) {
  const matches = str.match(/-?[0-9.]+/);
  if (matches && matches[0]) {
    return Number(matches[0]);
  } else {
    return null;
  }
}