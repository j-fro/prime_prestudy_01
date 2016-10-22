var logger = function () {
  console.log("Hey this works!");
}

var add = function (num) {
  return num + 2;
};

var multiply = function (num) {
  return num * 3;
}

var subtract = function (num) {
  return num - 4;
}

logger();
console.log(add(multiply(subtract(7))));
