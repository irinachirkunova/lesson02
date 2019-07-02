let money = 4500,
    income = "freelance",
    addExpenses = "Car, Gym, Travelling",
    deposit = true,
    mission = 30000,
    period = 12;

//typeof
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

//length
console.log(income.length);

//concat
console.log("Период" + " " + period + " " + "месяцев");
console.log("Цель заработать" + " " + mission + " " + "долларов");

//toLowerCase, split
let lowCase = addExpenses.toLowerCase();
let array = lowCase.split(", ");
console.log(array);

//budget
let budgetDay;
budgetDay = 4500 / 30;
console.log("Budget a day: " + budgetDay + " euros");