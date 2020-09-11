/**
 * 获取URL中的search部分
 */
export function getSearch(url) {
  const reg = /^.*?\?(.*?)(?:#.*)?$/;
  const res = url.match(reg);
  if (res) {
    return res[1];
  } else {
    return "";
  }
}

/**
 * 根据key获取其query值
 */
export function getQueryValue(search, name) {
  if (!search) {
    return "";
  } else {
    search = search.substring(1);
  }
  const reg = new RegExp(`(?:^|&)${name}=([^&]*)`);
  const result = search.match(reg);
  if (result) {
    return decodeURI(result[1]);
  } else {
    return "";
  }
}

/**
 * 将url中query字符串解析为对象（正则方式）
 */
export function parseQueryString(search) {
  if (!search) {
    return "";
  } else {
    search = search.substring(1);
  }

  const reg = /(?:^|&)([^=&]*)=?([^&]*)/g;
  const ans = {};
  let temp;
  while ((temp = reg.exec(search))) {
    if (temp[1]) {
      ans[temp[1]] = temp[2];
    }
  }

  return ans;
}
