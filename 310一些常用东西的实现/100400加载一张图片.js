/**
 * 加载一张图片
 */
function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.addEventListener('load', () => {
        resolve(img);
      });
      img.addEventListener('error', () => {
        reject(img);
      });
    });
  }