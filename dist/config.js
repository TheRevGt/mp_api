"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = {
  port: process.env.PORT,
  userDb: process.env.DB_USER || "",
  passwordDb: process.env.DB_PASSWORD || "",
  serverDb: process.env.DB_SERVER || "",
  databaseDb: process.env.DB_DATABASE || ""
};
exports["default"] = _default;