import { Test, TestingModule } from '@nestjs/testing';
import { HealthInsuranceCardController } from './health_insurance_card.controller';
import { HealthInsuranceCardService } from './health_insurance_card.service';

describe('HealthInsuranceCardController', () => {
  let controller: HealthInsuranceCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthInsuranceCardController],
      providers: [HealthInsuranceCardService],
    }).compile();

    controller = module.get<HealthInsuranceCardController>(HealthInsuranceCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
