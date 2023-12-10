import { EGender, IUserDataType } from "@/types/user";

export const mapUserDataFromAPIToUI = (userDataAPIs: any[]): IUserDataType[] =>
  userDataAPIs.map((user: any) => ({
    key: user.id,
    name: user.name,
    phone: user.phone_number,
    identification_code: user.identificationCode,
    address: user.address,
    gender: user.gender
      ? user.gender === EGender.MALE
        ? EGender.MALE
        : EGender.FEMALE
      : undefined,
    id_department: user.id_department,
    id_role: user.id_role,
    id_room: user.id_room,
    id_bed: user.id_bed,
    create_at: undefined,
    update_at: undefined,
  }));
