/**
 * 将一个日期设置为该天的结束
 */
export function setEndDay(date) {
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  date.setMilliseconds(999);
  return date;
}
