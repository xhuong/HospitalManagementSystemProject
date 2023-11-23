import { Test, TestingModule } from '@nestjs/testing';
import { MedicalExaminationController } from './medical_examination.controller';
import { MedicalExaminationService } from './medical_examination.service';

describe('MedicalExaminationController', () => {
  let controller: MedicalExaminationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalExaminationController],
      providers: [MedicalExaminationService],
    }).compile();

    controller = module.get<MedicalExaminationController>(MedicalExaminationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
