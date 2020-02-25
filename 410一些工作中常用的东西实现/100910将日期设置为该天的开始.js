/**
 * 将一个日期设置为该天的开始
 */
export function setStartDay(date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}