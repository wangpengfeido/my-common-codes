/**
 * 是否 ios
 */
function isIos() {
  return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
 * 是否 android
 */
function isAndroid() {
  return navigator.userAgent.indexOf('Android') >= 0 || navigator.userAgent.indexOf('Linux') > -1;
}

/**
 * 是否 iphone
 */
function isIphone() {
  return navigator.userAgent.indexOf('iPhone') >= 0;
}

/**
 * 是否 ipad
 */
function isIpad() {
  return navigator.userAgent.indexOf('iPad') > -1;
}
