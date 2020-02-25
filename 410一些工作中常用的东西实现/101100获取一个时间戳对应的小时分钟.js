/**
 * 获取一个时间戳对应的小时及分钟
 * @param timestamp 时间戳
 * @param moduloHour 超过24小时是否重新从0开始计算
 */
export function getHoursMinutesOfTimestamp({ timestamp, moduloHour, hasSs = false }) {
  let hours = Math.floor(timestamp / (1000 * 3600));
  if (moduloHour) {
    hours = hours % 24;
  }
  hours = fillLeft(hours, 2);
  timestamp -= hours * 1000 * 3600;
  let minutes = Math.floor(timestamp / (1000 * 60));
  minutes = fillLeft(minutes, 2);
  timestamp -= minutes * 1000 * 60;
  let seconds = Math.floor(timestamp / 1000);
  seconds = fillLeft(seconds, 2);
  let result = `${hours}:${minutes}`;
  if (hasSs) {
    result += `:${seconds}`;
  }
  return result;
}