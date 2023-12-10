export enum EGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface IUserDataType {
  id: number;
  name: string;
  phone?: string;
  identification_code: string;
  address?: string;
  gender?: EGender;
  id_department?: number;
  id_role: number;
  id_room?: number;
  id_bed?: number;
  create_at?: Date;
  update_at?: Date;
}
