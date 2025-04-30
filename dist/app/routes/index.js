"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bike_route_1 = require("../modules/bike/bike.route");
const customer_routes_1 = require("../modules/customer/customer.routes");
const services_route_1 = require("../modules/services/services.route");
const router = (0, express_1.Router)();
const routerModules = [
    {
        path: "/customers",
        route: customer_routes_1.CustomerRoutes,
    },
    {
        path: "/bikes",
        route: bike_route_1.BikeRoutes,
    },
    {
        path: "/services",
        route: services_route_1.ServiceRoutes,
    },
];
routerModules.forEach((route) => router.use(route.path, route.route));
exports.default = router;
