import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomer,
} from "./customer.controller";

const router = Router();

router.route("/").post(createCustomer).get(getAllCustomer);

router.route("/:id").get(getSingleCustomer).put(updateCustomer).delete(deleteCustomer);

export const CustomerRoutes = router;
