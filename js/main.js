const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const submitBtn = document.querySelector(".icon-arrow");
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const daySpan = document.querySelector(".days");
const monthSpan = document.querySelector(".months");
const yearSpan = document.querySelector(".years");
const now = new Date();
const validDayError = "Must be a valid day";
const validDateError = "Must be a valid date";
const validMonthError = "Must be a valid month";
const validYearError = "Must be in the past";
const requiredError = "This field is required";
const twoCharError = 'Must be 2 characters';
const fourCharError = 'Must be 4 characters';

submitBtn.addEventListener("click", () => {
  const day = Number(dayInput.value);
  const month = Number(monthInput.value) - 1;
  const year = Number(yearInput.value);
  const date = new Date(year, month, day);
  const dateDay = date.getDay();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();
  let error = true;



  // DAY INPUT VALIDATION
  if (dayInput.validity.valueMissing) {
    dayError.innerHTML = requiredError;
    error = true;
  } else if (dayInput.validity.tooShort) {
    dayError.innerHTML = twoCharError;
    error = true;
  } else if (
    day <= 31 &&
    day !== dateDay &&
    dateMonth !== month &&
    dateYear === year
  ) {
    dayError.innerHTML = validDateError;
    error = true;
  } else if (dateDay !== day && dateMonth !== month) {
    dayError.innerHTML = validDayError;
    error = true;
  } else {
    dayError.innerHTML = "";
    error = false;
  }


  // MONTH INPUT VALIDATION

  if (monthInput.validity.valueMissing) {
    monthError.innerHTML = requiredError;
    error = true;
  } else if (monthInput.validity.tooShort) {
    monthError.innerHTML = twoCharError;
    error = true;
  } else if (month > 12) {
    monthError.innerHTML = validMonthError;
    error = true;
  } else {
    monthError.innerHTML = "";
    error = error ? error : false;
  }


  // YEAR INPUT VALIDATION

  if (yearInput.validity.valueMissing) {
    yearError.innerHTML = requiredError;
    error = true;
  } else if (yearInput.validity.tooShort) {
    yearError.innerHTML = fourCharError;
    error = true;
  } else if (dateYear > now.getFullYear()) {
    yearError.innerHTML = validYearError;
    error = true;
  } else {
    yearError.innerHTML = "";
    error = error ? error : false;
  }

  if (!error) {
    const years = String(now.getFullYear() - date.getFullYear());
    const months = String(now.getMonth() - date.getMonth());
    const days = String(now.getDate() - date.getDate());


    // Remove preceeding "-" incase of a negative
    const actualYears = years.startsWith("-") ? years.replace("-", "") : years;;
    const actualMonths = months.startsWith("-")
    ? months.replace("-", "")
    : months;;
    const actualDays = days.startsWith("-") ? days.replace("-", "") : days;

    if (actualDays === '1') {
      daySpan.innerHTML = actualDays;
      daySpan.nextElementSibling.innerHTML = 'Day'
    } else {
      daySpan.innerHTML = actualDays;
      daySpan.nextElementSibling.innerHTML = 'Days'
    }

    if (actualMonths === '1') {
      monthSpan.innerHTML = actualMonths;
      monthSpan.nextElementSibling.innerHTML = 'Month'
    } else {
      monthSpan.innerHTML = actualMonths;
      monthSpan.nextElementSibling.innerHTML = 'Months'
    }

    if (actualYears === '1') {
      yearSpan.innerHTML = actualYears;
      yearSpan.nextElementSibling.innerHTML = 'Year'
    } else {
      yearSpan.innerHTML = actualYears;
      yearSpan.nextElementSibling.innerHTML = 'Years'
    }
  }
});
