class MyPromise {
  constructor(executor) {
    this._status = "pending";
    this._data = undefined;
    this._callbacks = [];

    const resolve = (value) => {
      if (this._status === "pending") {
        this._status = "resolved";
        this._data = value;
        // setTimeout 让处理异步执行
        setTimeout(() => {
          // 因为同一个promise可以多次调用then，所以循环执行处理函数
          for (let i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i].onResolved(value);
          }
        });
      }
    };

    const reject = (reason) => {
      if (this._status === "pending") {
        this._status = "rejected";
        this._data = reason;
        setTimeout(() => {
          for (let i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i].onRejected(reason);
          }
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onResolved, onRejected) {
    // 默认处理函数，同时可以处理值的穿透
    onResolved =
      typeof onResolved === "function"
        ? onResolved
        : function (value) {
            return value;
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function (reason) {
            throw reason;
          };

    if (this._status === "resolved") {
      // resolved 状态
      // 直接调用onResolved回调，并将其返回结果作为新promise的状态

      return new MyPromise((resolve, reject) => {
        // 异步执行
        setTimeout(() => {
          try {
            var x = onResolved(this._data);
            if (x instanceof MyPromise) {
              x.then(resolve, reject);
            } else {
              resolve(x);
            }
          } catch (e) {
            reject(e);
          }
        });
      });
    }
    if (this._status === "rejected") {
      // reject 状态
      // 直接调用onResolved回调，并将其返回结果作为新promise的状态

      return new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            var x = onRejected(this._data);
            if (x instanceof MyPromise) {
              x.then(resolve, reject);
            } else {
              resolve(x);
            }
          } catch (e) {
            reject(e);
          }
        });
      });
    }
    if (this._status === "pending") {
      return new MyPromise((resolve, reject) => {
        this._callbacks.push({
          onResolved: (value) => {
            try {
              var x = onResolved(value);
              if (x instanceof MyPromise) {
                x.then(resolve, reject);
              } else {
                resolve(x);
              }
            } catch (e) {
              reject(e);
            }
          },
          onRejected: (value) => {
            try {
              var x = onRejected(value);
              if (x instanceof MyPromise) {
                x.then(resolve, reject);
              } else {
                resolve(x);
              }
            } catch (e) {
              reject(e);
            }
          },
        });
      });
    }
  }
  catch() {}
}

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 500);
}).then((value) => {
  console.log("a", value);
});

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 500);
})
  .then()
  .then()
  .then((value) => {
    console.log("b", value);
  });
