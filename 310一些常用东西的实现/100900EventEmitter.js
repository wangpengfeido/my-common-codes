/**
 * EventEmitter
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    for (let i = 0; i < this.events[eventName].length; i++) {
      this.events[eventName][i](...arg);
    }
  }

  off(eventName, listener) {
    if (!this.events[eventName]) {
      return;
    }
    const position = this.events[eventName].indexOf(listener);
    if (position >= 0) {
      this.events[eventName].splice(position, 1);
    }
  }
}
