enum EMedicalUnit {
  TABLET = "TABLET",
  BLISTER_PACK = "BLISTER_PACK",
  BOX = "BOX",
  BOTTLE = "BOTTLE",
  JAR = "JAR",
  TUBE = "TUBE",
}

export interface IMedicalDataType {
  name: string;
  unit: EMedicalUnit;
  price: number;
}
