import { z } from "zod";
import { addressesSchemas, requestAddressesSchemas } from "./addresses.schemas";
import {
  categoriesSchemas,
  requestCategoriesSchemas,
} from "./categories.schemas";

export const realEstateSchemas = z.object({
  id: z.number(),
  value: z.number().max(999999999999).multipleOf(0.01).or(z.string().max(14)),
  size: z.number().positive(),
  sold: z.boolean().optional(),
  address: requestAddressesSchemas,
  createdAt: z.string(),
  updatedAt: z.string(),
  categoryToCreate: requestCategoriesSchemas.optional(),
});

export const requestRealEstateSchemas = realEstateSchemas.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  sold: true,
});

export const returnRealEstateSchemas = z.object({
  address: addressesSchemas,
  category: categoriesSchemas,
  id: z.number(),
  createdAt: z.string(),
  value: z.number().max(999999999999).multipleOf(0.01).or(z.string().max(14)),
  size: z.number().positive(),
  sold: z.boolean(),
  updatedAt: z.string(),
});

export const updateRealEstateSchemas = requestRealEstateSchemas.partial();

export const allRealEstateSchemas = realEstateSchemas
  .extend({
    address: addressesSchemas,
  })
  .array();

export const realEstateSchedulesSchemas = realEstateSchemas.omit({
  categoryToCreate: true,
  address: true,
});
