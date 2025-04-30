"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const router = (0, express_1.Router)();
router.route("/").post(bike_controller_1.createBike).get(bike_controller_1.getAllBike);
router.route("/:id").get(bike_controller_1.getSingleBike).put(bike_controller_1.updateBike).delete(bike_controller_1.deleteBike);
exports.BikeRoutes = router;
