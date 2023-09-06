"use strict";

const moment = require("moment");

const myDate = (dateString) => {
  return `Date is ${moment(dateString).format()}`;
};

module.exports = { myDate };
