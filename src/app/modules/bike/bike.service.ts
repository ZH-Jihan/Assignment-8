import prisma from "../../utils/prisma";

// Create
const createBike = async (payload: any) => {
  await prisma.customer.findUniqueOrThrow({
    where: { customerId: payload.customerId },
  });
  const newBike = prisma.bike.create({
    data: payload,
  });
  return newBike;
};

// Find ALl
const getAllBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// Find Single
const getSingleBike = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: { bikeId: id },
  });
  return result;
};

// Update
const updateSingleBike = async (id: string, payload: any) => {
  const existBike = await prisma.bike.findUniqueOrThrow({
    where: { bikeId: id },
  });
  await prisma.customer.findUniqueOrThrow({
    where: { customerId: existBike.customerId },
  });
  const result = await prisma.bike.update({
    where: { bikeId: id },
    data: payload,
  });
  return result;
};

// Delete Single
const deleteBike = async (id: string) => {
  const result = await prisma.bike.delete({
    where: { bikeId: id },
  });
  return result;
};

export const BikeServices = {
  createBike,
  getAllBike,
  getSingleBike,
  updateSingleBike,
  deleteBike,
};
