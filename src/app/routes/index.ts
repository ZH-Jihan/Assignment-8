import { Router } from "express";
import { CustomerRoutes } from "../modules/customer/customer.routes";
import { BikeRoutes } from "../modules/bike/bike.route";

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
];

routerModules.forEach((route) => router.use(route.path, route.route));

export default router;
