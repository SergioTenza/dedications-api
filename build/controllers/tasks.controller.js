"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTaskById = exports.updateTaskById = exports.getTaskById = exports.getTasks = exports.createTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var createTask = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, inicio, duracion, logo, skin, tema, texto, urls, machine, user, mesas, estado, ejecucion, newTask, taskSaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, inicio = _req$body.inicio, duracion = _req$body.duracion, logo = _req$body.logo, skin = _req$body.skin, tema = _req$body.tema, texto = _req$body.texto, urls = _req$body.urls, machine = _req$body.machine, user = _req$body.user, mesas = _req$body.mesas, estado = _req$body.estado, ejecucion = _req$body.ejecucion;
            newTask = new _Task["default"]({
              inicio: inicio,
              duracion: duracion,
              logo: logo,
              skin: skin,
              tema: tema,
              texto: texto,
              urls: urls,
              machine: machine,
              user: user,
              mesas: mesas,
              estado: estado,
              ejecucion: ejecucion
            });
            _context.prev = 2;
            _context.next = 5;
            return newTask.save();

          case 5:
            taskSaved = _context.sent;
            res.status(201).json(taskSaved);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            res.status(422).json(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));

  return function createTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var getTasks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Task["default"].find();

          case 3:
            tasks = _context2.sent;
            res.status(200).json(tasks);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(404).json(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getTaskById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _task;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Task["default"].findById(req.params.taskId);

          case 3:
            _task = _context3.sent;
            res.status(200).json(_task);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(404).json(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getTaskById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getTaskById = getTaskById;

var updateTaskById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedAt, _task2, date1, date2, updatedTask;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(req.body);
            updatedAt = req.body.updatedAt;
            _context4.prev = 2;
            _context4.next = 5;
            return _Task["default"].findById(req.params.taskId);

          case 5:
            _task2 = _context4.sent;
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            res.status(404).json(_context4.t0);

          case 11:
            date1 = new Date(updatedAt);
            date2 = new Date(task.updatedAt);

            if (!(date1.getTime() > date2.getTime())) {
              _context4.next = 26;
              break;
            }

            _context4.prev = 14;
            _context4.next = 17;
            return _Task["default"].findByIdAndUpdate(req.params.taskId, req.body, {
              "new": true
            });

          case 17:
            updatedTask = _context4.sent;
            res.status(200).json(updatedTask);
            _context4.next = 24;
            break;

          case 21:
            _context4.prev = 21;
            _context4.t1 = _context4["catch"](14);
            res.status(304).json(_context4.t1);

          case 24:
            _context4.next = 27;
            break;

          case 26:
            res.status(304).json(task);

          case 27:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8], [14, 21]]);
  }));

  return function updateTaskById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateTaskById = updateTaskById;

var deleteTaskById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var taskId;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            taskId = req.params.taskId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Task["default"].findByIdAndDelete(taskId);

          case 4:
            res.status(204).json();
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            res.status(404).json(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));

  return function deleteTaskById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTaskById = deleteTaskById;