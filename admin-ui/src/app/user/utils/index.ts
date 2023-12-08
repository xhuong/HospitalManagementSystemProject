import { EGender, UserDataType } from "@/types/user";

export const mapUserDataFromAPIToUI = (userDataAPIs: any[]): UserDataType[] =>
  userDataAPIs.map((user: any) => ({
    key: user.id,
    id: user.id,
    name: user.name,
    phone: user.phone,
    identification_code: user.identification_code,
    address: user.address,
    gender: user.gender === EGender.MALE ? EGender.MALE : EGender.FEMALE,
    id_department: user.id_department,
    id_role: user.id_role,
    id_room: user.id_room,
    id_bed: user.id_bed,
    create_at: undefined,
    update_at: undefined,
  }));
