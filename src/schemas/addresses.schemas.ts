import { z } from "zod";

export const addressesSchemas = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(6).nullish(),
  city: z.string().max(20),
  state: z.string().max(2),
});

export const requestAddressesSchemas = addressesSchemas.omit({
  id: true,
});

export const updateAddressesSchemas = requestAddressesSchemas.partial();

export const allAddressesSchemas = addressesSchemas.array();
