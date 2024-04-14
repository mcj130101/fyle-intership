const grossIncomeInput = document.getElementById("grossIncome");
const sideIncomeInput = document.getElementById("sideIncome");
const ageGroupInput = document.getElementById("ageGroup");
const incomeDeductableInput = document.getElementById("inputDeductable");
const modalBtn = document.getElementById("modalBtn");
const taxDiv = document.getElementById("taxDiv");
const taxHolder = document.getElementById("taxHolder");

// const submitBtn = $("#submitBtn")
const submitBtn = document.getElementById("submitBtn");

function validation(e) {
  const input = e.target.id;
  const value = e.target.value;
  const info = document.getElementById(input).nextElementSibling;
  if (input.length <= 0 || isNaN(value) || value < 0) {
    info.style.display = "block";
    submitBtn.disabled = true;
  } else {
    info.style.display = "none";
    submitBtn.disabled = false;
  }
}

function calculateTax() {
  const grossIncome = +grossIncomeInput.value;
  const sideIncome = +sideIncomeInput.value;
  const ageGroup = ageGroupInput.value;
  const incomeDeductable = +incomeDeductableInput.value;

  const taxableIncome = grossIncome + sideIncome - incomeDeductable;

  if (taxableIncome <= 800000) {
    const taxResult = document.createElement("h3");
    taxResult.innerHTML = "No Tax Applicable.";
    taxResult.classList.add("text-center", "text-primary");
    taxDiv.innerHTML = "";
    taxDiv.appendChild(taxResult);
    modalBtn.click();
    return;
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

  taxHolder.innerHTML = incomeAfterTax;

  modalBtn.click();
}

grossIncomeInput.addEventListener("input", (e) => validation(e));
sideIncomeInput.addEventListener("input", (e) => validation(e));
incomeDeductableInput.addEventListener("input", (e) => validation(e));

submitBtn.addEventListener("click", calculateTax);
