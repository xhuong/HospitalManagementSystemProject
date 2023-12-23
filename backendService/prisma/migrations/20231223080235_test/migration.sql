-- CreateTable
CREATE TABLE `Appointments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_patient` INTEGER NOT NULL,
    `id_doctor` INTEGER NOT NULL,
    `appointment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_id_patient_fkey` FOREIGN KEY (`id_patient`) REFERENCES `MedicalRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_id_doctor_fkey` FOREIGN KEY (`id_doctor`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
