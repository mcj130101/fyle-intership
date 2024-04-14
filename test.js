
function calculateTax(grossIncome, sideIncome, incomeDeductable, ageGroup) {

  const taxableIncome = grossIncome + sideIncome - incomeDeductable;
    if(grossIncome < 0 || sideIncome < 0 || incomeDeductable < 0) {
        throw new Error();
    }
  if (taxableIncome <= 800000) {
    
    return 0; 
  }

  const taxableIncomeAboveThreshhold = taxableIncome - 800000;

  let taxRate;

  if (ageGroup === "less") {
    taxRate = 0.3;
  } else if (ageGroup === "mid") {
    taxRate = 0.4;
  } else if (ageGroup === "greater") {
    taxRate = 0.1;
  }

  const tax = taxableIncomeAboveThreshhold * taxRate;

  const incomeAfterTax = grossIncome + sideIncome - tax;

  return tax;
}

describe("Tax Calculator Tests", () => {
  test("should return 0 tax for income under 8 Lakhs", () => {
    const age = "less";
    const income = 700000; // Lakhs
    const deductions = 0;
    const extraIncome = 0;

    const taxAmount = calculateTax(income, extraIncome, deductions, age);

    expect(taxAmount).toBe(0);
  });

  test("should calculate tax correctly for income above 8 Lakhs (age < 40)", () => {
    const age = "less";
    const income = 1000000; // Lakhs
    const deductions = 100000;
    const extraIncome = 0;

    const taxableIncome = income + extraIncome - deductions;
    const expectedTax = (taxableIncome - 800000) * 0.3; // 30% tax rate

    const taxAmount = calculateTax(income, extraIncome, deductions, age);

    expect(taxAmount).toBe(expectedTax); 
  });

  test("should calculate tax correctly for income above 8 Lakhs (40 <= age < 60)", () => {
    const age = "mid";
    const income = 1500000; // Lakhs
    const deductions = 200000;
    const extraIncome = 100000;

    const taxableIncome = income + extraIncome - deductions;
    const expectedTax = (taxableIncome - 800000) * 0.4; // 40% tax rate

    const taxAmount = calculateTax(income, extraIncome, deductions, age);

    expect(taxAmount).toBe(expectedTax); 
  });

  test("should calculate tax correctly for income above 8 Lakhs (age >= 60)", () => {
    const age = "greater";
    const income = 2000000; // Lakhs
    const deductions = 300000;
    const extraIncome = 200000;

    const taxableIncome = income + extraIncome - deductions;
    const expectedTax = (taxableIncome - 800000) * 0.1; // 10% tax rate

    const taxAmount = calculateTax(income, extraIncome, deductions, age);

    expect(taxAmount).toBe(expectedTax); 
  });

  test("should handle invalid input (negative income)", () => {
    const age = "less";
    const income = -5; // Lakhs (invalid)
    const deductions = 0;
    const extraIncome = 0;

    expect(() =>
      calculateTax(income, extraIncome, deductions, age)
    ).toThrowError();
  });
});
