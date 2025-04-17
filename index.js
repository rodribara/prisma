import pkg from "./prisma/generated/prisma/client/client.js";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  /*   const newUser = await prisma.user.create({
    data: { name: "Marco", email: "marco@r.com" },
  });

  return console.log(newUser);
  /*   
  const getUsers = await prisma.user.findMany();
  return console.log(getUser);
  /* const getUser = await prisma.user.findFirst({
    where: { name: "r", id: 2 },
  }); */
  /*   try {
    const deleteUser = await prisma.user.delete({
      where: { name: "r", id: 2 },
    });
    console.log(deleteUser);
  } catch (error) {
    console.log(error.meta.cause);
  }*/

  const Upsert = await prisma.user.upsert({
    where: { email: "juano@gmail.com" },
    create: { name: "juano", email: "juano@gmail.com" },
    update: { lastname: "Juanini" },
  });
  console.log(Upsert);
}

main();
