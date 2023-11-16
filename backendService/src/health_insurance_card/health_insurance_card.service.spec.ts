import { Test, TestingModule } from '@nestjs/testing';
import { HealthInsuranceCardService } from './health_insurance_card.service';

describe('HealthInsuranceCardService', () => {
  let service: HealthInsuranceCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthInsuranceCardService],
    }).compile();

    service = module.get<HealthInsuranceCardService>(HealthInsuranceCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
