"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = require("express");
const customer_controller_1 = require("./customer.controller");
const router = (0, express_1.Router)();
router.route("/").post(customer_controller_1.createCustomer).get(customer_controller_1.getAllCustomer);
router.route("/:id").get(customer_controller_1.getSingleCustomer).put(customer_controller_1.updateCustomer).delete(customer_controller_1.deleteCustomer);
exports.CustomerRoutes = router;
