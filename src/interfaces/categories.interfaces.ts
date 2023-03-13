import { z } from "zod";
import {
  categoriesSchemas,
  requestCategoriesSchemas,
  allCategoriesSchemas,
  allRealEstateCategorySchemas,
} from "../schemas";

export type iCreateCategories = z.infer<typeof requestCategoriesSchemas>;
export type iCategories = z.infer<typeof categoriesSchemas>;
export type iAllCategories = z.infer<typeof allCategoriesSchemas>;
export type iAllRealEstateCategory = z.infer<
  typeof allRealEstateCategorySchemas
>;
