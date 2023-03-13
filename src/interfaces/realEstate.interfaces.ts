import { z } from "zod";
import {
  allRealEstateSchemas,
  realEstateSchemas,
  requestRealEstateSchemas,
  returnRealEstateSchemas,
  updateRealEstateSchemas,
} from "../schemas";

export type iCreateRealEstate = z.infer<typeof requestRealEstateSchemas>;
export interface iCreateRealEstateCategory extends iCreateRealEstate {
  category: {
    id: number;
    name: string;
  };
}
export type iRealEstate = z.infer<typeof realEstateSchemas>;
export type iUpdateRealEstate = z.infer<typeof updateRealEstateSchemas>;
export type iAllRealEstate = z.infer<typeof allRealEstateSchemas>;
export type iReturnRealEstateSchemas = z.infer<typeof returnRealEstateSchemas>;
