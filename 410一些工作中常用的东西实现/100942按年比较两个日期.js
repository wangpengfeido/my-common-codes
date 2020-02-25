/**
 * 按年比较两个日期
 */
export function compareYear(dateOne, dateTwo) {
  const yearOne = dateOne.getFullYear();
  const yearTwo = dateTwo.getFullYear();
  return yearOne - yearTwo;
}