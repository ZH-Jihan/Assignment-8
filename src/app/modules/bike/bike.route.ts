import { Router } from "express";
import {
  createBike,
  deleteBike,
  getAllBike,
  getSingleBike,
  updateBike,
} from "./bike.controller";

const router = Router();

router.route("/").post(createBike).get(getAllBike);

router.route("/:id").get(getSingleBike).put(updateBike).delete(deleteBike);

export const BikeRoutes = router;
