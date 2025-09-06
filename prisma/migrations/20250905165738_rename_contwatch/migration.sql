/*
  Warnings:

  - You are about to drop the `ContWatch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ContWatch" DROP CONSTRAINT "ContWatch_userId_fkey";

-- DropTable
DROP TABLE "public"."ContWatch";

-- CreateTable
CREATE TABLE "public"."cont_watch" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "cont_watch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."cont_watch" ADD CONSTRAINT "cont_watch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
