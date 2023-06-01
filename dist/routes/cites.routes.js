"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _citesController = require("../controllers/citesController");
var router = (0, _express.Router)();
router.get('/oficinas', _citesController.getCites);
router.get('/oficinas/:id', _citesController.getCitesById);
router.post('/oficinas', _citesController.createCites);
router["delete"]('/oficinas/:id', _citesController.delCitesById);
router.put('/oficinas/:id', _citesController.updateCitesById);
var _default = router;
exports["default"] = _default;