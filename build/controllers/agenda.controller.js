"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgendaById = exports.getAgenda = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Agenda = _interopRequireDefault(require("../models/Agenda"));

var _Task = _interopRequireDefault(require("../models/Task"));

var getAgenda = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var agenda;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Task["default"].find();

          case 3:
            agenda = _context.sent;
            res.status(200).json(agenda);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);
            return _context.abrupt("return");

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAgenda(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAgenda = getAgenda;

var getAgendaById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var fullAgenda;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Task["default"].find();

          case 3:
            fullAgenda = _context2.sent;
            fullAgenda.filter(function (item) {
              item.Machine === req.params.machineId;
            });
            res.status(200).json(fullAgenda);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);
            return _context2.abrupt("return");

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getAgendaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAgendaById = getAgendaById;