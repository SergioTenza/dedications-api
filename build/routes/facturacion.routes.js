"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var factCtrl = _interopRequireWildcard(require("../controllers/facturacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], factCtrl.createFact);
router.get('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], factCtrl.getFacts);
router.get('/:customerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], factCtrl.getFactById);
router.put('/:customerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], factCtrl.updateFactById);
router["delete"]('/:customerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], factCtrl.deleteFactById);
router.get('/customers/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isCustomer], factCtrl.getFactCustomerById);
var _default = router;
exports["default"] = _default;