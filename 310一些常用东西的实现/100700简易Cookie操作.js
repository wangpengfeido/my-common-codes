/**
 * 获取所有cookie
 */
function getCookies() {
  let arr_cookies = document.cookie.split(';');
  if (!arr_cookies[0]) {
    return {};
  }
  const result = {};
  arr_cookies.forEach(item => {
    const pair = item.split('=');
    if (!pair[1] && item.indexOf('=') <= -1) {
      result[''] = pair[0];
    } else {
      result[pair[0]] = pair[1];
    }
  });
  return result;
}

/**
 * 获取某个cookie
 */
function getCookie(key) {
  return getCookies()[key];
}

/**
 * 设置cookie
 */
function setCookie(key, value, expires) {
  const str_expires = expires ? `expires=${expires.toUTCString()};` : '';
  document.cookie = `${key}=${value};${str_expires}`;
}

/**
 * 删除cookie
 */
function removeCookie(key) {
  document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

/**
 * 清空所有cookie
 */
function clearCookie() {
  Reflect.ownKeys(getCookies()).forEach(key => removeCookie(key));
}