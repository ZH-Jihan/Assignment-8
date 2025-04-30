"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const services_controller_1 = require("./services.controller");
const router = (0, express_1.Router)();
router.route("/").get(services_controller_1.getAllServices).post(services_controller_1.createService);
router.route("/status").get(services_controller_1.getPendingServices);
router
    .route("/:id")
    .get(services_controller_1.getSingleService)
    .put(services_controller_1.updateService)
    .delete(services_controller_1.deleteService);
exports.ServiceRoutes = router;
