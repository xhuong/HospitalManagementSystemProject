import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthInsuranceCardDto } from './create-health_insurance_card.dto';

export class UpdateHealthInsuranceCardDto extends PartialType(CreateHealthInsuranceCardDto) {}
