/**
 * 裁剪并压缩图片，图片不拉伸。裁剪时居中裁剪。
 * 注：如果跨域，图片需支持跨域
 * @param img 图片地址
 * @param WIDTH 需要裁剪至图片宽度
 * @param HEIGHT 需要裁剪至图片高度
 */
async function cutAndCompressImage(img, WIDTH = 610, HEIGHT = 800) {
  const image = new Image();
  image.src = img;
  await new Promise(resolve => {
    image.onload = function() {
      resolve();
    };
  });
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext('2d');
  let scaledHeight = image.naturalHeight;
  let scaledWidth = image.naturalWidth;
  if (image.naturalWidth / image.naturalHeight > WIDTH / HEIGHT) {
    const scalePercent = HEIGHT / image.naturalHeight;
    scaledHeight = HEIGHT;
    scaledWidth = parseInt(image.naturalWidth * scalePercent);
  } else if (image.naturalWidth / image.naturalHeight < WIDTH / HEIGHT) {
    const scalePercent = WIDTH / image.naturalWidth;
    scaledHeight = parseInt(image.naturalHeight * scalePercent);
    scaledWidth = WIDTH;
  }
  context.drawImage(image, -(scaledWidth - WIDTH) / 2, -(scaledHeight - HEIGHT) / 2, scaledWidth, scaledHeight);
  return canvas;
}
