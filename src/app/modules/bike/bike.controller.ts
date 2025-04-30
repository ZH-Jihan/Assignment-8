import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiResponse from "../../utils/ApiResponse";
import asyncHandler from "../../utils/asyncHandler";
import { BikeServices } from "./bike.service";

const createBike = asyncHandler(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await BikeServices.createBike(payload);
  ApiResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Bike created successfully",
    data: result,
  });
});

const getAllBike = asyncHandler(async (req: Request, res: Response) => {
  const result = await BikeServices.getAllBike();
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getSingleBike = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BikeServices.getSingleBike(id);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Bike fetched successfully",
    data: result,
  });
});

const updateBike = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BikeServices.updateSingleBike(id, payload);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Bike Update successfully",
    data: result,
  });
});

const deleteBike = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BikeServices.deleteBike(id);
  ApiResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Bike delete successfully",
  });
});

export { createBike, deleteBike, getAllBike, getSingleBike, updateBike };
