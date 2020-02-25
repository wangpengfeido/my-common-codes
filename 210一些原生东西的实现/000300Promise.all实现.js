

Promise._all = function (arr) {
  return new Promise((resolve, reject) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(res => {
        result.push(res);
        if (result.length === arr.length) {
          resolve(result);
        }
      }).catch(err => {
        reject(err);
      });
    }
  });
};