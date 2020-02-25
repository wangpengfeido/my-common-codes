/**
 * 范围内取随机数。范围是 [min,max)
 */
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function test() {
  while (true) {
    console.log(randomInRange(4, 8));
  }
}

test();
