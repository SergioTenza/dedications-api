"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var machineCtrl = _interopRequireWildcard(require("../controllers/tasks.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], machineCtrl.createTask);
router.get('/', machineCtrl.getTasks);
router.get('/:taskId', machineCtrl.getTaskById);
router.put('/:taskId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], machineCtrl.updateTaskById);
router["delete"]('/:taskId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], machineCtrl.deleteTaskById);
var _default = router;
exports["default"] = _default;