function monthlySavings(arr, num) {
  let saving = 0;
  let totolIncome = 0;
  for (let i = 0; i < arr.length; i++) {
    let netIncome = 0;
    let tax = 0;
    if (arr[i] > 3000) {
      tax = (arr[i] * 20) / 100;
      netIncome = arr[i] - tax;
    } else {
      netIncome = arr[i];
    }
    totolIncome += netIncome;
}
    saving = totolIncome-num;

  if (saving > 0) {
    return saving;
  } else if (saving == 0) {
    return 0;
  } else {
    console.log("Earn more");
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
