import { z } from "zod";
import {
  realEstateSchedulesSchemas,
  realEstateSchemas,
  returnRealEstateSchemas,
} from "./realEstate.schemas";
import { usersSchemas, usersWithoutPasswordSchemas } from "./users.schemas";

export const schedulesSchemas = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstate: realEstateSchemas,
  user: usersSchemas,
});

export const requestSchedulesSchemas = schedulesSchemas
  .omit({
    id: true,
    user: true,
  })
  .extend({
    realEstate: z.number(),
  });

export const newRequestSchedulesSchemas = requestSchedulesSchemas.extend({
  realEstate: realEstateSchemas,
  user: usersSchemas,
});

export const updateSchedulesSchemas = requestSchedulesSchemas.partial();

export const allSchedulesSchemas = schedulesSchemas
  .extend({
    realEstate: realEstateSchedulesSchemas,
    user: usersWithoutPasswordSchemas,
  })
  .array();
