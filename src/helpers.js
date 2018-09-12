export function getPercentage(amount, percentage) {
  const result = (amount / 100) * percentage;
  return result.toFixed(2);
}
export function getUserPercentage(income, value) {
  return (value / income) * 100;
}

export function getPercentageUsed(income, expenses) {
  let inc = parseInt(income, 10);
  let exp = parseInt(expenses, 10);
  if (inc < 0) {
    return 0;
  }
  return (exp / inc) * 10;
}
