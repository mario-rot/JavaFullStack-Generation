function calculateDate(year, month, day) {
  return new Date(year, month, day)//.getDay()
}

console.log(calculateDate(2022, 5, 10).getDay())



// Javascript program to find day of a given date

function dayofweek(d, m, y) {
  let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  y -= (m < 3) ? 1 : 0;
  return (y + y / 4 - y / 100 + y / 400 + t[m - 1] + d) % 7;
}

// Driver Code

let day = Math.round(dayofweek(10, 6, 2022));
console.log(day)

    // document.write(Math.round(day));

