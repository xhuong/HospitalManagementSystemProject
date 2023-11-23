import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptionRelMedicalService } from './prescription_rel_medical.service';

describe('PrescriptionRelMedicalService', () => {
  let service: PrescriptionRelMedicalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescriptionRelMedicalService],
    }).compile();

    service = module.get<PrescriptionRelMedicalService>(PrescriptionRelMedicalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
