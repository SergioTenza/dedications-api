"use strict";

var dotenv = require('dotenv');

var result = dotenv.config();

if (result.error) {
  throw result.error;
}

var envs = result.parsed;
console.log(envs);
module.exports = envs;