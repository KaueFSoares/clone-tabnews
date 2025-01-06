const calculadora = require("../models/calculadora.js");

test("1+1 = 2", () => {
  let result = calculadora.sum(1, 1);
  expect(result).toBe(2);
});

test("'banana' + 1 should be error", () => {
  let result = calculadora.sum("banana", 1);
  expect(result).toBe("error");
});

test("missing arguments", () => {
  let result = calculadora.sum();
  expect(result).toBe("error");
});
