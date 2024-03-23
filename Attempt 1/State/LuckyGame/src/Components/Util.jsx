function getRoll(numDice) {
  return Array.from({ length: numDice }, () => genrateNumbers());
}

function genrateNumbers() {
  return Math.floor(Math.random() * 6) + 1;
}

function sum(num) {
  return num.reduce((prev, cur) => prev + cur, 0);
}

export { getRoll, sum };
