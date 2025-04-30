import prisma from "../../utils/prisma";

// Create
const createService = async (payload: any) => {
  const bikeExist = await prisma.bike.findUniqueOrThrow({
    where: { bikeId: payload.bikeId },
  });
  await prisma.customer.findUniqueOrThrow({
    where: { customerId: bikeExist.customerId },
  });
  const serviceCreate = prisma.serviceRecord.create({
    data: payload,
  });
  return serviceCreate;
};

// Find ALl
const getAllServices = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

// Find Single
const getSingleService = async (id: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: { serviceId: id },
  });
  return result;
};

// Update
const updateSingleBike = async (id: string, payload: any) => {
  const exisService = await prisma.serviceRecord.findUniqueOrThrow({
    where: { serviceId: id },
  });
  const existBike = await prisma.bike.findUniqueOrThrow({
    where: { bikeId: exisService.bikeId },
  });
  await prisma.customer.findUniqueOrThrow({
    where: { customerId: existBike.customerId },
  });
  if (payload.completionDate) {
    const result = await prisma.serviceRecord.update({
      where: { serviceId: id },
      data: {
        ...payload,
        status: "done",
      },
    });
    return result;
  }
};

// Pending service ovsarvation
const getPendingServices = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const services = await prisma.serviceRecord.findMany({
    where: {
      status: { in: ["pending", "in_progress"] },
      serviceDate: { lt: sevenDaysAgo },
    },
  });
  return services;
};

// Delete Single
const deleteService = async (id: string) => {
  const result = await prisma.serviceRecord.delete({
    where: { serviceId: id },
  });
  return result;
};

export const ServiceServices = {
  createService,
  deleteService,
  getAllServices,
  getSingleService,
  updateSingleBike,
  getPendingServices,
};
