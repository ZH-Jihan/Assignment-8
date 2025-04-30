import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiResponse from "../../utils/ApiResponse";
import asyncHandler from "../../utils/asyncHandler";
import { CustomerServices } from "./customer.service";

const createCustomer = asyncHandler(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await CustomerServices.createCustomer(payload);
  ApiResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomer = asyncHandler(async (req: Request, res: Response) => {
  const result = await CustomerServices.getAllCustomer();
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getSingleCustomer = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerServices.getSingleCustomer(id);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customer fetched successfully",
    data: result,
  });
});

const updateCustomer = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await CustomerServices.updateSingleCustomer(id, payload);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customer Update successfully",
    data: result,
  });
});

const deleteCustomer = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerServices.deleteCustomer(id);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customers delete successfully",
  });
});

export { createCustomer, getAllCustomer, getSingleCustomer ,updateCustomer, deleteCustomer };
