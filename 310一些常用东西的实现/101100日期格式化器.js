/**
 * 将字符串前面补值，直到达到指定的长度
 */
function fillLeft(str, length, fillStr = '0') {
  str = str.toString();
  while (str.length < length) {
    str = `${fillStr}${str}`;
  }
  return str;
}

/**
 * 日期格式化器
 * @param {Date} value 要格式化的日期
 * @param {string} template 模版。默认：'YYYY-MM-dd'。可使用的值：YYYY,MM,dd,HH,mm,ss
 */
function dateFilter(value, template = 'YYYY-MM-dd') {
  const date = new Date(value);
  const YYYY = date.getFullYear().toString();
  let MM = (date.getMonth() + 1).toString();
  MM = fillLeft(MM, 2);
  let dd = date.getDate();
  dd = fillLeft(dd, 2);
  let HH = date.getHours();
  HH = fillLeft(HH, 2);
  let mm = date.getMinutes();
  mm = fillLeft(mm, 2);
  let ss = date.getSeconds();
  ss = fillLeft(ss, 2);
  let result = template;
  result = result.replace(/YYYY/g, YYYY);
  result = result.replace(/MM/g, MM);
  result = result.replace(/dd/g, dd);
  result = result.replace(/HH/g, HH);
  result = result.replace(/mm/g, mm);
  result = result.replace(/ss/g, ss);
  return result;
}

