import prisma from "../../utils/prisma";

const createCustomer = async (payload: any) => {
  const result = await prisma.customer.create({ data: payload });
  return result;
};
const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};
const getSingleCustomer = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: { customerId: id },
  });
  return result;
};
const updateSingleCustomer = async (id: string, payload: any) => {
  const result = await prisma.customer.update({
    where: { customerId: id },
    data: payload,
  });
  return result;
};
const deleteCustomer = async (id: string) => {
  const result = await prisma.customer.delete({
    where: { customerId: id },
  });
  return result;
};

export const CustomerServices = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateSingleCustomer,
  deleteCustomer,
};
