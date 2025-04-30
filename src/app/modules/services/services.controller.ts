import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiResponse from "../../utils/ApiResponse";
import asyncHandler from "../../utils/asyncHandler";
import { ServiceServices } from "./services.service";

const createService = asyncHandler(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await ServiceServices.createService(payload);
  ApiResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Service created successfully",
    data: result,
  });
});

const getAllServices = asyncHandler(async (req: Request, res: Response) => {
  const result = await ServiceServices.getAllServices();
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Services fetched successfully",
    data: result,
  });
});

const getSingleService = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceServices.getSingleService(id);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Service fetched successfully",
    data: result,
  });
});

const updateService = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await ServiceServices.updateSingleBike(id, payload);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Service Update successfully",
    data: result,
  });
});

const deleteService = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceServices.deleteService(id);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Service delete successfully",
  });
});

export {
  createService,
  deleteService,
  getAllServices,
  getSingleService,
  updateService,
};
