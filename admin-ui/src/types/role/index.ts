enum ERoleType {
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PHARMACIST = "PHARMACIST",
  NURSE = "NURSE",
  PATIENT = "PATIENT",
}

export interface RoleDataType {
  key: React.Key;
  name: string;
  code: ERoleType;
}
