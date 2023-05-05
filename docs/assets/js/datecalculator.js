function calculateDate(year, month, day) {
  let dayOut = new Date(year, month, day).getDay()
  return dayOut
}

function dayofweek(d, m, y) {
  let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  y -= (m < 3) ? 1 : 0;
  return Math.round((y + y / 4 - y / 100 + y / 400 + t[m - 1] + d) % 7);
}

function month2Number(monthString) {
  switch (monthString) {
    case "January": return 1;
    case "February": return 2;
    case "March": return 3;
    case "April": return 4;
    case "May": return 5;
    case "June": return 6;
    case "July": return 7;
    case "August": return 8;
    case "September": return 9;
    case "October": return 10;
    case "November": return 11;
    case "December": return 12;
    default: return NaN;
  }
}

function day2String(dayNum) {
  switch (dayNum) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return NaN;
  }
}

function workingOrNot(day) {
  switch (day) {
    case "Sunday":
    case "Saturday":
      return "non-working";
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "working";
    default: "";
  }
}

const computeDay = () => {
  const day = parseInt(document.getElementById("day").value);
  const month = month2Number(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // const computedDay = day2String(dayofweek(day, month, year));
  const computedDay = day2String(calculateDate(year, month - 1, day))
  const typeOfDay = workingOrNot(computedDay);

  document.getElementById("result").innerHTML = `${computedDay}, This is a ${typeOfDay} day!`;
}


