function getRoll(numDice) {
  return Array.from({ length: numDice }, () => genrateNumbers());
}

function genrateNumbers() {
  return Math.floor(Math.random() * 6) + 1;
}

function sum(num) {
  return num.reduce((prev, cur) => prev + cur, 0);
}

function isEqual(dice) {
  return dice.every((el) => el === dice[0]);
}

function lessThan4(dice) {
  return sum(dice) < 4;
}

export { getRoll };
export { isEqual };
export { lessThan4 };
