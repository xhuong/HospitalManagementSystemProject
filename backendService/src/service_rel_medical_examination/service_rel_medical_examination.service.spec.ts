import { Test, TestingModule } from '@nestjs/testing';
import { ServiceRelMedicalExaminationService } from './service_rel_medical_examination.service';

describe('ServiceRelMedicalExaminationService', () => {
  let service: ServiceRelMedicalExaminationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceRelMedicalExaminationService],
    }).compile();

    service = module.get<ServiceRelMedicalExaminationService>(ServiceRelMedicalExaminationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
