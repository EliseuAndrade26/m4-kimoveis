import { z } from "zod";
import { realEstateSchemas } from "./realEstate.schemas";
import { usersSchemas } from "./users.schemas";

export const schedulesUsersPropertiesSchemas = z.object({
  id: z.number(),
  date: z.date(),
  hour: z.string(),
  realEstate: realEstateSchemas,
  user: usersSchemas,
});

export const requestSchedulesUsersPropertiesSchemas =
  schedulesUsersPropertiesSchemas.omit({
    id: true,
    realEstate: true,
    user: true,
  });

export const updateSchedulesUsersPropertiesSchemas =
  requestSchedulesUsersPropertiesSchemas.partial();

export const allSchedulesUsersPropertiesSchemas =
  schedulesUsersPropertiesSchemas.array();
