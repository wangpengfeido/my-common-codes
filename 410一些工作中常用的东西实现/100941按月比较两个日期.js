/**
 * 按月比较两个日期
 */
export function compareMonth(dateOne, dateTwo) {
  const yearOne = dateOne.getFullYear();
  const yearTwo = dateTwo.getFullYear();
  const monthOne = dateOne.getMonth() + yearOne * 12;
  const monthTwo = dateTwo.getMonth() + yearTwo * 12;
  return monthOne - monthTwo;
}