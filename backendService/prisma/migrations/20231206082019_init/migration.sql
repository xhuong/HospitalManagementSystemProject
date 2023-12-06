/*
  Warnings:

  - You are about to drop the column `quantity` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `id_medical_record` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MedicalRecord` ADD COLUMN `hospital_admission_status` ENUM('OUT_PATIENT_TREATMENT', 'IN_PATIENT_TREATMENT') NOT NULL DEFAULT 'OUT_PATIENT_TREATMENT';

-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `quantity`,
    ADD COLUMN `id_medical_record` INTEGER NOT NULL,
    ADD COLUMN `payment_status` ENUM('UNPAID', 'PAID') NOT NULL DEFAULT 'UNPAID';

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_id_medical_record_fkey` FOREIGN KEY (`id_medical_record`) REFERENCES `MedicalRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
