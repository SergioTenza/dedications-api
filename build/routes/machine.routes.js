"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var machineCtrl = _interopRequireWildcard(require("../controllers/machine.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], machineCtrl.createMachine);
router.get('/', _middlewares.authJwt.verifyToken, machineCtrl.getMachines);
router.get('/:machineId', _middlewares.authJwt.verifyToken, machineCtrl.getMachineById);
router.put('/:machineId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], machineCtrl.updateMachineById);
router["delete"]('/:machineId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], machineCtrl.deleteMachineById);
var _default = router;
exports["default"] = _default;