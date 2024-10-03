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

submitBtn.addEventListener("click", () => {
  const day = Number(dayInput.value);
  const month = Number(monthInput.value) - 1;
  const year = Number(yearInput.value);
  const date = new Date(year, month, day);
  const dateDay = date.getDay();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();
  let error = true;

  if (dayInput.validity.valueMissing) {
    dayError.innerHTML = requiredError;
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

  if (monthInput.validity.valueMissing) {
    monthError.innerHTML = requiredError;
    error = true;
  } else if (month > 12) {
    monthError.innerHTML = validMonthError;
    error = true;
  } else {
    monthError.innerHTML = "";
    error = error ? error : false;
  }

  if (yearInput.validity.valueMissing) {
    yearError.innerHTML = requiredError;
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

    daySpan.innerHTML = days.startsWith("-") ? days.replace("-", "") : days;
    monthSpan.innerHTML = months.startsWith("-")
      ? months.replace("-", "")
      : months;
    yearSpan.innerHTML = years.startsWith("-") ? years.replace("-", "") : years;
  }
});
