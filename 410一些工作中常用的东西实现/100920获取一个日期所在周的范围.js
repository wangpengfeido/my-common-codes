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
 * 获取一个日期所在周的范围
 */
export function getWeekRangeOfDate(date) {
  let currentWeek = date.getDay();
  if (currentWeek === 0) {
    currentWeek = 7;
  }
  const startDate = new Date(date);
  startDate.setDate(startDate.getDate() - (currentWeek - 1));
  setStartDay(startDate);
  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + (7 - currentWeek));
  setEndDay(endDate);
  return { startDate, endDate };
}
