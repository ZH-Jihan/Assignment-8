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
exports.ServiceServices = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
// Create
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeExist = yield prisma_1.default.bike.findUniqueOrThrow({
        where: { bikeId: payload.bikeId },
    });
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: { customerId: bikeExist.customerId },
    });
    const serviceCreate = prisma_1.default.serviceRecord.create({
        data: payload,
    });
    return serviceCreate;
});
// Find ALl
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
// Find Single
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: { serviceId: id },
    });
    return result;
});
// Update
const updateSingleBike = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const exisService = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: { serviceId: id },
    });
    const existBike = yield prisma_1.default.bike.findUniqueOrThrow({
        where: { bikeId: exisService.bikeId },
    });
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: { customerId: existBike.customerId },
    });
    if (payload.completionDate) {
        const result = yield prisma_1.default.serviceRecord.update({
            where: { serviceId: id },
            data: Object.assign(Object.assign({}, payload), { status: "done" }),
        });
        return result;
    }
});
// Pending service ovsarvation
const getPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const services = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: { in: ["pending", "in_progress"] },
            serviceDate: { lt: sevenDaysAgo },
        },
    });
    return services;
});
// Delete Single
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.delete({
        where: { serviceId: id },
    });
    return result;
});
exports.ServiceServices = {
    createService,
    deleteService,
    getAllServices,
    getSingleService,
    updateSingleBike,
    getPendingServices,
};
