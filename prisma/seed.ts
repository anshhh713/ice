import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "test1",
      email: "test1@ice.fake",
      displayName: "Test1",
      dp: "/jhoncena.jpg",
      password: "test@1",
      continueWatching: {
        create: [
          { title: "One Piece", imageSrc: "/luffy.jpg", imageAlt: "Luffy", rank: 1 },
          { title: "Naruto", imageSrc: "/naruto.jpg", imageAlt: "Naruto Uzumaki", rank: 2 },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
