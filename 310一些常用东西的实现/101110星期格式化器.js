/**
 * 将日期格式化为星期x
 */
export function dateWeekFilter(
  value,
  template = { 1: '星期一', 2: '星期二', 3: '星期三', 4: '星期四', 5: '星期五', 6: '星期六', 0: '星期日' }
) {
  const date = new Date(value);
  return template[date.getDay()];
}
