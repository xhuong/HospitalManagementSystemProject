-- AlterTable
ALTER TABLE `Appointments` ADD COLUMN `status` ENUM('ACCEPTED', 'PROCESSING', 'REJECTED') NOT NULL DEFAULT 'PROCESSING';
