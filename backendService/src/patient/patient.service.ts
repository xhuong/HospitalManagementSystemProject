import { Injectable } from "@nestjs/common";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";
import { UpdatePatientDto } from "./dto/update-patient.dto";
import { MedicalRecordService } from "src/medical_record/medical_record.service";

enum EHospitalAdmissionStatus {
  OUT_PATIENT_TREATMENT = "OUT_PATIENT_TREATMENT",
  IN_PATIENT_TREATMENT = "IN_PATIENT_TREATMENT",
}

@Injectable()
export class PatientService {
  constructor(
    private prisma: PrismaService,
    private medicalRecordService: MedicalRecordService,
  ) {}

  async findUserByIdentificationCode(identification_code: string) {
    return await this.prisma.user.findUnique({
      where: {
        identification_code: identification_code,
      },
    });
  }

  async create(createPatientDto: CreatePatientDto, response: Response) {
    try {
      const foundUser = await this.findUserByIdentificationCode(
        createPatientDto.user.identification_code,
      );
      if (Object.is(foundUser, null)) {
        // create new record in user table

        const userData = await this.prisma.user.create({
          data: createPatientDto.user,
        });

        // create new record in patient table
        const patientData = await this.prisma.patient.create({
          data: { id_user: userData.id },
        });

        // create a new medical record in patient table
        await this.medicalRecordService.create(
          {
            id_patient: patientData.id,
            import_date_time: new Date(),
            export_date_time: null,
            hospital_admission_status:
              EHospitalAdmissionStatus.OUT_PATIENT_TREATMENT,
          },
          response,
        );

        return response.status(200).json({
          status: 200,
          message: "Create new patient successfully",
          result: {
            data: patientData,
          },
        });
      } else {
        return response.status(400).json({
          status: 400,
          message:
            "Create new patient failed, please check the identification code",
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: error,
      };
    }
  }

  async findAll(response: Response) {
    try {
      const patient = await this.prisma.patient.findMany({
        include: {
          user: true,
        },
      });
      if (!Object.is(patient, null)) {
        return response.status(200).json({
          status: 200,
          message: "Get all patient successfully",
          result: {
            data: patient,
          },
        });
      }
    } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error,
      });
    }
  }

  async findOne(identification_code: string, response: Response) {
    try {
      const data = await this.prisma.patient.findFirst({
        where: {
          user: { identification_code: identification_code },
        },
        include: {
          user: true,
        },
      });
      if (!Object.is(data, null)) {
        return response.status(200).json({
          status: 200,
          message: `Get patient with identification code = ${identification_code} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `Get patient with identification code = ${identification_code} failed`,
        });
      }
    } catch {
      return {
        status: 400,
        message: `Get patient identification code =  ${identification_code} failed`,
      };
    }
  }

  async update(
    id: number,
    updatePatientDto: UpdatePatientDto,
    response: Response,
  ) {
    try {
      // check if the patient exists
      const existingPatient = await this.prisma.patient.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingPatient) {
        return response.status(400).json({
          status: 400,
          message: `Patient with id ${id} not found`,
        });
      } else {
        // update data for user table
        const data = await this.prisma.user.update({
          where: { id: existingPatient.id_user },
          data: updatePatientDto,
        });
        return response.status(200).json({
          status: 200,
          message: `Update patient with id ${id} successfully`,
          result: {
            data,
          },
        });
      }
    } catch {
      return {
        status: 400,
        message: `Update patient with id ${id} failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      // check if the patient exists
      const existingPatient = await this.prisma.patient.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingPatient) {
        return response.status(400).json({
          status: 400,
          message: `Patient with id ${id} not found`,
        });
      }
      // delete record in patient table
      await this.prisma.patient.delete({ where: { id } });

      // delete record in user table
      await this.prisma.user.delete({ where: { id: existingPatient.id_user } });

      return response.status(200).json({
        status: 200,
        message: `Delete patient with id ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: `Delete patient with id ${id} failed`,
      };
    }
  }
}
