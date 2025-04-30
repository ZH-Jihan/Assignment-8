import { Router } from "express";
import {
  createService,
  deleteService,
  getAllServices,
  getSingleService,
  updateService,
} from "./services.controller";

const router = Router();

router.route("/").get(getAllServices).post(createService);

router
  .route("/:id")
  .get(getSingleService)
  .put(updateService)
  .delete(deleteService);

export const ServiceRoutes = router;
