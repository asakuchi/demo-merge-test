const assert = require("assert");
const { myDate } = require("../src/my-date");

describe("my-date", function () {
  describe("date", function () {
    it("Date is", function () {
      assert.equal(myDate('2023-06-01T09:30:00+09:00'), "Date is 2023-06-01T09:30:00+09:00");
    });
  });
});
