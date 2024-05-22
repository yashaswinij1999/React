function getRoll(noOfDie) {
  return Array.from({ length: noOfDie }, () => generateNum());
}

function generateNum() {
  return Math.floor(Math.random() * 6);
}

function isEqual(dice) {
  return dice.every((el) => el === dice[0]);
}

function greaterFour(dice) {
  return sum(dice) < 4;
}

function sum(num) {
  return num.reduce((total, el) => total + el);
}

export { getRoll };
export { isEqual };
export { greaterFour };
