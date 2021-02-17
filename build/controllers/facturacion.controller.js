"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFactCustomerById = exports.deleteFactById = exports.updateFactById = exports.getFactById = exports.getFacts = exports.createFact = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var createFact = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, fecha, horaInicio, horaFinal, logo, skin, tema, texto, newTask, taskSaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, fecha = _req$body.fecha, horaInicio = _req$body.horaInicio, horaFinal = _req$body.horaFinal, logo = _req$body.logo, skin = _req$body.skin, tema = _req$body.tema, texto = _req$body.texto;
            newTask = new _Task["default"]({
              fecha: fecha,
              horaInicio: horaInicio,
              horaFinal: horaFinal,
              logo: logo,
              skin: skin,
              tema: tema,
              texto: texto
            });
            _context.next = 4;
            return newTask.save();

          case 4:
            taskSaved = _context.sent;
            res.status(201).json(taskSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createFact(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createFact = createFact;

var getFacts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Task["default"].find();

          case 2:
            tasks = _context2.sent;
            res.status(200).json(tasks);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFacts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getFacts = getFacts;

var getFactById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Task["default"].findById(req.params.taskId);

          case 2:
            task = _context3.sent;
            res.status(200).json(task);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getFactById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getFactById = getFactById;

var updateFactById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedTask;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Task["default"].findByIdAndUpdate(req.params.taskId, req.body, {
              "new": true
            });

          case 2:
            updatedTask = _context4.sent;
            res.status(200).json(updatedTask);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateFactById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateFactById = updateFactById;

var deleteFactById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var taskId;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            taskId = req.params.taskId;
            _context5.next = 3;
            return _Task["default"].findByIdAndDelete(taskId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteFactById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteFactById = deleteFactById;

var getFactCustomerById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Task["default"].findById(req.params.taskId);

          case 2:
            task = _context6.sent;
            res.status(200).json(task);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getFactCustomerById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getFactCustomerById = getFactCustomerById;