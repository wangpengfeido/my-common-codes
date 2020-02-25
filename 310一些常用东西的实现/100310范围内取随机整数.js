/**
 * 范围内取随机数。来自../100300
 */
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * 范围内取随机整数。范围是 [min,max]
 * @param {integer} min
 * @param {integer} max
 */
function randomIntInRange(min, max) {
  return Math.floor(randomInRange(min, max + 1));
}

function test() {
  while (true) {
    console.log(randomIntInRange(4, 8));
  }
}

test();
