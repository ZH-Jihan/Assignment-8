import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandelar from "./app/middlewares/globalErrorHandelar";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Biker!");
});

// Import all routes here
app.use("/api", router);

// Global error handler
app.use(globalErrorHandelar);

// Not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  notFound(req, res, next);
});

export default app;
