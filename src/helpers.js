export function getPercentage(amount, percentage) {
  const result = (amount / 100) * percentage;
  return result.toFixed(2);
}
export function getUserPercentage(income, value) {
  income = income.replace(/,/g, "");
  const result = (value / income) * 100;
  return result.toFixed(1);
}

export function getPercentageUsed(income, expenses) {
  income = income.replace(/,/g, "");
  let inc = parseInt(income, 10) || 0;
  let exp = parseInt(expenses, 10) || 0;
  if (inc < 0) {
    return 0;
  }
  let result = (exp / inc) * 100;
  return result.toFixed(2);
}
