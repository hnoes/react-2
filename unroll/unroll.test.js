const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 2x2 square correctly", function () {
    const square = [
      [1, 2],
      [4, 3]
    ];
    const unrolled = unroll(square);
    expect(unrolled).toEqual([1, 2, 3, 4]);
  });

  it("unrolls a 3x3 square correctly", function () {
    const square = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    const unrolled = unroll(square);
    expect(unrolled).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("unrolls a 4x4 square correctly", function () {
    const square = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 10, 15, 6],
      [8, 9, 7, 16]
    ];
    const unrolled = unroll(square);
    expect(unrolled).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  // Add more test cases as needed
});
