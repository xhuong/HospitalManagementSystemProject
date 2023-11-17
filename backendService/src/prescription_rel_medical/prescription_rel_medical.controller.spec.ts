import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptionRelMedicalController } from './prescription_rel_medical.controller';
import { PrescriptionRelMedicalService } from './prescription_rel_medical.service';

describe('PrescriptionRelMedicalController', () => {
  let controller: PrescriptionRelMedicalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescriptionRelMedicalController],
      providers: [PrescriptionRelMedicalService],
    }).compile();

    controller = module.get<PrescriptionRelMedicalController>(PrescriptionRelMedicalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
