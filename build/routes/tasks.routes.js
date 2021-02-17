"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var tasksCtrl = _interopRequireWildcard(require("../controllers/tasks.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isCustomer], tasksCtrl.createTask);
router.get('/', _middlewares.authJwt.verifyToken, tasksCtrl.getTasks);
router.get('/:taskId', _middlewares.authJwt.verifyToken, tasksCtrl.getTaskById);
router.put('/:taskId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isCustomer], tasksCtrl.updateTaskById);
router["delete"]('/:taskId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isCustomer], tasksCtrl.deleteTaskById);
var _default = router;
exports["default"] = _default;