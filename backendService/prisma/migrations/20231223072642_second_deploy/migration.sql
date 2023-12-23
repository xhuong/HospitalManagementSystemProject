/*
  Warnings:

  - You are about to drop the column `id_bed` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `identificationCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[identification_code]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identification_code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_id_bed_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_roleId_fkey`;

-- DropIndex
DROP INDEX `User_identificationCode_key` ON `User`;

-- AlterTable
ALTER TABLE `Patient` ADD COLUMN `id_bed` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `id_bed`,
    DROP COLUMN `identificationCode`,
    DROP COLUMN `roleId`,
    ADD COLUMN `identification_code` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Role`;

-- CreateIndex
CREATE UNIQUE INDEX `User_identification_code_key` ON `User`(`identification_code`);

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_id_bed_fkey` FOREIGN KEY (`id_bed`) REFERENCES `Bed`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
