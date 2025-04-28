import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";

const globalErrorHandelar: ErrorRequestHandler = (error, req, res, next) => {
  //setting default values
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  //ultimate return
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error,
  });
};

export default globalErrorHandelar;
