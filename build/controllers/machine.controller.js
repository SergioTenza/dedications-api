"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMachineById = exports.updateMachineById = exports.getMachineById = exports.getMachines = exports.createMachine = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Machine = _interopRequireDefault(require("../models/Machine"));

var createMachine = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, location, user, tasks, status, privateid, newMachine, machineSaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, location = _req$body.location, user = _req$body.user, tasks = _req$body.tasks, status = _req$body.status, privateid = _req$body.privateid;
            newMachine = new _Machine["default"]({
              name: name,
              location: location,
              user: user,
              tasks: tasks,
              status: status,
              privateid: privateid
            });
            _context.next = 4;
            return newMachine.save();

          case 4:
            machineSaved = _context.sent;
            res.status(201).json(machineSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createMachine(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMachine = createMachine;

var getMachines = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var machines;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Machine["default"].find();

          case 2:
            machines = _context2.sent;
            res.status(200).json(machines);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMachines(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMachines = getMachines;

var getMachineById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var machine;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Machine["default"].findById(req.params.machineId);

          case 2:
            machine = _context3.sent;
            res.status(200).json(machine);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMachineById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMachineById = getMachineById;

var updateMachineById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedMachine;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Machine["default"].findByIdAndUpdate(req.params.machineId, req.body, {
              "new": true
            });

          case 2:
            updatedMachine = _context4.sent;
            res.status(200).json(updatedMachine);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateMachineById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateMachineById = updateMachineById;

var deleteMachineById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var machineId;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            machineId = req.params.machineId;
            _context5.next = 3;
            return _Machine["default"].findByIdAndDelete(machineId);

          case 3:
            res.status(204).json({
              message: 'maquina borrada correctamente.'
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteMachineById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteMachineById = deleteMachineById;