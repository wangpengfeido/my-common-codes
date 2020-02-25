/**
 * 比较两个版本
 * 注：认定 7.8.0 版本大于 7.8
 */
function compareVersion(version1, version2) {
  const version1Arr = version1.split('.');
  const version2Arr = version2.split('.');
  for (let i = 0, len = Math.max(version1Arr.length, version2Arr.length); i < len; i++) {
    const value1 = version1Arr[i];
    const value2 = version2Arr[i];
    if (isNaN(value1)) {
      return -1;
    }
    if (isNaN(value2)) {
      return 1;
    }
    if (value1 - value2 !== 0) {
      return value1 - value2;
    }
  }
  return 0;
}