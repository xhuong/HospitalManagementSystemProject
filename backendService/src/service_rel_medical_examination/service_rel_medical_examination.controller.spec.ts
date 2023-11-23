import { Test, TestingModule } from '@nestjs/testing';
import { ServiceRelMedicalExaminationController } from './service_rel_medical_examination.controller';
import { ServiceRelMedicalExaminationService } from './service_rel_medical_examination.service';

describe('ServiceRelMedicalExaminationController', () => {
  let controller: ServiceRelMedicalExaminationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceRelMedicalExaminationController],
      providers: [ServiceRelMedicalExaminationService],
    }).compile();

    controller = module.get<ServiceRelMedicalExaminationController>(ServiceRelMedicalExaminationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
