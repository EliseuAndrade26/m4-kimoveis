import { z } from "zod";
import {
  allRealEstateSchemas,
  realEstateSchemas,
  requestRealEstateSchemas,
  updateRealEstateSchemas,
} from "../schemas";

export type iCreateRealEstate = z.infer<typeof requestRealEstateSchemas>;
export type iRealEstate = z.infer<typeof realEstateSchemas>;
export type iUpdateRealEstate = z.infer<typeof updateRealEstateSchemas>;
export type iAllRealEstate = z.infer<typeof allRealEstateSchemas>;
