import { z } from "zod";

export const categoriesSchemas = z.object({
  id: z.number(),
  name: z.string().max(45),
});

export const requestCategoriesSchemas = categoriesSchemas.omit({
  id: true,
});

export const allCategoriesSchemas = categoriesSchemas.array();
