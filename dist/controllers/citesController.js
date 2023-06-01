"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCitesById = exports.getCitesById = exports.getCites = exports.delCitesById = exports.createCites2 = exports.createCites = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getCites = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, cites;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.conectioDb)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.queries.getAllCities);
        case 6:
          cites = _context.sent;
          res.json(cites.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getCites(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getCites = getCites;
var createCites = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, cel, address, city, pool, transaction, citesRequest, citeIDRequest, resCiteID, citeID, infoRequest;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, cel = _req$body.cel, address = _req$body.address, city = _req$body.city;
          if (!(name == null || cel == null || address == null || city == null)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: "Es necesario llenar los campos"
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _database.conectioDb)();
        case 6:
          pool = _context2.sent;
          transaction = new _database.sql.Transaction(pool);
          _context2.next = 10;
          return transaction.begin();
        case 10:
          _context2.prev = 10;
          citesRequest = new _database.sql.Request(transaction);
          _context2.next = 14;
          return citesRequest.input('name', _database.sql.VarChar, name).input('status', _database.sql.Bit, 0).input('user_id', _database.sql.Int, 1).query(_database.queries.addNewCite);
        case 14:
          citeIDRequest = new _database.sql.Request(transaction);
          _context2.next = 17;
          return citeIDRequest.query("\n            SELECT SCOPE_IDENTITY() AS citeID");
        case 17:
          resCiteID = _context2.sent;
          console.log(resCiteID.recordset[0]);
          citeID = resCiteID.recordset[0].citeID;
          infoRequest = new _database.sql.Request(transaction);
          _context2.next = 23;
          return infoRequest.input('cite_id', _database.sql.Int, citeID).input('city', _database.sql.VarChar, city).input('cel', _database.sql.VarChar, cel).input('address', _database.sql.VarChar, address).input('status', _database.sql.Bit, 0).query(_database.queries.addNewInfo);
        case 23:
          _context2.next = 25;
          return transaction.commit();
        case 25:
          res.json('Datos registrados');
          _context2.next = 33;
          break;
        case 28:
          _context2.prev = 28;
          _context2.t0 = _context2["catch"](10);
          _context2.next = 32;
          return transaction.rollback();
        case 32:
          throw _context2.t0;
        case 33:
          _context2.next = 38;
          break;
        case 35:
          _context2.prev = 35;
          _context2.t1 = _context2["catch"](3);
          console.error('Error al insertar datos:', _context2.t1);
        case 38:
          _context2.prev = 38;
          _database.sql.close();
          return _context2.finish(38);
        case 41:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 35, 38, 41], [10, 28]]);
  }));
  return function createCites(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createCites = createCites;
var createCites2 = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, name, cel, address, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, name = _req$body2.name, cel = _req$body2.cel, address = _req$body2.address;
          if (!(name == null || cel == null || address == null)) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            msg: "Es necesario llenar los campos"
          }));
        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return (0, _database.conectioDb)();
        case 6:
          pool = _context3.sent;
          _context3.next = 9;
          return pool.request().input('name', _database.sql.VarChar, name).input('status', _database.sql.Bit, 0).input('user_id', _database.sql.Int, 1).query(_database.queries.addNewCite);
        case 9:
          res.json('New product');
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](3);
          res.status(500);
          res.send(_context3.t0.message);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 12]]);
  }));
  return function createCites2(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createCites2 = createCites2;
var getCitesById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, cites;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _database.conectioDb)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input('id', id).query(_database.queries.getCitesById);
        case 7:
          cites = _context4.sent;
          res.json(cites.recordset);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.status(500);
          res.send(_context4.t0.message);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function getCitesById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getCitesById = getCitesById;
var delCitesById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, cites;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return (0, _database.conectioDb)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input('id', id).query(_database.queries.deleteCitesById);
        case 7:
          cites = _context5.sent;
          res.send('Eliminado');
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function delCitesById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.delCitesById = delCitesById;
var updateCitesById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, name, status, cel, address, city, id, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body3 = req.body, name = _req$body3.name, status = _req$body3.status, cel = _req$body3.cel, address = _req$body3.address, city = _req$body3.city;
          id = req.params.id;
          if (!(name == null || cel == null || address == null)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: "Es necesario llenar los campos"
          }));
        case 4:
          _context6.prev = 4;
          _context6.next = 7;
          return (0, _database.conectioDb)();
        case 7:
          pool = _context6.sent;
          _context6.next = 10;
          return pool.request().input('name', _database.sql.VarChar, name).input('status', _database.sql.Bit, status).input('user_id', _database.sql.Int, 1).input('id', _database.sql.Int, id).query(_database.queries.updateCitesById);
        case 10:
          _context6.next = 12;
          return pool.request().input('cel', _database.sql.VarChar, cel).input('address', _database.sql.VarChar, address).input('city', _database.sql.VarChar, city).input('id', _database.sql.Int, id).query(_database.queries.updateCiteInfoById);
        case 12:
          res.json('actualizado');
          _context6.next = 19;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](4);
          res.status(500);
          res.send(_context6.t0.message);
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 15]]);
  }));
  return function updateCitesById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateCitesById = updateCitesById;