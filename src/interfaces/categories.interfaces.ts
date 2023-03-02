import { z } from "zod";
import { categoriesSchemas, requestCategoriesSchemas } from "../schemas";
import { allCategoriesSchemas } from "../schemas/categories.schemas";

export type iCreateCategories = z.infer<typeof requestCategoriesSchemas>;
export type iCategories = z.infer<typeof categoriesSchemas>;
export type iAllCategories = z.infer<typeof allCategoriesSchemas>;
