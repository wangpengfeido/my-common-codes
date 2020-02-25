/**
 * 计时工具。传入一个时间，它会随着系统时间流逝
 */
export class TimeUtil {
  /**
   * @param {Date} date 计时时间
   * @param interval 倒计时执行间隔，每次执行会调用一次callback
   * @param callback 倒计时回调。有一个参数：{restMilliseconds-剩余时间}
   */
  constructor({ date, interval = 1000, callback = () => {} }) {
    this.date = new Date(date);
    this.interval = interval;
    this.callback = callback;

    this.timer = null;
    this.lastDate = new Date();

    this.timer = setInterval(() => {
      const currentDate = new Date();
      const pastTime = currentDate.getTime() - this.lastDate.getTime();
      this.date.setTime(this.date.getTime() + pastTime);
      this.lastDate = currentDate;
      this.callback({ date: this.date });
    }, this.interval);
  }
  clear() {
    clearInterval(this.timer);
    this.timer = null;
  }
  getDate() {
    return this.date;
  }
}