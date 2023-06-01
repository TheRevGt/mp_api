"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("./config"));
var _cites = _interopRequireDefault(require("./routes/cites.routes"));
var app = (0, _express["default"])();
//midel
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_cites["default"]);
app.set('port', _config["default"].port);
var _default = app;
exports["default"] = _default;