import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: "Shawon",
      avatarUrl: "#",
      email: "test@gmail.com",
    },
  })

  return user;
}