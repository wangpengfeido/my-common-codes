/**
 * 倒计时工具
 */
export class countDownUtil {
  /**
   * @param milliseconds 倒计时总共时间（毫秒）
   * @param interval 倒计时执行间隔，每次执行会调用一次callback
   * @param callback 倒计时回调。有一个参数：{restMillisecond-剩余时间}
   */
  constructor({ milliseconds, interval, callback = () => {} }) {
    this.milliseconds = milliseconds;
    this.interval = interval;
    this.callback = callback;
    this.restMilliseconds = milliseconds; // 剩余时间
    this.timer = null;
    this.lastDate = new Date();
    this.timer = setInterval(() => {
      if (this.restMilliseconds <= 0) {
        this.callback({ restMilliseconds: 0 });
        this.clear();
        return;
      }
      const currentDate = new Date();
      this.restMilliseconds -= currentDate.getTime() - this.lastDate.getTime();
      this.lastDate = currentDate;
      this.callback({ restMilliseconds: this.restMilliseconds });
    }, this.interval);
  }
  clear() {
    clearInterval(this.timer);
    this.timer = null;
  }
  getRestMilliseconds() {
    return this.restMilliseconds;
  }
}
