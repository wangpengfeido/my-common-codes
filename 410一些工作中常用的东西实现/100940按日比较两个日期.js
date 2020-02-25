/**
 * 按天比较两个日期
 */
export function compareDay(dateOne, dateTwo) {
  const dayOne = Math.floor(dateOne.getTime() / (1000 * 3600 * 24));
  const dayTwo = Math.floor(dateTwo.getTime() / (1000 * 3600 * 24));
  return dayOne - dayTwo;
}