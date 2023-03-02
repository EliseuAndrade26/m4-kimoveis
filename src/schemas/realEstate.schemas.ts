import { z } from "zod";
import { addressesSchemas } from "./addresses.schemas";
import { categoriesSchemas } from "./categories.schemas";

export const realEstateSchemas = z.object({
  id: z.number(),
  sold: z.boolean().optional(),
  value: z.number().max(12).multipleOf(0.01),
  size: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  address: addressesSchemas.nullish(),
  category: categoriesSchemas,
});

export const requestRealEstateSchemas = realEstateSchemas.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  address: true,
  category: true,
});

export const updateRealEstateSchemas = requestRealEstateSchemas.partial();

export const allRealEstateSchemas = realEstateSchemas.array();
