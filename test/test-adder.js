const assert = require("assert");
const { add } = require("../src/adder");

describe("adder", function () {
  describe("add", function () {
    it("2 + 3", function () {
      assert.equal(add(2, 3), 5);
    });
  });
});
