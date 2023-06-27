const { getSum } = require("./calc");

test("adds 2 + 4 equal 6", () => {
  expect(getSum(2, 4)).toBe(6);
});

