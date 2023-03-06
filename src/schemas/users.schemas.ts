import { z } from "zod";

export const usersSchemas = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().optional(),
  password: z.string().max(120),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export const requestUsersSchemas = usersSchemas.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const usersWithoutPasswordSchemas = usersSchemas.omit({
  password: true,
});

export const updateUsersSchemas = requestUsersSchemas.omit({ admin: true });

export const updatePartialUsersSchemas = requestUsersSchemas
  .omit({ admin: true })
  .partial();

export const allUsersSchemas = usersSchemas.omit({ password: true }).array();
