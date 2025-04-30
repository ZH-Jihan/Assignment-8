"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandelar = (error, req, res, next) => {
    var _a, _b;
    // console.log(error.code === "P2025" ? "yes" : "no");
    console.log(error);
    //setting default values
    let status = 500;
    let message = "Something went wrong!";
    let errorSources = [
        {
            path: "",
            message: "Something went wrong",
        },
    ];
    // handling not found error
    if (error.code === "P2025") {
        status = 404;
        message = "Data not found!";
        errorSources = [
            {
                path: (_a = error === null || error === void 0 ? void 0 : error.meta) === null || _a === void 0 ? void 0 : _a.modelName,
                message: (_b = error === null || error === void 0 ? void 0 : error.meta) === null || _b === void 0 ? void 0 : _b.cause,
            },
        ];
    }
    //ultimate return
    res.status(status).json({
        success: false,
        status,
        message,
        errorSources,
        error
    });
};
exports.default = globalErrorHandelar;
