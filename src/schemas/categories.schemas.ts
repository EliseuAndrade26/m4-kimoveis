import { z } from "zod";

export const categoriesSchemas = z.object({
  id: z.number(),
  name: z.string().max(45),
});

export const requestCategoriesSchemas = categoriesSchemas.omit({
  id: true,
});

export const allCategoriesSchemas = categoriesSchemas.array();

export const realEstatesCategoriesSchemas = z.object({
  id: z.number(),
  value: z.number().max(999999999999).multipleOf(0.01).or(z.string().max(14)),
  size: z.number().positive(),
  sold: z.boolean().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
