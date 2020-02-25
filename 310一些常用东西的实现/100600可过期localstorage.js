class ExpirableLocalStorage {
  /**
   * 设置localStorage键值对
   * @param {Integer} expires 过期时间戳
   */
  static setItem(key, value, expires) {
    if (expires < Date.now()) {
      this.removeItem(key);
      return;
    }
    window.localStorage.setItem(key, value);
    window.localStorage.setItem(`EXPIRES_${key}`, expires);
  }

  /**
   * 获取localStorage值
   */
  static getItem(key) {
    if (parseInt(window.localStorage.getItem(`EXPIRES_${key}`)) < Date.now()) {
      this.removeItem(key);
      return null;
    }
    return window.localStorage.getItem(key);
  }

  /**
   * 移除localStorage键值对
   */
  static removeItem(key) {
    window.localStorage.removeItem(key);
    window.localStorage.removeItem(`EXPIRES_${key}`);
  }

  /**
   * 检查过期的键值对并移除
   */
  static checkExpired() {
    for (let i = 0, len = window.localStorage.length; i < len; i++) {
      const key = window.localStorage.key(i);
      const value = window.localStorage.getItem(key);
      const expires = window.localStorage.getItem(`EXPIRES_${key}`);
      if (value && expires && expires < Date.now()) {
        this.removeItem(key);
        i--;
        len--;
      }
    }
  }

  /**
   * 定时检查
   */
  static timingCheck(interval = 1000) {
    if (ExpirableLocalStorage.timer) {
      clearInterval(ExpirableLocalStorage.timer);
    }
    ExpirableLocalStorage.timer = setInter(() => {
      this.checkExpired();
    }, interval);
    return this;
  }

  /**
   * 停止定时检查
   */
  static stopTimingCheck() {
    clearInterval(ExpirableLocalStorage.timer);
    ExpirableLocalStorage.timer = null;
    return this;
  }
}
