"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServices = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
// Create
const createBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: { customerId: payload.customerId },
    });
    const newBike = prisma_1.default.bike.create({
        data: payload,
    });
    return newBike;
});
// Find ALl
const getAllBike = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findMany();
    return result;
});
// Find Single
const getSingleBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findUniqueOrThrow({
        where: { bikeId: id },
    });
    return result;
});
// Update
const updateSingleBike = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existBike = yield prisma_1.default.bike.findUniqueOrThrow({
        where: { bikeId: id },
    });
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: { customerId: existBike.customerId },
    });
    const result = yield prisma_1.default.bike.update({
        where: { bikeId: id },
        data: payload,
    });
    return result;
});
// Delete Single
const deleteBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.delete({
        where: { bikeId: id },
    });
    return result;
});
exports.BikeServices = {
    createBike,
    getAllBike,
    getSingleBike,
    updateSingleBike,
    deleteBike,
};
