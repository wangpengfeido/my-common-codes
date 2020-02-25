/**
 * 使用网络请求将图片转base64
 * 注：图片必须允许跨域
 */
export function getURLBase64(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      if (this.status === 200) {
        let blob = this.response;
        let fileReader = new FileReader();
        fileReader.onloadend = function(e) {
          let result = e.target.result;
          resolve(result);
        };
        fileReader.readAsDataURL(blob);
      }
    };
    xhr.onerror = function(err) {
      reject(err);
    };
    xhr.send();
  });
}