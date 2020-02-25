/**
 * 当一个Promise数组中的所有元素都被resolve或reject时，返回的Promise将被resolve
 * @param {Promises[]} promises
 */
export function promisesOver(promises) {
  return new Promise(resolve => {
    const length = promises.length;
    let overNum = 0;
    let results = [];
    function promisesHandler(i, result) {
      result[i] = result;
      overNum++;
      if (overNum === length) {
        resolve(results);
      }
    }
    for (let i = 0; i < length; i++) {
      promises[i].then(
        result => {
          promisesHandler(i, result);
        },
        result => {
          promisesHandler(i, result);
        }
      );
    }
  });
}