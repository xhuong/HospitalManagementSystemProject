import { PartialType } from '@nestjs/mapped-types';
import { CreatePrescriptionRelMedicalDto } from './create-prescription_rel_medical.dto';

export class UpdatePrescriptionRelMedicalDto extends PartialType(CreatePrescriptionRelMedicalDto) {}
