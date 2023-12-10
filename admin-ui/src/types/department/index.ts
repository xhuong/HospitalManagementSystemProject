export enum EDepartmentType {
  CLINICAL_DEPARTMENT = "CLINICAL_DEPARTMENT",
  CLINICAL_LABORATORY_DEPARTMENT = "CLINICAL_LABORATORY_DEPARTMENT",
  FUNCTIONAL_DEPARTMENT = "FUNCTIONAL_DEPARTMENT",
}

export interface IDepartmentDataType {
  name: string;
  department_type: EDepartmentType;
}
