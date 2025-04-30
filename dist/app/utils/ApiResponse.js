"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiResponse = (res, data) => {
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        success: data.success || true,
        message: data.message,
        data: data.data,
    });
};
exports.default = ApiResponse;
