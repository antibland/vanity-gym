/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - Made the column `details` on table `Class` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "maxCapacity" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "startDate" TIMESTAMP(3),
ALTER COLUMN "details" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_key" ON "Class"("name");
