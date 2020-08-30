class MyPromise {
  constructor(executor) {
    this._status = "pending";
    this._data = undefined;
    this._callbacks = [];

    const resolve = (value) => {
      // setTimeout 让处理异步执行，以防executor立即触发resolve
      setTimeout(() => {
        if (this._status === "pending") {
          this._status = "resolved";
          this._data = value;
          // 因为同一个promise可以多次调用then，所以循环执行处理函数
          for (let i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i].onResolved(value);
          }
        }
      });
    };

    const reject = (reason) => {
      setTimeout(() => {
        if (this._status === "pending") {
          this._status = "rejected";
          this._data = reason;
          for (let i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i].onRejected(reason);
          }
        }
      });
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onResolved, onRejectd) {
    this._callbacks.push({ onResolved, onRejectd });
  }
  catch() {}
}
