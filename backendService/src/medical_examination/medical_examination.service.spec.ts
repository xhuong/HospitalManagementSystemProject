import { Test, TestingModule } from '@nestjs/testing';
import { MedicalExaminationService } from './medical_examination.service';

describe('MedicalExaminationService', () => {
  let service: MedicalExaminationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalExaminationService],
    }).compile();

    service = module.get<MedicalExaminationService>(MedicalExaminationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
