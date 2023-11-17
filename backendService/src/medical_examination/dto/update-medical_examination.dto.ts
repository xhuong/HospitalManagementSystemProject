import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalExaminationDto } from './create-medical_examination.dto';

export class UpdateMedicalExaminationDto extends PartialType(CreateMedicalExaminationDto) {}
