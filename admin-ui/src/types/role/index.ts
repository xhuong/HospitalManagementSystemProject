enum ERoleType {
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PHARMACIST = "PHARMACIST",
  NURSE = "NURSE",
  PATIENT = "PATIENT",
}

export interface IRoleDataType {
  name: string;
  code: ERoleType;
}
