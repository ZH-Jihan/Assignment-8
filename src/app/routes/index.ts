import { Router } from "express";
import { BikeRoutes } from "../modules/bike/bike.route";
import { CustomerRoutes } from "../modules/customer/customer.routes";
import { ServiceRoutes } from "../modules/services/services.route";

const router = Router();

const routerModules = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
  {
    path: "/bikes",
    route: BikeRoutes,
  },
  {
    path: "/services",
    route: ServiceRoutes,
  },
];

routerModules.forEach((route) => router.use(route.path, route.route));

export default router;
