/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `displayName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dp` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "displayName" TEXT NOT NULL,
ADD COLUMN     "dp" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Post";

-- CreateTable
CREATE TABLE "public"."ContWatch" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ContWatch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ContWatch" ADD CONSTRAINT "ContWatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
