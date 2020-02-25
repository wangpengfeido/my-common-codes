/**
 * 获取范围内天数日期
 */
export function getRangeDay(startDate, endDate) {
  let start = startDate.getTime();
  const end = endDate.getTime();
  const result = [];
  while (start <= end) {
    result.push(new Date(start));
    start += 1000 * 3600 * 24;
  }
  return result;
}

