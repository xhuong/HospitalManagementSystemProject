import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceRelMedicalExaminationDto } from './create-service_rel_medical_examination.dto';

export class UpdateServiceRelMedicalExaminationDto extends PartialType(CreateServiceRelMedicalExaminationDto) {}
