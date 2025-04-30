"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandelar_1 = __importDefault(require("./app/middlewares/globalErrorHandelar"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello Biker!");
});
// Import all routes here
app.use("/api", routes_1.default);
// Global error handler
app.use(globalErrorHandelar_1.default);
// Not found handler
app.use((req, res, next) => {
    (0, notFound_1.default)(req, res, next);
});
exports.default = app;
