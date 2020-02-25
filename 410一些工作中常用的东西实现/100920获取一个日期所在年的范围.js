/**
 * 将一个日期设置为该天的开始
 * 来自 ./100910
 */
export function setStartDay(date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

/**
 * 将一个日期设置为该天的结束
 * 来自 ./100911
 */
export function setEndDay(date) {
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  date.setMilliseconds(999);
  return date;
}

/**
 * 获取一个日期所在年的范围
 */
export function getYearRangeOfDate(date) {
  const startDate = new Date(date);
  startDate.setMonth(0);
  startDate.setDate(1);
  setStartDay(startDate);
  const endDate = new Date(date);
  endDate.setFullYear(endDate.getFullYear() + 1);
  endDate.setMonth(0);
  endDate.setDate(0);
  setEndDay(endDate);
  return { startDate, endDate };
}
