let investment, rate, years;

do {
  investment = parseFloat(window.prompt("Enter investment amount as xxxxxx"));
} while (isNaN(investment));

do {
  rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
} while (isNaN(rate) || rate < 0 || rate > 6);

do {
  years = parseInt(window.prompt("Enter number of years"), 10);
} while (isNaN(years) || years < 1 || years > 30);